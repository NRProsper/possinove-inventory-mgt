import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto{

  @ApiProperty({
    type: String,
    description: 'The category name is required'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

}