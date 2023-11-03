import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    console.log(user);
    const newUser = this.userRepository.create({
      username: user.username,
      password: user.password,
    });
    return await this.userRepository.save(newUser);
  }

  async getAllUsers(): Promise<User[]> {
    const response = await this.userRepository.find();
    return response;
  }

  async getById(id: string): Promise<User> {
    const response = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!response) {
      throw new NotFoundException('no user found');
    }
    return response;
  }
}
