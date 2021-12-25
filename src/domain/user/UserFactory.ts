import { User } from "./User";

export class UserFactory {

    public static create (data: any): User {
        const { name, role } = data;
        const user = new User(name, role);
        
        return user;
    }
}