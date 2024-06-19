import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { GenerateHash } from "../utils/hash";
export class UserService {
  private readonly userRepository = AppDataSource.getRepository(User);

  async createUser(data: Partial<User>): Promise<number> {
    const checkUser: User | null = await this.userRepository.findOneBy({email: data.email});
    if (checkUser) {
      return -1;
    }

    if (data.email == "" || data.fullname == "" || data.password == "") {
      return 0;
    }

    const hashPass = await GenerateHash(data.password!)
    if (hashPass == "") {
      return -2;
    }

    const user = await this.userRepository.save(this.userRepository.create({fullname: data.fullname!, email: data.email!, password: hashPass}));
    if (user) {
      return 1;
    } 
    return 0;
  }

  async verifyUser(data: Partial<{email: string, password:string}>): Promise<string>{
    if (data.email == "" || data.password == "") {
      return "";
    }
    const hashedPass = await GenerateHash(data.password!);
    const user: User | null = await this.userRepository.findOneBy({email: data.email, password:  hashedPass});
    if (user == null) {
      return "";
    }
    return user.id;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
