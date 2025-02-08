import { model, Schema } from 'mongoose';

import { TProject } from './projects.interface';

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    image: {
      type: String,
      default: 'n/a',
    },
    link: {
      type: String,
      required: true,
    },
    technologies: [
      {
        name: { type: String, required: true }, 
        icon: { type: String, required: true }, 
      },
    ],
  },
  {
    timestamps: true,
  },
);
export const Project = model<TProject>('Project', projectSchema);
