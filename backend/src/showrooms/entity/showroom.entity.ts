import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('show_room')
export class ShowRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kota: string;

  @Column()
  deskripsi: string;

  @Column()
  location: string

  @Column()
  telp: string;

  @Column()
  whatsapp: string;

  @Column()
  map: string;
}



