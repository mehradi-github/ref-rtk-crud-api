import { Request, Response, NextFunction } from "express";

interface Contact {
  id: number;
  name: string;
  email: string;
  contact: string;
}
const contacts: Contact[] = [
  {
    id: 1,
    name: "Alex",
    email: "alex@text.com",
    contact: "contact 1",
  },
  {
    id: 2,
    name: "jone",
    email: "jone@text.com",
    contact: "contact 2",
  },
];
const getContacts = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    data: contacts,
  });
};

export default { getContacts };