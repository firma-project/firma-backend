import { User } from "./User";
import { IUser } from "./IUser";

export interface UserRepository {
    add(user: User): Promise<IUser>;
    list(): Promise<IUser[]>;
    findByEmail(email: string): Promise<IUser>
    update(user: User): Promise<IUser>;
}