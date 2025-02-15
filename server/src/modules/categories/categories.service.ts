import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { DB } from 'src/core/types';
import { Kysely } from 'kysely';
import { InjectKysely } from 'nestjs-kysely';

@Injectable()
export class CategoriesService {
  constructor(@InjectKysely() private readonly db: Kysely<DB>) {}

  // async create(createCategoryDto: CreateCategoryDto) {
  //   const newCategory = await this.db
  //     .insertInto('category')
  //     .values({
  //       ...createCategoryDto,
  //       created_at: new Date(),
  //       updated_at: new Date(),
  //       deleted_at: null,
  //     })
  //     .returningAll()
  //     .executeTakeFirst();
  //   return newCategory;
  // }

  async findAll() {
    return await this.db.selectFrom('category').selectAll().execute();
  }

  async findOne(id: string) {
    return (
      (await this.db
        .selectFrom('category')
        .selectAll()
        .where('id', '=', id)
        .executeTakeFirst()) || `Category with id #${id} not found`
    );
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const updatedCategory = await this.db
      .updateTable('category')
      .set({ ...updateCategoryDto, updated_at: new Date() })
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst();
    return updatedCategory || `Category with id #${id} not found`;
  }

  async remove(id: string) {
    const deletedCategory = await this.db
      .updateTable('category')
      .set({ deleted_at: new Date() })
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst();
    return deletedCategory
      ? `Category with id #${id} has been removed`
      : `Category with id #${id} not found`;
  }
}
