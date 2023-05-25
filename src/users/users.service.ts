import { Injectable } from '@nestjs/common'

import { User } from './entities/user.entities'
import { CreateUserDTO } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  private users: Array<User> = [
    {
      id: 0,
      name: 'Joshua'
    },
    {
      id: 1,
      name: 'James'
    }
  ]

  findAll(name?: string): Array<User> {
    if (name) {
      return this.users.filter((user) => user.name === name)
    }
    return this.users
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId)
  }

  createUser(createUserDTO: CreateUserDTO): User {
    const newUser = { id: Date.now(), ...createUserDTO }
    this.users.push(newUser)
    return newUser
  }
}
