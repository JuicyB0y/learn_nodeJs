import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create-user')
  async createUser(
    @Body()
    user: CreateUserDto, //почему тут нельзя сделать просто User а не CreateUserDto
  ): Promise<User> {
    return this.usersService.create(user);
  }

  @Get('get-user')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id);
  }

  @Get('get-all')
  async getAll(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  // @Post('create-one')
  // async createNew(
  //   @Body()
  //   user: CreateUserDto,
  // ): Promise<User> {
  //   return this.usersService.create(user);
  // }
}
