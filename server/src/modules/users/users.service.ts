import { Injectable } from '@nestjs/common';
import { TodosService } from '../todos/todos.service';
import { InjectKysely } from 'nestjs-kysely';
import { DB } from 'src/core/db/types';
import { Kysely } from 'kysely';

@Injectable()
export class UsersService {

  constructor(private readonly todosService: TodosService,
    @InjectKysely() private readonly db: Kysely<DB>) { }

  async findAll() {
    return await this.db.selectFrom('user').selectAll().execute();

    return 'Hello world';
  }

}
