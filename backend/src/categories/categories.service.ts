import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { Repository } from 'typeorm';
import CreateCategoryDto from './dtos/create-category.dto';
import UpdateCategoryDto from './dtos/update-category.dto';


@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly CategoryRepository: Repository<Category>
  ) { }

  async findAll() {
    return await this.CategoryRepository.find();
  }

  async findById(id: string | number) {
    const NumID = Number(id);
    if (isNaN(NumID)) {
      throw new BadRequestException('ID harus berupa angka');
    }

    const find = await this.CategoryRepository.findOne({
      where: { id: NumID }
    })

    if(!find) {
      throw new NotFoundException('ID tidak ditemukan');
    }

    return find;
  }

  async create(body: CreateCategoryDto) {
    return this.CategoryRepository.save(body);
  }

  async update(id: string | number, body: UpdateCategoryDto) {
    const find = await this.findById(id);

    find.name = body.name;

    return await this.CategoryRepository.save(find);
  }

  async delete(id: string | number) {
    const find = await this.findById(id);

    return await this.CategoryRepository.remove(find);
  }
}
