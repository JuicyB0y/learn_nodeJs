import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

config(); //для использования переменных окружения

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.POSTGRESDB,
      synchronize: true, //чтобы при написании entity, база данных сама пополнялась полями
      // logging: true, //логи которые выводятся в консоль
      //for test path
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
    }),
  ],
})
export class DatabaseModule {}
