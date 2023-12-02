import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Permission } from './entity/permission.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UpdatePermissionDto from './dtos/update-permission.dto';
import CreatePermissionDto from './dtos/create-permission.dto';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission) private readonly PermissionRepository: Repository<Permission>
  ) { }

  async findAll() {
    return await this.PermissionRepository.find();
  }

  async findById(id: string | number) {
    const NumID = Number(id);
    if (isNaN(NumID)) {
      throw new BadRequestException('ID harus berupa angka');
    }

    const find = await this.PermissionRepository.findOne({
      where: { id: NumID }
    })

    if(!find) {
      throw new NotFoundException('ID tidak ditemukan');
    }

    return find;
  }

  async create(body: CreatePermissionDto) {
    return this.PermissionRepository.save(body);
  }

  async update(id: string | number, body: UpdatePermissionDto) {
    const find = await this.findById(id);

    find.name = body.name;

    return await this.PermissionRepository.save(find);
  }

  async delete(id: string | number) {
    const find = await this.findById(id);

    return await this.PermissionRepository.remove(find);
  }
}
