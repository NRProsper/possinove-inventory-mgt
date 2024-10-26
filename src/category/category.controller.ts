import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryService } from './category.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Categories')
@Controller('categories')
export class CategoryController {

  constructor(
    private readonly categoryService: CategoryService
  ) {}

  @ApiOperation({summary: 'Create a new category'})
  @ApiBody({type: CreateCategoryDto})
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @ApiOperation({summary: 'Get all categories'})
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

}