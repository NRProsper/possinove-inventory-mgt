import { BadRequestException, Body, Injectable, NotFoundException, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const sameCategory = await this.categoryRepository.findOne({where: {name: createCategoryDto.name}})
    if(sameCategory) {
      throw new BadRequestException('The category with the same name already exists')
    }
    return this.categoryRepository.save(createCategoryDto);
  }

  findAll(): Promise<Category []> {
    return this.categoryRepository.find();
  }

  findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({where: { id }, relations: ['products']})
  }

  async update(id:number, name:string) {
    const category = await this.categoryRepository.findOne({where: {id}});
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    const sameCategory = await this.categoryRepository.findOne({where: {name: name}});
    if(sameCategory) {
      throw new BadRequestException('The category with the same name already exists')
    }

    category.name = name;

    return this.categoryRepository.save(category);
  }

  async delete(id:number) {
    const category = await this.categoryRepository.findOne({where: {id}});
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    return this.categoryRepository.remove(category);

  }


}