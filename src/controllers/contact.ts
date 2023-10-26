import { Request, Response, NextFunction } from "express";

interface Contact {
  id: number;
  name: string;
  email: string;
  contact: string;
}
let contacts: Contact[] = [
  {
    id: 0,
    name: "Alex",
    email: "alex@text.com",
    contact: "contact 0",
  },
  {
    id: 1,
    name: "jone",
    email: "jone@text.com",
    contact: "contact 1",
  },
];
const getContacts = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    data: contacts,
  });
};

const getContact = async (req: Request, res: Response, next: NextFunction) => {
  let id: number = parseInt(req.params.id);
  return res.status(200).json({
    data: contacts.filter((item) => item.id === id),
  });
};

const updateContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id: number = parseInt(req.params.id);
  let name: string = req.body.name;
  let email: string = req.body.email;
  let contact: string = req.body.contact;
  contacts[id] = {
    id,
    name,
    email,
    contact,
  };
  return res.status(200).json({
    data: contacts,
  });
};
const deleteContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let id: number = parseInt(req.params.id);
  contacts = contacts.filter((item) => item.id !== id);
  return res.status(200).json({
    data: contacts,
  });
};
const addContact = async (req: Request, res: Response, next: NextFunction) => {
  let id: number = contacts.length;

  let name: string = req.body.name;
  let email: string = req.body.email;
  let contact: string = req.body.contact;

  contacts.push({
    id,
    name,
    email,
    contact,
  });

  return res.status(200).json({
    data: contacts,
  });
};

export default {
  getContacts,
  getContact,
  updateContact,
  deleteContact,
  addContact,
};
