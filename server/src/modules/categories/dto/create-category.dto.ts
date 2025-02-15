import { z } from 'zod';

export const CreateCategoryDto = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
});

export type CreateCategoryDto = z.infer<typeof CreateCategoryDto>;
