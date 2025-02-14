import { Types } from 'mongoose';

export type TProject = {
  title: string;
  description: string;
  link: string;
  author?: Types.ObjectId;
  image: string;
  technologies?: {
    name: string;
    icon: string;
  }[];
  thumbnail:string
};
