import { Entity, Column, PrimaryColumn, Generated } from 'typeorm';
// import { v4 as uuidv4 } from 'uuid';

// interface UserCreateion {
//   name: string;
//   password: string;
// }

@Entity('users')
export class User {
  @PrimaryColumn('uuid') //главная колонка по которой связывается одна таблица с другими
  @Generated('uuid') //генерируется автоматически
  id: string;

  // CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; - это прописать в консоль datagrip (чтобы работало uuid)

  @Column({ type: 'text', unique: true, nullable: false }) //в колонке будет текст, уникальный, обязательный
  username: string;

  @Column({ type: 'int', nullable: false })
  password: number;
}
