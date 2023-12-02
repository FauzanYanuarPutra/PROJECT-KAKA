import { Body, Controller, Delete, Get, Param, Patch, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { PermissionGuard } from 'src/guard/permissions.guard';
import { BrandsService } from './brands.service';
import { Public } from 'src/auth/constant';
import UpdateBrandDto from './dtos/update-brand.dto';
import CreateBrandDto from './dtos/create-brand.dto';

@UseGuards(PermissionGuard)
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandService: BrandsService) { }
  
  @Get()
  @Public()
  async findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  @Public()
  async findById(@Param('id') id: string) {
    return this.brandService.findById(id);
  }

  @Post()
  @SetMetadata('permission', ['create:brands'])
  async create(@Body() body: CreateBrandDto) {
    return this.brandService.create(body);
  }

  @Patch(':id')
  @SetMetadata('permission', ['update:brands'])
  async update(@Param('id') id: string, @Body() body: UpdateBrandDto) {
    return this.brandService.update(id, body);
  }

  @Delete(':id')
  @SetMetadata('permission', ['delete:brands'])
  async delete(@Param('id') id: string) {
    return this.brandService.delete(id);
  }

}
