import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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

  @ApiOperation({summary: 'Get single category'})
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoryService.findOne(+id);
  }

  @ApiOperation({summary: 'Update category'})
  @ApiBody({type: CreateCategoryDto})
  @Patch(':id')
  update(@Param('id') id:number, @Body('name')name: string) {
    return this.categoryService.update(+id, name);
  }

  @ApiOperation({summary: 'Delete category'})
  @Delete(':id')
  delete(@Param('id') id:number) {
    return this.categoryService.delete(+id);
  }

}