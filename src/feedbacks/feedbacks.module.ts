/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-27 23:20:20
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-27 23:21:51
 * @FilePath: \nestjs-study\src\feedbacks\feedbacks.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { FeedbacksController } from './feedbacks.controller';
import { FeedbacksService } from './feedbacks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedbacks } from 'src/entities/Feedbacks';

@Module({
  imports:[TypeOrmModule.forFeature([Feedbacks])],
  controllers: [FeedbacksController],
  providers: [FeedbacksService]
})
export class FeedbacksModule {}
