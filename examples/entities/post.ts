import { Column, Entity, Generated, Index, PrimaryColumn } from "typeorm";

@Entity("post")
@Index("my_index_with_id_and_text", ["id", "text"])
export class Post {
  @PrimaryColumn("integer")
  @Generated()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column({ nullable: false })
  likesCount: number;
}
