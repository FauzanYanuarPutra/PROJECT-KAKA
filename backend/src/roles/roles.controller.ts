import { Body, Controller, Delete, Get, Param, Patch, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { Public } from 'src/auth/constant';
import { PermissionGuard } from 'src/guard/permissions.guard';
import { RolesService } from './roles.service';
import CreateRoleDto from './dtos/create-role.dto';
import UpdateRoleDto from './dtos/update-role.dto';

@UseGuards(PermissionGuard)
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
  @Get()
  @Public()
  async findAll() {
    return this.rolesService.findAll();
  }

  @Get('/:id')
  @Public()
  async findByID(@Param('id') id: string) {
    return this.rolesService.findById(id);
  }

  @Post()
  @SetMetadata('permission', ['create:roles']) 
  async create(@Body() body: CreateRoleDto) {
    return this.rolesService.create(body);
  }

  @Patch('/:id')
  @SetMetadata('permission', ['update:roles'])
  async update(@Param('id') id: string, @Body() body: UpdateRoleDto) {
    return this.rolesService.update(id, body);
  }

  @Delete('/:id')
  @SetMetadata('permission', ['delete:roles'])
  async delete(@Param('id') id: string) {
    return this.rolesService.delete(id);
  }
}

