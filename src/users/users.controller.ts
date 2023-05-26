import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common'
import {
  ApiTags,
  ApiQuery,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse
} from '@nestjs/swagger'

import { UsersService } from './users.service'
import { User } from './entities/user.entities'
import { CreateUserDTO } from './dto/create-user.dto'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getUsers(@Query('name') name: string): Array<User> {
    return this.usersService.findAll(name)
  }

  @ApiOkResponse({ type: User, description: 'The User' })
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    const user = this.usersService.findById(Number(id))

    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDTO): User {
    return this.usersService.createUser(body)
  }
}
