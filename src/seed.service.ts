import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category/entities/category.entity';
import { Repository } from 'typeorm';
import { Product } from './product/entities/product.entity';

@Injectable()
export class SeedService implements OnModuleInit {

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  async onModuleInit(): Promise<any> {
    await this.seed();
  }


  private async seed() {

    const categoriesData = [
      'Laptops',
      'Desktops',
      'Monitors',
      'Printers',
      'Projectors',
      'Speakers',
      'Headphones',
      'Computer Accessories',
      'Operating Systems',
      'Software'
    ];

    const categories = await Promise.all(categoriesData.map(async name => {
      let category = await this.categoryRepository.findOneBy({ name });
      if (!category) {
        category = this.categoryRepository.create({ name });
        await this.categoryRepository.save(category);
      }
      return category;
    }));

    const productNames = [
      'Ultra HD Laptop', 'Gaming Desktop', '4K Monitor', 'Laser Printer',
      'Portable Projector', 'Wireless Speaker', 'Noise-Canceling Headphones',
      'USB-C Hub', 'Windows 10', 'Antivirus Software', 'Ergonomic Mouse',
      'Mechanical Keyboard', 'Bluetooth Adapter', 'SSD Drive', 'External Hard Drive',
      'Wireless Charger', 'Office Suite', 'Graphics Tablet', 'Portable SSD', 'Webcam',
      'Laptop Cooling Pad', 'Surround Sound System', 'In-ear Headphones', 'Power Bank',
      'Portable Monitor', 'Docking Station', 'Noise Filter Microphone', 'RGB Keyboard',
      'Gaming Mouse', 'HDMI Cable', 'Mouse Pad', 'USB Flash Drive', 'Screen Protector',
      'Bluetooth Mouse', 'Ergonomic Stand', 'Ethernet Cable', 'Desktop Organizer',
      'Micro SD Card', 'Laptop Stand', 'USB Charger', 'Multimedia Speakers',
      'Laptop Sleeve', 'Projector Screen', 'Presentation Clicker', 'Monitor Arm',
      'Gaming Chair', 'Graphics Card', 'VR Headset', 'Gaming Console', 'Smartwatch'
    ];

    const products = productNames.map((name, index) => {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      return {
        name,
        description: `A high-quality ${name.toLowerCase()} with excellent features and durability.`,
        quantity: Math.floor(Math.random() * 50) + 1,
        category: randomCategory,
      };
    });

    for (const productData of products) {
      const existingProduct = await this.productRepository.findOneBy({
        name: productData.name,
      });
      if (!existingProduct) {
        const product = this.productRepository.create(productData);
        await this.productRepository.save(product);
      }
    }


    console.log('Seeding complete with 10 categories and 100 products');


  }

}