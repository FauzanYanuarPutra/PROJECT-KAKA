import { Brand } from "src/brands/entity/brand.entity";
import { Category } from "src/categories/entity/category.entity";
import { Type } from "src/types/entity/type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  price: number

  @Column()
  diskon: number
  
  @Column()
  stock: number

  @Column()
  image: string

  @Column()
  description: string

  @ManyToOne(() => Category, category => category.products)
  category: Category

  @ManyToOne(() => Brand, brand => brand.products)
  brand: Brand

  @ManyToOne(() => Type, type => type.products)
  type: Type
}