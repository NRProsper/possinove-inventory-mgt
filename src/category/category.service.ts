import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';


@Injectable()
export class CategoryService {
  constructor(
    private readonly categoryRepository: Repository<Category>
  ) {}



}