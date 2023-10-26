import express from "express";
import contactController from "../controllers/contact";
import defualtController from "../controllers/default";
const router = express.Router();

router.get("/", defualtController.getContacts);
router.get("/contacts", contactController.getContacts);

export default router;
