/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-28 22:13:37
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-28 22:41:19
 * @FilePath: \nestjs-study\src\comments\comments.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ResponseDataType } from 'src/types';
import { CommentsService } from './comments.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('comments')
export class CommentsController {
  constructor(private CommentsService: CommentsService) { }
  @Post('insertComment')
  insertComment(@Body() body): Promise<ResponseDataType<any>> {
    return this.CommentsService.insertComment(body)
  }
  @Post('deleteComment')
  deleteComment(@Body() body): Promise<ResponseDataType<any>> {
    return this.CommentsService.deleteComment(body)
  }
  @Get('findCommentPage')
  findCommentPage(@Query('id') id: number, @Query('page') page: number, @Query('pagesize') pagesize: number) {
    return this.CommentsService.findCommentPage(id, page, pagesize);
  }
}
