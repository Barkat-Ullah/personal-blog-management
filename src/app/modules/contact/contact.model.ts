import { model, Schema } from 'mongoose';

export type TContact = {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};

const contactSchema = new Schema<TContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
   
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  },
);

export const Contact = model<TContact>('Contact', contactSchema);
