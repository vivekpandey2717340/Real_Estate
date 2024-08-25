import express from 'express';
import { createContact, getContacts } from '../controllers/ContactController.js';

const ContactRouter = express.Router();

// Routes for Contact operations
ContactRouter.post("/add", createContact);      // Add a new contact entry
ContactRouter.get("/all", getContacts);         // Get all contact entries

export default ContactRouter;
