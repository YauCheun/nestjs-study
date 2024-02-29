/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-26 22:34:14
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-29 23:19:18
 * @FilePath: \nestjs-study\src\walls\walls.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/entities/Comments';
import { Feedbacks } from 'src/entities/Feedbacks';
import { Walls } from 'src/entities/Walls';
import { ResponseDataType } from 'src/types';
import { DeleteResult, SelectQueryBuilder } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
@Injectable()
export class WallsService {
  constructor(@InjectRepository(Walls) private readonly wallRepository: Repository<Walls>, @InjectRepository(Feedbacks)
  private readonly feedbacksRepository: Repository<Feedbacks>, @InjectRepository(Comments) private readonly commentsRepository: Repository<Comments>) {

  }
  async insertwall(body): Promise<ResponseDataType<any>> {
    const res = await this.wallRepository.save(body)
    return {
      code: 200,
      message: res
    }
  }
  async deleteWall(param): Promise<ResponseDataType<DeleteResult>> {
    const res = await this.wallRepository.delete({ id: param.id })
    return {
      code: 200,
      message: res
    }
  }
  // 分页查询
  async findWallPage(type: string, label: string, page: number = 1, limit: number = 10, userId?: string): Promise<ResponseDataType<Partial<Walls>[]>> {
    const queryBuilder: SelectQueryBuilder<Walls> = this.wallRepository.createQueryBuilder('walls');
    queryBuilder.where('walls.type = :type', { type })
    if (label && label != '-1') {
      queryBuilder.andWhere('walls.label = :label', { label });
    }
    const [data, total] = await queryBuilder.skip((page - 1) * limit).take(limit).getManyAndCount();
    for (let i = 0; i < data.length; i++) {
      const countsObject = await this.feedbackCount(data[i].id)
      // 查询相应数据并添加到结果中
      data[i].like = countsObject[0] || [{ count: 0 }]
      data[i].report = countsObject[1] || [{ count: 0 }]
      data[i].revoke = countsObject[2] || [{ count: 0 }]
      data[i].islike = await this.likeCount(data[i].id, userId);
      data[i].comcount = await this.commentCount(data[i].id);
    }
    return {
      code: 200,
      message: data,
      total: total
    }
  }
  async feedbackCount(wallId: number) {
    const counts = await this.feedbacksRepository
      .createQueryBuilder('feedback')
      .select('feedback.type', 'type')
      .addSelect('COUNT(*)', 'count')
      .where('feedback.wallId = :wallId', { wallId })
      .andWhere('feedback.type IN (:...types)', { types: [0, 1, 2] })
      .groupBy('feedback.type')
      .getRawMany();
    const countsObject = {};
    for (const item of counts) {
      countsObject[item.type] = [{ count: item.count }]
    }
    return countsObject;
  }
  async likeCount(wallId: number, userId: string) {
    const count = await this.feedbacksRepository
      .createQueryBuilder('feedback') // 替换成你的实体类别名
      .where('feedback.wallId = :wallId', { wallId })
      .andWhere('feedback.type = :type', { type: 0 })
      .andWhere('feedback.userId = :userId', { userId })
      .getCount();
    return [{ count }]
  }
  async commentCount(wallId: number) {
    const count = await this.commentsRepository
      .createQueryBuilder('comments')
      .where('comments.wallId = :wallId', { wallId })
      .getCount();
    return [{ count }]
  }
}
