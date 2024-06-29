import bcrypt from 'bcrypt';
import { logger } from './logger';
import dotenv from "dotenv";
import { AppDataSource } from '../config/data-source';
import { User } from '../entities/UserEntity';

dotenv.config();

const jwt = require("jsonwebtoken");
const randomstring = require('randomstring');

// Function to hash a password
export const GenerateHash = async (password: string): Promise<string> => {

  if (!process.env.HASH_SALT) {
    logger.error("Hashing salt not available.");
    throw new Error("Internal Serevr Error");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, process.env.HASH_SALT);
    return hashedPassword;
  } catch (error: any) {
    throw new Error('Error hashing password: ' + error.message);
  }
};

// Function to hash a password
export const GenerateOTP = (): string => {
  return randomstring.generate({
    length: 6,
    charset: 'numeric'
});
};

export const GenerateJWT = (userId: string): string => {
  return jwt.sign({ userId: userId }, process.env.JWTPRIVATEKEY);
}

export const AuthMiddleware = async (req: any, res: any, next: () => {}) => {

  const userRepository = AppDataSource.getRepository(User);
  
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWTPRIVATEKEY);
    const userId = decodedToken.userId;
    if (!req.body.userId) {
      throw 'Invalid user ID';
    } else {
      await userRepository.findOneBy({id: decodedToken.userId})
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};