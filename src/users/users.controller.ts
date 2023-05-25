import { Body, Controller, Get, Param, Post } from '@nestjs/common'

import { UsersService } from './users.service'
import { User } from './entities/user.entities'
import { CreateUserDTO } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): Array<User> {
    return this.usersService.findAll()
  }

  @Get(':id')
  getUserById(@Param('id') id: string): object {
    return {
      id: this.usersService.findById(Number(id))
    }
  }

  @Post()
  createUser(@Body() body: CreateUserDTO): User {
    return this.usersService.createUser(body)
  }
}
