import { IsNotEmpty, IsOptional } from "class-validator";

export default class UpdateTypeDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;
}