import { IsArray, IsNotEmpty, IsOptional } from "class-validator";

export default class UpdateRoleDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsArray()
  permissions: any[]
}