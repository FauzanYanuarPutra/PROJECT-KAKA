import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './entity/type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
