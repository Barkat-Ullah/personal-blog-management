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
    },
    image: {
      type: String,
      default: 'n/a',
    },
    link: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    technologies: [
      {
        name: { type: String },
        icon: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  },
);
export const Project = model<TProject>('Project', projectSchema);
