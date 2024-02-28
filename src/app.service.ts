/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-25 13:14:25
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-28 23:06:18
 * @FilePath: \nestjs-study\src\app.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Get, Injectable, Req } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!11';
  }
}
