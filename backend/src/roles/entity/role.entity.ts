import { Permission } from "src/permissions/entity/permission.entity";
import { User } from "src/users/entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => User, user => user.role)
  users: User[]

  @ManyToMany(() => Permission, permission => permission.roles)
  @JoinTable({name: 'roles_permissions'})
  permissions: Permission[]
  
}



