import { User } from "../../../domain/user/User";
import { UserRepository } from "../../../domain/user/UserRepository";

export class AddUser {
    private userRepository: UserRepository;
    
    constructor (userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute (user: User) {
        this.userRepository.add(user);  
    }
}