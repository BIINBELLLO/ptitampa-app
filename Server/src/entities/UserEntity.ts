import { Entity, PrimaryGeneratedColumn, Column, Unique, Index } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  fullname!: string;

  @Column()
  @Index({unique: true})
  email!: string;

  @Column()
  password!: string;
}
