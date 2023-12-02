import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('carousel')
export class Carousel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  image: string

  @Column()
  isActive: boolean
}



