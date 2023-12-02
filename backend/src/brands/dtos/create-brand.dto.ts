import { IsNotEmpty } from "class-validator";

export default class CreateBrandDto {
  @IsNotEmpty()
  name: string;
  
}