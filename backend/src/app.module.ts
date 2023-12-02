import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { TypeOrmConfig } from './config/Typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { TypesModule } from './types/types.module';
import { ShowroomsModule } from './showrooms/showrooms.module';
import { CarouselModule } from './carousel/carousel.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), AuthModule, UsersModule, RolesModule, PermissionsModule, ProductsModule, CategoriesModule, BrandsModule, TypesModule, ShowroomsModule, CarouselModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
    }
  ],
})
export class AppModule {}
