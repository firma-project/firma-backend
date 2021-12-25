import { User } from "../../../domain/user/User";
import { UserRepository } from "../../../domain/user/UserRepository";

export class ListUser {
    private userRepository: UserRepository;
    
    constructor (userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute () {
        return this.userRepository.list(); 
    }
}