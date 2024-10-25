import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../category/entities/category.entity';
import { PaginationQueryDto } from '../utils/pagination/pagination-query.dto';
import { PaginationResult } from '../utils/pagination/paginationResult';

@Injectable()
export class ProductService {
  
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}
  
  async create(createProductDto: CreateProductDto): Promise<Product> {

    const product = new Product();

    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.quantity = createProductDto.quantity;

    product.category = await this.categoryRepository.findOne({ where: { id: createProductDto.category } })

    return this.productRepository.save(product);

  }

  async findAll(paginationQuery: PaginationQueryDto): Promise<PaginationResult<Product>> {
    const {page, limit, sortBy, sortOrder} = paginationQuery;


    const query = this.productRepository.createQueryBuilder('product')
      .orderBy(`product.${sortBy}`, sortOrder)
      .skip((page - 1) * limit)
      .take(limit);

    const [products, total] = await query.getManyAndCount();
    const totalPages = Math.ceil(total / limit);

    return {
      data: products,
      total,
      page,
      limit,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1
    }

  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({where: {id: id}, relations: ['category']})
    if(!product) {
      throw new NotFoundException("Requested product is not available");
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<any> {

    const product = await this.productRepository.findOne({where: {id: id}});
    if (!product) {
      throw new NotFoundException('The requested product does not exist')
    }
    if(updateProductDto.category) {
      const category = await this.categoryRepository.findOne({where: {id: updateProductDto.category}})
      if (!category) {
        throw new NotFoundException('The requested category does not exist')
      }
      product.category = category;
    }

    product.name = updateProductDto.name;
    product.description = updateProductDto.description;
    product.quantity = updateProductDto.quantity;

    return this.productRepository.update(id, updateProductDto);

  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
