import { IsNotEmpty, IsOptional } from "class-validator";

export default class UpdatePermissionDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;
}