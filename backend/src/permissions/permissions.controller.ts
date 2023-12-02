import { Body, Controller, Delete, Get, Param, Patch, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { Public } from 'src/auth/constant';
import { PermissionGuard } from 'src/guard/permissions.guard';
import CreatePermissionDto from './dtos/create-permission.dto';
import UpdatePermissionDto from './dtos/update-permission.dto';

@UseGuards(PermissionGuard)
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) { }
  
  @Get()
  @Public()
  async findAll() {
    return this.permissionsService.findAll();
  }


  @Get(':id')
  @Public()
  async findById(@Param('id') id: string) {
    return this.permissionsService.findById(id);
  }

  @Post()
  @SetMetadata('permission', ['create:permissions'])
  async create(@Body() body: CreatePermissionDto) {
    return this.permissionsService.create(body);
  }

  @Patch(':id')
  @SetMetadata('permission', ['update:permissions'])
  async update(@Param('id') id: string, @Body() body: UpdatePermissionDto) {
    return this.permissionsService.update(id, body);
  }

  @Delete(':id')
  @SetMetadata('permission', ['delete:permissions'])
  async delete(@Param('id') id: string) {
    return this.permissionsService.delete(id);
  }


}
