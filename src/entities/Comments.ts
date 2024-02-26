import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comments", { schema: "test_wall" })
export class Comments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "wallId", comment: "墙留言ID" })
  wallId: number;

  @Column("varchar", { name: "userId", comment: "评论者ID", length: 100 })
  userId: string;

  @Column("varchar", {
    name: "imgurl",
    nullable: true,
    comment: "头像路径",
    length: 100,
  })
  imgurl: string | null;

  @Column("varchar", {
    name: "comment",
    nullable: true,
    comment: "评论内容",
    length: 1000,
  })
  comment: string | null;

  @Column("varchar", { name: "name", comment: "用户名", length: 100 })
  name: string;

  @Column("varchar", { name: "moment", comment: "时间", length: 100 })
  moment: string;
}
