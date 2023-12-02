import { Exclude } from 'class-transformer';
import { Role } from 'src/roles/entity/role.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @ManyToOne(() => Role, role => role.users, { nullable: true })
  role: Role
}


