import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Type } from './entity/type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import CreateTypeDto from './dtos/create-type.dto';
import UpdateTypeDto from './dtos/update-type.dto';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type) private readonly TypeRepository: Repository<Type>
  ) { }

  async findAll() {
    return await this.TypeRepository.find();
  }

  async findById(id: string | number) {
    const NumID = Number(id);
    if (isNaN(NumID)) {
      throw new BadRequestException('ID harus berupa angka');
    }

    const find = await this.TypeRepository.findOne({
      where: { id: NumID }
    })

    if(!find) {
      throw new NotFoundException('ID tidak ditemukan');
    }

    return find;
  }

  async create(body: CreateTypeDto) {
    return this.TypeRepository.save(body);
  }

  async update(id: string | number, body: UpdateTypeDto) {
    const find = await this.findById(id);

    find.name = body.name;

    return await this.TypeRepository.save(find);
  }

  async delete(id: string | number) {
    const find = await this.findById(id);

    return await this.TypeRepository.remove(find);
  }
}
