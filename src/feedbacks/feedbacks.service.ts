import { InjectRepository } from '@nestjs/typeorm';
import { Feedbacks } from './../entities/Feedbacks';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { ResponseDataType } from 'src/types';

@Injectable()
export class FeedbacksService {
  constructor(@InjectRepository(Feedbacks) private readonly feedbacksRepository: Repository<Feedbacks>) {}
  async insertFeedback(body): Promise<ResponseDataType<any>> {
    const res = await this.feedbacksRepository.save(body)
    return {
      code: 200,
      message: res
    }
  }
}
