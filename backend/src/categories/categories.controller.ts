import { Body, Controller, Delete, Get, Param, Patch, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Public } from 'src/auth/constant';
import CreateCategoryDto from './dtos/create-category.dto';
import UpdateCategoryDto from './dtos/update-category.dto';
import { PermissionGuard } from 'src/guard/permissions.guard';

@UseGuards(PermissionGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }
  
  @Get()
  @Public()
  async findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @Public()
  async findById(@Param('id') id: string) {
    return this.categoriesService.findById(id);
  }

  @Post()
  @SetMetadata('permission', ['create:categories'])
  async create(@Body() body: CreateCategoryDto) {
    return this.categoriesService.create(body);
  }

  @Patch(':id')
  @SetMetadata('permission', ['update:categories'])
  async update(@Param('id') id: string, @Body() body: UpdateCategoryDto) {
    return this.categoriesService.update(id, body);
  }

  @Delete(':id')
  @SetMetadata('permission', ['delete:categories'])
  async delete(@Param('id') id: string) {
    return this.categoriesService.delete(id);
  }

}
