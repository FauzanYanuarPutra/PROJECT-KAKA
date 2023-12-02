import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) { }
  
  async findAll() {
    return this.usersRepository.find({ relations: ['role', 'role.permissions'] });
  }

  async findEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
      relations: ['role', 'role.permissions']
    })

    return user
  }

  async createUser(email: string, username: string, password: string) {

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await this.usersRepository.create({
      email,
      username,
      password: hashPassword
    })

    return await this.usersRepository.save(newUser);
  }

  async findById(id: string) {
    const NumID = Number(id);
    if (isNaN(NumID)) {
      throw new BadRequestException('ID harus berupa angka');
    }

    const find = await this.usersRepository.findOne({
      where: { id: NumID },
      relations: ['role', 'role.permissions']
    })

    if(!find) {
      throw new NotFoundException('ID tidak ditemukan');
    }

    return find
  }

  async findOne(username: string): Promise<any> {
    return this.usersRepository.findOne({
      where: { username },
      relations: ['role', 'role.permissions']
    });
  }

  async deleteRole(id: number) {
    const NumID = Number(id);
    if (isNaN(NumID)) {
      throw new BadRequestException('ID harus berupa angka');
    }

    const find = await this.usersRepository.findOne({
      where: { id: NumID },
      relations: ['role', 'role.permissions']
    })

    if(!find) {
      throw new NotFoundException('ID tidak ditemukan');
    }

    find.role = null
    return await this.usersRepository.save(find);
  }


  
}
