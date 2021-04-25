import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
    
    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
      
        return user;
    }

    async findByUser(user_id: string) {
        const user = await this.usersRepository.findOne({ id:user_id });
      
        return user;
    }

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create(email: string) {
        //Verify if user exist

        const userExists = await this.usersRepository.findOne({
            email,
        });

        // If not exit, past in DB
        if(userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);
        // If exits, return user
        return user;
    }
}

export { UsersService};