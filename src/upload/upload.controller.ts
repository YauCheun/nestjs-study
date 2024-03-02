/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-03-02 16:33:42
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-03-02 16:50:55
 * @FilePath: \nestjs-study\src\upload\upload.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Post,UseInterceptors,UploadedFile,Get,Res,Query} from '@nestjs/common';
import { UploadService } from './upload.service';
// FileInterceptor用于单文件上传，FilesInterceptor用于多文件上传
import {FileInterceptor,FilesInterceptor} from '@nestjs/platform-express'
import {join} from 'path';
import type { Response } from 'express'
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('profile')
  // UseInterceptors 处理文件的中间件，file是一个标识名
  @UseInterceptors(FileInterceptor('file'))
  // UploadedFile装饰器是用于读取文件的
  upload (@UploadedFile() file) {
    console.log("file：",file)
    return `/files/${file.filename}`
  }

   // 文件下载
   @Get('export')
   download(@Res() res: Response, @Query('filename') filename: string) {
     // 正常应该是从数据库里获取地址
     const url = join(__dirname, `../images/${filename}`);
     res.download(url);
   }

}
