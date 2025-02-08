import { Contact, TContact } from './contact.model';

const createContact = async (payload: TContact) => {
  const result = await Contact.create(payload);
  return result;
};

const getAllContacts = async () => {
  const result = await Contact.find()
  return result;
};

export const ContactService = {
  createContact,
  getAllContacts,
};
