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
  @Get('findWallPage')
  findWallPage(@Query('type') type: string, @Query('label') label: string, @Query('page') page: number, @Query('pagesize') pagesize: number) {
    return this.WallsService.findWallPage(type, label, page, pagesize);
  }
}
