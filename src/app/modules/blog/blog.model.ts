import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Programming', 'Education', 'Science'],
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      
    },
    image: {
      type: String,
      default: 'n/a',
    },
  },
  {
    timestamps: true,
  },
);
export const Blog = model<TBlog>('Blog', blogSchema);
