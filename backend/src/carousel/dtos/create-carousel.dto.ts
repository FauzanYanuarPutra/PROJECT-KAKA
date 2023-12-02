import { IsNotEmpty } from "class-validator";

export default class CreateCarouselDto {
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  isACtive: boolean;
}