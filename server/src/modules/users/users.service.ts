import { Injectable } from '@nestjs/common';
import { TodosService } from '../todos/todos.service';
import { InjectKysely } from 'nestjs-kysely';
import { DB } from 'src/core/types';
import { Kysely } from 'kysely';

@Injectable()
export class UsersService {

  constructor(private readonly todosService: TodosService, @InjectKysely() private readonly db: Kysely<DB>) { }

  async findAll() {
    const a = await this.db.selectFrom('category').selectAll().execute();
    console.log(a.length)
    return 'Hello world';
  }

}
