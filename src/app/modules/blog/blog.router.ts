import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidation } from './blog.validation';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post(
  '/',

  validateRequest(BlogValidation.createBlogValidationSchema),
  BlogController.createBlog,
);

router.get('/', BlogController.getAllBlogs);
router.get('/:id', BlogController.getBlogById);

router.patch(
  '/:id',

  validateRequest(BlogValidation.updateBlogValidationSchema),
  BlogController.updateBlog,
);

router.delete('/:id', BlogController.deleteBlog);

export const BlogRouter = router;
