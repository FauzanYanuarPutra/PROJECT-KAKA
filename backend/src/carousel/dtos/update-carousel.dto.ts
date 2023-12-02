import { IsNotEmpty, IsOptional } from "class-validator";

export default class UpdateCarouselDto {
  @IsOptional()
  @IsNotEmpty()
  image: string;

  @IsOptional()
  @IsNotEmpty()
  isACtive: boolean;
}