import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TodosModule } from '../todos/todos.module';

@Module({
  imports: [TodosModule],
  controllers: [UsersController],
  providers: [UsersService],

})
export class UsersModule { }
