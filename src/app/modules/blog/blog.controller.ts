import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import { BlogService } from './blog.service';
import { sendResponse } from '../../utils/sendResponse';

const createBlog = catchAsync(async (req, res) => {
  const blogData = req.body;

  const result = await BlogService.createBlog(blogData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Blog created successfully',
    data: result,
  });
});

const getBlogById = catchAsync(async (req, res) => {
  const result = await BlogService.getSingleBlog(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BlogService.updateBlog(id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog updated successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BlogService.deleteBlog(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blog deleted successfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (_, res) => {
  const result = await BlogService.getAllBlogs();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Blogs retrieved successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};
