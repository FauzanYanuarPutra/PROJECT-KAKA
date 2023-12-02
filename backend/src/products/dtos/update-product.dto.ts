import { IsNotEmpty, IsOptional } from "class-validator";

export default class UpdateCategoryDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;
}