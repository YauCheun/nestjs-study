/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-26 22:34:14
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-27 23:15:42
 * @FilePath: \nestjs-study\src\walls\walls.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Walls } from 'src/entities/Walls';
import { ResponseDataType } from 'src/types';
import { DeleteResult, SelectQueryBuilder } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
@Injectable()
export class WallsService {
  constructor(@InjectRepository(Walls) private readonly wallRepository: Repository<Walls>) {

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
  async findWallPage(type: string, label: string, page: number = 1, limit: number = 10): Promise<ResponseDataType<Partial<Walls>[]>> {
    const queryBuilder: SelectQueryBuilder<Walls> = this.wallRepository.createQueryBuilder('walls');
    queryBuilder.where('walls.type = :type', { type })
    if (label) {
      queryBuilder.andWhere('walls.label = :label', { label });
    }
    const [data, total] = await queryBuilder.skip((page - 1) * limit).take(limit).getManyAndCount();
    return {
      code: 200,
      message: data,
      total: total
    }
  }
}
