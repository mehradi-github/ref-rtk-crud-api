import express from "express";
import contactController from "../controllers/contact";
import defualtController from "../controllers/default";
const router = express.Router();

router.get("/", defualtController.getContacts);
router.get("/contacts", contactController.getContacts);
router.get("/contacts/:id", contactController.getContact);

export default router;
