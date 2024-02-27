import { ResponseDataType } from 'src/types';
import { FeedbacksService } from './feedbacks.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private FeedbacksService: FeedbacksService){}
  @Post('insertFeedback')
  insertFeedback(@Body() body):Promise<ResponseDataType<any>>{
    return this.FeedbacksService.insertFeedback(body)
  }
}
