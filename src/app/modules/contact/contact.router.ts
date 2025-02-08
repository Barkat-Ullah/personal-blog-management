import express from 'express';
import { ContactController } from './contact.controller';

const router = express.Router();

router.post('/', ContactController.createContact);

router.get('/', ContactController.getAllContacts);

export const ContactRouter = router;
