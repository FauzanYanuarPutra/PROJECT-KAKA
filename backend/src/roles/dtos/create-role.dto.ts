import { IsArray, IsNotEmpty, IsOptional } from "class-validator";

export default class CreateRoleDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsArray()
  permissions: any[]
}


