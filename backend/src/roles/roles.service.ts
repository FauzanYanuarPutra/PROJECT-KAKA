import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entity/role.entity';
import { Repository } from 'typeorm';
import CreateRoleDto from './dtos/create-role.dto';
import { PermissionsService } from 'src/permissions/permissions.service';
import UpdateRoleDto from './dtos/update-role.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly rolesRepository: Repository<Role>,
    private readonly permissionsService: PermissionsService,
    private readonly usersService: UsersService
  ) { }
  
  async findAll() {
    return await this.rolesRepository.find({ relations: ['permissions', 'users'] });
  }

  async findById(id: string | number) {
    const NumID = Number(id);
    if (isNaN(NumID)) {
      throw new BadRequestException('ID harus berupa angka');
    }

    const find = await this.rolesRepository.findOne({
      where: { id: NumID },
      relations: ['permissions', 'users']
    });

    if(!find) {
      throw new NotFoundException('ID tidak ditemukan');
    }

    return find;
  }

  async findByName(name: string) {
    const findName = await this.rolesRepository.findOne({
      where: { name },
      relations: ['permissions']
    })

    if(findName) {
      throw new BadRequestException('Role sudah ada');
    }
    
    return findName;
  }

  async create(Body: CreateRoleDto) {
    const { name, permissions } = Body;

    await this.findByName(name)

    const savedRole = await this.rolesRepository.save({
      name
    });

    if(permissions) {
      savedRole.permissions = await this.addOrRemovePermissions(savedRole.id, permissions);
    }

    await this.rolesRepository.save(savedRole);

    return savedRole;
  }

  async update(id: string, body: UpdateRoleDto) {
    const { name, permissions } = body;

    const find = await this.findById(id);

    if (Object.keys(body).length === 0) {
      throw new BadRequestException('Anda tidak mengubah apapun');
    }

    if(find.name !== name) {
      await this.findByName(name);
    }

    find.name = name;

    if(permissions) {
      find.permissions = await this.addOrRemovePermissions(find.id, permissions);
    }

    return await this.rolesRepository.save(find);
  }


  async delete(id: string | number) {
    const find = await this.findById(id);

    if (find.users.length > 0) {
      find.users.forEach(async (user) => {
        await this.usersService.deleteRole(user.id);
      })
    }

    find.permissions = await this.addOrRemovePermissions(find.id, []);

    return await this.rolesRepository.remove(find);
  }

    private async addOrRemovePermissions(roleId: string | number, partyIds: (number | string)[]) {
    const role = await this.findById(roleId);
  
    const permissionsToAdd = partyIds.filter((partyId) =>
      role.permissions.every((party) => party.id !== partyId)
    );
  
    const permissionsToRemove = role.permissions.filter(
      (party) => !partyIds.includes(party.id)
    );
  
    const permissionsToAddEntities = await Promise.all(
      permissionsToAdd.map((partyId) =>
        this.permissionsService.findById(partyId)
      )
    );
  
    role.permissions = [...role.permissions, ...permissionsToAddEntities].filter(
      (party) => !permissionsToRemove.includes(party)
    );

    return role.permissions; 
  }
}
