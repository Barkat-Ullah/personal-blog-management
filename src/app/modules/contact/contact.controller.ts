import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';

import { ContactService } from './contact.service';

const createContact = catchAsync(async (req, res) => {

  const ContactData = req.body;

  const result = await ContactService.createContact(ContactData);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Contact created successfully',
    data: result,
  });
});

const getAllContacts = catchAsync(async (_, res) => {
  const result = await ContactService.getAllContacts();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Contacts retrieved successfully',
    data: result,
  });
});

export const ContactController = {
  createContact,
  getAllContacts,
};
