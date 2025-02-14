import { Types } from 'mongoose';

export type TBlog = {
  title: string;
  content: string;
  category: 'Programming' | 'Education' | 'Science';
  author?: Types.ObjectId;
  image?: string;
};
