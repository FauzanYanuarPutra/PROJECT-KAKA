import { IsNotEmpty } from "class-validator";

export default class CreatePermissionDto {
  @IsNotEmpty()
  name: string;
}