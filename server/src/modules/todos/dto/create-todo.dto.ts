import { PRIORITY, STATUS } from 'src/core/enums';
import { z } from 'zod';

export class CreateTodoDto {
  static schema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    status: z.nativeEnum(STATUS),
    priority: z.nativeEnum(PRIORITY),
    deadline: z.instanceof(Timestamp),
    start_date: z.instanceof(Timestamp),
    user_id: z.string().uuid(),
    category_id: z.string().uuid().nullable(),
  });

  static validate(data: unknown) {
    return CreateTodoDto.schema.parse(data);
  }
}
