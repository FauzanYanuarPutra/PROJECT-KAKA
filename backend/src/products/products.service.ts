import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
    @InjectRepository(Product) private readonly productsRepository: Repository<Product>,
  ) { }
  
  async findAll() {
    return await this.productsRepository.find({ relations: ['category', 'brand', 'type'] });
  }

  async findById(id: string | number) {
    const NumID = Number(id);
    if (isNaN(NumID)) {
      throw new BadRequestException('ID harus berupa angka');
    }

    const find = await this.productsRepository.findOne({
      where: { id: NumID },
      relations: ['category', 'brand', 'type'],
    })

    if(!find) {
      throw new NotFoundException('ID tidak ditemukan');
    }

    return find;
  }

}
