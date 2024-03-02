import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//用于配置静态文件访问
import { NestExpressApplication } from '@nestjs/platform-express';
import {join} from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //配置静态文件访问目录
  //配置静态文件访问目录
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: "/files/"
  })
  await app.listen(3000);
}
bootstrap();
