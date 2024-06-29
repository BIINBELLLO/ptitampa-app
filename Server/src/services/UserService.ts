import { AppDataSource } from "../config/data-source";
import { User } from "../entities/UserEntity";
import { GenerateHash, GenerateOTP, GenerateJWT } from "../utils/utils";

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

    const hashPass = await GenerateHash(data.password!);
    if (hashPass == "") {
      return -2;
    }

    const user = await this.userRepository.save(this.userRepository.create({fullname: data.fullname!, email: data.email!, password: hashPass}));
    if (user) {
      return 1;
    } 
    return 0;
  }

  async verifyUser(data: Partial<{email: string, password:string}>): Promise<{token: string, email: string, id: string} | null>{
    if (data.email == "" || data.password == "") {
      return null;
    }
    const hashedPass = await GenerateHash(data.password!);
    const user: User | null = await this.userRepository.findOneBy({email: data.email, password: hashedPass});
    if (user == null) {
      return null;
    }
    return {token: GenerateJWT(user.id), email: user.email, id: user.id};
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  updatePassword = async (data: {email: string, password: string}) => {
    const user: User | null = await this.userRepository.findOneBy({email: data.email});
    const hashPass = await GenerateHash(data.password!);
    return await this.userRepository.update({id: user?.id}, {password: hashPass});
  };

  generateOTP = () : string => {
    return GenerateOTP();
  };
}
