import { User } from "./User";

export interface UserRepository {
    add(user: User): Promise<User>;
    list(): Promise<User[]>;
}