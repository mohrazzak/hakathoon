import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { InjectKysely } from 'nestjs-kysely';
import { DB } from 'src/core/types';
import { Kysely } from 'kysely';

@Injectable()
export class TodosService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  // async create(createTodoDto: CreateTodoDto) {
  //   const [todo] = await this.db
  //     .insertInto('todo')
  //     .values({
  //       title: createTodoDto.title,
  //       description: createTodoDto.description,
  //       status: createTodoDto.status,
  //       priority: createTodoDto.priority,
  //       deadline: createTodoDto.deadline,
  //       start_date: createTodoDto.start_date,
  //       user_id: createTodoDto.user_id,
  //       category_id: createTodoDto.category_id,
  //     })
  //     .returningAll()
  //     .execute();

  //   return todo;
  // }

  async findAll() {
    return await this.db.selectFrom('todo').selectAll().execute();
  }

  async findOne(id: string) {
    const todo = await this.db
      .selectFrom('todo')
      .where('id', '=', id)
      .selectAll()
      .executeTakeFirst();

    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }

    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const updatedTodo = await this.db
      .updateTable('todo')
      .set(updateTodoDto)
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst();

    if (!updatedTodo) {
      throw new Error(`Todo with id ${id} not found`);
    }

    return updatedTodo;
  }

  async remove(id: string) {
    const deletedTodo = await this.db
      .deleteFrom('todo')
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst();

    if (!deletedTodo) {
      throw new Error(`Todo with id ${id} not found`);
    }

    return deletedTodo;
  }
}
