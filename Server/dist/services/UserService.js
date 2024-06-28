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
exports.UserService = void 0;
const data_source_1 = require("../config/data-source");
const User_1 = require("../entities/User");
const utils_1 = require("../utils/utils");
class UserService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        this.updatePassword = (data) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOneBy({ email: data.email });
            const hashPass = yield (0, utils_1.GenerateHash)(data.password);
            return yield this.userRepository.update({ id: user === null || user === void 0 ? void 0 : user.id }, { password: hashPass });
        });
        this.generateOTP = () => {
            return (0, utils_1.GenerateOTP)();
        };
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkUser = yield this.userRepository.findOneBy({ email: data.email });
            if (checkUser) {
                return -1;
            }
            if (data.email == "" || data.fullname == "" || data.password == "") {
                return 0;
            }
            const hashPass = yield (0, utils_1.GenerateHash)(data.password);
            if (hashPass == "") {
                return -2;
            }
            const user = yield this.userRepository.save(this.userRepository.create({ fullname: data.fullname, email: data.email, password: hashPass }));
            if (user) {
                return 1;
            }
            return 0;
        });
    }
    verifyUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.email == "" || data.password == "") {
                return null;
            }
            const hashedPass = yield (0, utils_1.GenerateHash)(data.password);
            const user = yield this.userRepository.findOneBy({ email: data.email, password: hashedPass });
            if (user == null) {
                return null;
            }
            return { token: (0, utils_1.GenerateJWT)(user.id), email: user.email, id: user.id };
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.find();
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map