import { Module } from '@nestjs/common'

import { AppService } from './app.service'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UsersModule, TodosModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
