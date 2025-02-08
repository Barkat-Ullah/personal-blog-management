import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    content: z.string().min(5, 'Content must be at least 10 characters'),
    category: z.string(z.string()).min(1, 'At least one category is required'),
    image: z.string().optional(),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    content: z.string().min(5).optional(),
    category: z.string(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const BlogValidation = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
