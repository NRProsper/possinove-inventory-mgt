import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {

  @ApiProperty({
    type: String,
    description: 'The product name is required'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    description: 'The product description is required'
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: Number,
    description: 'The product quantity is required'
  })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({
    type: Number,
    description: 'The product category is required'
  })
  @IsNumber()
  @IsNotEmpty()
  category: number;

}
