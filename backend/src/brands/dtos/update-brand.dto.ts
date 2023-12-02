import { IsNotEmpty, IsOptional } from "class-validator";

export default class UpdateBrandDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;
  
}