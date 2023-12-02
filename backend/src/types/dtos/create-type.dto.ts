import { IsNotEmpty } from "class-validator";

export default class CreateTypeDto {
  @IsNotEmpty()
  name: string;
}