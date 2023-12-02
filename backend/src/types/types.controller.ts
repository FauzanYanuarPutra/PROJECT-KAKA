import { Body, Controller, Delete, Get, Param, Patch, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { Public } from 'src/auth/constant';
import { PermissionGuard } from 'src/guard/permissions.guard';
import CreateTypeDto from './dtos/create-type.dto';
import UpdateTypeDto from './dtos/update-type.dto';
import { TypesService } from './types.service';

@UseGuards(PermissionGuard)
@Controller('types')
export class TypesController {
  constructor(private readonly typeService: TypesService) {}
  
  @Get()
  @Public()
  async findAll() {
    return this.typeService.findAll();
  }

  @Get('/:id')
  @Public()
  async findByID(@Param('id') id: string) {
    return this.typeService.findById(id);
  }

  @Post()
  @SetMetadata('permission', ['create:types']) 
  async create(@Body() body: CreateTypeDto) {
    return this.typeService.create(body);
  }

  @Patch('/:id')
  @SetMetadata('permission', ['update:types'])
  async update(@Param('id') id: string, @Body() body: UpdateTypeDto) {
    return this.typeService.update(id, body);
  }

  @Delete('/:id')
  @SetMetadata('permission', ['delete:types'])
  async delete(@Param('id') id: string) {
    return this.typeService.delete(id);
  }
}
