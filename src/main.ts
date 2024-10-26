import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform: true}))
  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
    .setTitle('Possinove Inventory Management')
    .setDescription('This is a possinove challenge to build a simple inventory management system')
    .setVersion('1.0')
    .addTag('Possinove Inventory')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-documentation', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
