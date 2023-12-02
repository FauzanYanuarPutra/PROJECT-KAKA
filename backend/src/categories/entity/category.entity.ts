import { Product } from "src/products/entity/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Product, product => product.category)
  products: Product[]
}



