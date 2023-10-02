import express from "express";
import {
  createContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "../controllers/contact.js";

const contactsRouter = express.Router();
contactsRouter.get("/", fetchContacts);
contactsRouter.post("/", createContact);
contactsRouter.patch("/:id", updateContact);
contactsRouter.delete("/:id", deleteContact);
export default contactsRouter;
