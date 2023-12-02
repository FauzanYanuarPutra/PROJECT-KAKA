import { IsNotEmpty } from "class-validator";

export default class CreateCategoryDto {
  @IsNotEmpty()
  name: string;
  
}