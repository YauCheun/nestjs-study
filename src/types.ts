/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-27 22:17:25
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-27 22:19:23
 * @FilePath: \nestjs-study\src\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export interface ResponseDataType<T> {
  code: number,
  message: T,
  total?: number
}