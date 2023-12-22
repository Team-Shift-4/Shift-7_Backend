import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Shift-7')
    .setDescription('using Github Api')
    .setVersion('1.0')
    .addTag('github')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  logger.log(`server is running on ${process.env.SERVER_PORT}`);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
