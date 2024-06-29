import { Entity, PrimaryGeneratedColumn, Column, Unique, Index } from "typeorm";

@Entity()
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column()
  state!: string;

  @Column()
  zipcode!: string;

  @Column({nullable: false, type: "float"})                                                                                                                             
  fileSize = 0;
  
  @Column( {nullable: true})                                                                                                                             
  filePath!: string;
}
