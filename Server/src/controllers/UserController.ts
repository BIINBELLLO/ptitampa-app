import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export default class UserController {
  private userService = new UserService();

  createUser = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.createUser(req.body);
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
    } catch (e) {
      throw e;
    }
  };

  signInUser = async (req: Request, res: Response) => {
    try {
      const userid = await this.userService.verifyUser(req.body);
      if (userid == "") {
        return res.status(200).json(null);
      }
      return res.json(userid);
    } catch (e) {
      throw e;
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getAllUsers();
    return res.json(users);
  };
}
