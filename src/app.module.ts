/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-25 13:14:25
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-26 23:56:39
 * @FilePath: \nestjs-study\src\app.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WallsController } from './walls/walls.controller';
import { WallsModule } from './walls/walls.module';
import { TypeOrmModule } from '@nestjs/typeorm'
// 模块注册中心
@Module({
  // 1. 定义数据库连接模块
  imports: [WallsModule,
    TypeOrmModule.forRoot({ // 连接数据库
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库ip地址
      port: 3306, // 端口
      username: 'root', // 登录名
      password: '123456', // 密码
      database: 'test_wall', // 数据库名称
      entities: [__dirname + '/**/*.entities{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      synchronize: true, // 定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用)
      autoLoadEntities: true // 自动加载数据库实体文件
    }),],
  controllers: [AppController, WallsController],
  providers: [AppService],
})
export class AppModule { }
