/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-27 23:20:38
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-28 22:12:42
 * @FilePath: \nestjs-study\src\feedbacks\feedbacks.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ResponseDataType } from 'src/types';
import { FeedbacksService } from './feedbacks.service';
import { Body, Controller, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private FeedbacksService: FeedbacksService){}
  // 新建反馈
  @Post('insertFeedback')
  insertFeedback(@Body() body):Promise<ResponseDataType<any>>{
    return this.FeedbacksService.insertFeedback(body)
  }
  //删除反馈
  @Post('deleteFeedback')
  deleteFeedback(@Body() body): Promise<ResponseDataType<DeleteResult>> {
    return this.FeedbacksService.deleteFeedback(body);
  }
}
