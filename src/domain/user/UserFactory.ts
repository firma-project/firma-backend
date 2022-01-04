import { User } from "./User";

export class UserFactory {

    public static create (data: any): User {
        const { name, email, profile, uid, sessionToken, _id } = data;
        const user = new User(name, email, profile, uid, sessionToken, _id);
      
        return user;
    }

}