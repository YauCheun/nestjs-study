/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-27 23:20:49
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-28 22:06:50
 * @FilePath: \nestjs-study\src\feedbacks\feedbacks.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { InjectRepository } from '@nestjs/typeorm';
import { Feedbacks } from './../entities/Feedbacks';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { ResponseDataType } from 'src/types';
import { DeleteResult } from 'typeorm';

@Injectable()
export class FeedbacksService {
  constructor(@InjectRepository(Feedbacks) private readonly feedbacksRepository: Repository<Feedbacks>) { }
  async insertFeedback(body): Promise<ResponseDataType<any>> {
    const res = await this.feedbacksRepository.save(body)
    return {
      code: 200,
      message: res
    }
  }
  async deleteFeedback(param): Promise<ResponseDataType<DeleteResult>> {
    const res = await this.feedbacksRepository.delete({ id: param.id })
    return {
      code: 200,
      message: res
    }
  }
}
