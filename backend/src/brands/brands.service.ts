import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entity/brand.entity';
import { Repository } from 'typeorm';
import CreateBrandDto from './dtos/create-brand.dto';
import UpdateBrandDto from './dtos/update-brand.dto';

@Injectable()
export class BrandsService {
    constructor(
    @InjectRepository(Brand) private readonly BrandRepository: Repository<Brand>
  ) { }

  async findAll() {
    return await this.BrandRepository.find();
  }

  async findById(id: string | number) {
    const NumID = Number(id);
    if (isNaN(NumID)) {
      throw new BadRequestException('ID harus berupa angka');
    }

    const find = await this.BrandRepository.findOne({
      where: { id: NumID }
    })

    if(!find) {
      throw new NotFoundException('ID tidak ditemukan');
    }

    return find;
  }

  async create(body: CreateBrandDto) {
    return this.BrandRepository.save(body);
  }

  async update(id: string | number, body: UpdateBrandDto) {
    const find = await this.findById(id);

    find.name = body.name;

    return await this.BrandRepository.save(find);
  }

  async delete(id: string | number) {
    const find = await this.findById(id);

    return await this.BrandRepository.remove(find);
  }
}
