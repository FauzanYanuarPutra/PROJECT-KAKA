import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Public } from 'src/auth/constant';
import { ProductsService } from './products.service';
import { PermissionGuard } from 'src/guard/permissions.guard';

@UseGuards(PermissionGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }
  
  @Get()
  @Public()
  async findAll() {
    return this.productsService.findAll();
  }

  @Get('/:id')
  @Public()
  async findByID(@Param('id') id: string) {
    return this.productsService.findById(id);
  }

}
