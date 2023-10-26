import { Request, Response, NextFunction } from "express";

const getContacts = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    data: "Hello wolrd!",
  });
};

export default { getContacts };
