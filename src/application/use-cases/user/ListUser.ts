import { User } from "../../../domain/user/User";
import { UserRepository } from "../../../domain/user/UserRepository";

export class ListUser {
    private userRepository: UserRepository;
    
    constructor (userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute () {
        const users = await this.userRepository.list();
        console.log(users[0])
        return users.map(user => user.getUser()); 
    }
}