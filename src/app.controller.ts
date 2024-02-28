/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-25 13:14:25
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-28 22:56:13
 * @FilePath: \nestjs-study\src\app.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDataType } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('signip')
  signip(@Req() request): ResponseDataType<string> {
    const ip = request.ip;
    return {
      code : 200,
      ip : ip
    }
  }
}
