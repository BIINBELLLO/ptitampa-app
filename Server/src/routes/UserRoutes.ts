import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.signInUser);
router.get("/", userController.getAllUsers);

export default router;
