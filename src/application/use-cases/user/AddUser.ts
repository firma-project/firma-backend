import { User } from "../../../domain/user/User";
import { UserRepository } from "../../../domain/user/UserRepository";

export class AddUser {
    private userRepository: UserRepository;
    
    constructor (userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute (user: User) {

        const searchedUser = await this.userRepository.findByEmail(user.email);
        console.log(searchedUser)
        if (searchedUser) {
            return this.userRepository.update(user);
        }
        return this.userRepository.add(user);  
    }
}