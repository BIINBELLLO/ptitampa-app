import bcrypt from 'bcrypt';
import { logger } from './logger';

import dotenv from "dotenv";
dotenv.config();

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
