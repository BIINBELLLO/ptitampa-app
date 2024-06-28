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
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Create a transporter
const transporter = nodemailer_1.default.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // generated ethereal user
        pass: process.env.EMAIL_PASS, // generated ethereal password
    },
});
// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Server is ready to take our messages');
    }
});
// Function to send an email
const sendEmail = (to, subject, text) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: process.env.EMAIL_FROM, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
    };
    try {
        let info = yield transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer_1.default.getTestMessageUrl(info));
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
});
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.js.map