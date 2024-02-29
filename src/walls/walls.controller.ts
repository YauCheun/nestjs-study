/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-26 22:32:32
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-29 22:25:04
 * @FilePath: \nestjs-study\src\walls\walls.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Post, Request, Query, Body, Param } from '@nestjs/common';
import { WallsService } from './walls.service';
import { Walls } from 'src/entities/Walls';
import { ResponseDataType } from 'src/types';
import { DeleteResult } from 'typeorm';

@Controller('walls')
export class WallsController {
  constructor(private WallsService: WallsService) {
  }
  // 增加留言
  @Post('insertwall')
  insertwall(@Body() body): Promise<ResponseDataType<any>> {
    return this.WallsService.insertwall(body);
  }
  //删除walls
  @Post('deleteWall')
  deleteWall(@Body() body): Promise<ResponseDataType<DeleteResult>> {
    return this.WallsService.deleteWall(body);
  }
  // 分页查询
  @Post('findWallPage')
  findWallPage(@Body() body) {
    return this.WallsService.findWallPage(body.type, body.label, body.page, body.pagesize,body.userId);
  }
}
