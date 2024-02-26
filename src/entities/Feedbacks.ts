import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("feedbacks", { schema: "test_wall" })
export class Feedbacks {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "wallId", comment: "墙留言ID" })
  wallId: number;

  @Column("varchar", { name: "userId", comment: "反馈者ID", length: 100 })
  userId: string;

  @Column("int", { name: "type", comment: "反馈类型0喜欢1举报2撤销" })
  type: number;

  @Column("varchar", { name: "moment", comment: "时间", length: 100 })
  moment: string;
}
