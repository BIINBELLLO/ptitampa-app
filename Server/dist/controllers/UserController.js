"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = require("../services/UserService");
class UserController {
    constructor() {
        this.userService = new UserService_1.UserService();
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.createUser(req.body);
                if (user === -1) {
                    return res.status(409).json({ message: "User already exists" });
                }
                if (user === 0) {
                    return res.status(400).json({ message: "Credentials not provided correctly" });
                }
                if (user === -2) {
                    res.status(500).json({ message: "Internal Server Error" });
                }
                return res.status(200).json(user);
            }
            catch (e) {
                throw e;
            }
        });
        this.signInUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userid = yield this.userService.verifyUser(req.body);
                if (userid == null) {
                    return res.status(401).json(null);
                }
                return res.json(userid);
            }
            catch (e) {
                throw e;
            }
        });
        this.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAllUsers();
            return res.json(users);
        });
        this.updatePassword = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAllUsers();
            return res.json(users);
        });
        // Forget password not implemented
        this.generateOTP = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.json({ OTP: this.userService.generateOTP() });
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map