import { Controller, Get, Param } from '@nestjs/common'

import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers(): object {
    return [
      {
        id: 0
      }
    ]
  }

  @Get(':id')
  getUserById(@Param('id') id: string): object {
    return {
      id: Number(id)
    }
  }
}
