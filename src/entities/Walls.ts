/*
 * @Author: YauCheun 1272125039@qq.com
 * @Date: 2024-02-26 23:53:53
 * @LastEditors: YauCheun 1272125039@qq.com
 * @LastEditTime: 2024-02-29 23:00:26
 * @FilePath: \nestjs-study\src\entities\Walls.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("walls", { schema: "test_wall" })
export class Walls {
  [x: string]: any;
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "type", comment: "类型0信息1图片" })
  type: number;

  @Column("varchar", {
    name: "message",
    nullable: true,
    comment: "留言",
    length: 1000,
  })
  message: string | null;

  @Column("varchar", { name: "name", comment: "用户名", length: 100 })
  name: string;

  @Column("varchar", { name: "userId", comment: "创建者ID", length: 100 })
  userId: string;

  @Column("varchar", { name: "moment", comment: "时间", length: 100 })
  moment: string;

  @Column("int", { name: "label", comment: "标签" })
  label: number;

  @Column("int", { name: "color", nullable: true, comment: "颜色" })
  color: number | null;

  @Column("varchar", {
    name: "imgurl",
    nullable: true,
    comment: "图片路径",
    length: 100,
  })
  imgurl: string | null;
}
