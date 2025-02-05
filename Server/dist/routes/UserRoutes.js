"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const router = (0, express_1.Router)();
const userController = new UserController_1.default();
router.post("/sign-up", userController.createUser);
router.post("/sign-in", userController.signInUser);
router.post("/update-password", userController.updatePassword);
router.post("/generateOTP", userController.generateOTP);
router.get("/", userController.getAllUsers);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map