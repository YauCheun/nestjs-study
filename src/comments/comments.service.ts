import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/entities/Comments';
import { ResponseDataType } from 'src/types';
import { DeleteResult, Repository, SelectQueryBuilder } from 'typeorm';
@Injectable()
export class CommentsService {
  constructor(@InjectRepository(Comments) private readonly commentsRepository: Repository<Comments>){}
  async insertComment(body): Promise<ResponseDataType<any>> {
    const res = await this.commentsRepository.save(body)
    return {
      code: 200,
      message: res
    }
  }
  async deleteComment(param): Promise<ResponseDataType<DeleteResult>> {
    const res = await this.commentsRepository.delete({ id: param.id })
    return {
      code: 200,
      message: res
    }
  }
  async findCommentPage(id: number, page: number = 1, limit: number = 10): Promise<ResponseDataType<Partial<Comments>[]>> {
    const queryBuilder: SelectQueryBuilder<Comments> = this.commentsRepository.createQueryBuilder('Comments');
    const [data, total] = await queryBuilder.where('Comments.wallId = :id', { id }).orderBy('Comments.id', 'DESC').skip((page - 1) * limit).take(limit).getManyAndCount();
    return {
      code: 200,
      message: data,
      total: total
    }
  }
}
