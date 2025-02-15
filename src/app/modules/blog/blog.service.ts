import AppError from '../../error/AppError';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);
  if (!result) {
    throw new AppError(404, 'Blog not found');
  }
  return result;
};

const updateBlog = async (
  id: string,
  payload: Partial<TBlog>,

) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new AppError(404, 'Blog not found');
  }


  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteBlog = async (id: string, ) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new AppError(404, 'Blog not found');
  }

  const result = await Blog.findByIdAndDelete(id);
  return result;
};

const getAllBlogs = async () => {
  const result = await Blog.find();
  return result;
};

export const BlogService = {
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};
