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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = exports.GenerateJWT = exports.GenerateOTP = exports.GenerateHash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const logger_1 = require("./logger");
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = require("../config/data-source");
const User_1 = require("../entities/User");
dotenv_1.default.config();
const jwt = require("jsonwebtoken");
const randomstring = require('randomstring');
// Function to hash a password
const GenerateHash = (password) => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.HASH_SALT) {
        logger_1.logger.error("Hashing salt not available.");
        throw new Error("Internal Serevr Error");
    }
    try {
        const hashedPassword = yield bcrypt_1.default.hash(password, process.env.HASH_SALT);
        return hashedPassword;
    }
    catch (error) {
        throw new Error('Error hashing password: ' + error.message);
    }
});
exports.GenerateHash = GenerateHash;
// Function to hash a password
const GenerateOTP = () => {
    return randomstring.generate({
        length: 6,
        charset: 'numeric'
    });
};
exports.GenerateOTP = GenerateOTP;
const GenerateJWT = (userId) => {
    return jwt.sign({ userId: userId }, process.env.JWTPRIVATEKEY);
};
exports.GenerateJWT = GenerateJWT;
const AuthMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWTPRIVATEKEY);
        const userId = decodedToken.userId;
        if (!req.body.userId) {
            throw 'Invalid user ID';
        }
        else {
            yield userRepository.findOneBy({ id: decodedToken.userId });
            next();
        }
    }
    catch (_a) {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
});
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=utils.js.map