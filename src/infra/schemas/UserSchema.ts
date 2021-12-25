import { Schema, model, Model } from "mongoose";
import { User } from "../../domain/user/User";
import { UserRepository } from "../../domain/user/UserRepository";


class UserSchema implements UserRepository {

    private schema: Schema<User>;
    private User: Model<User>;

    constructor () {
        this.schema = new Schema({
            name: String,
            role: String,
        })
        this.User = model('User', this.schema);
    }

    add(user: User): Promise<User> {
        return this.User.create(user);
    }
    list(): Promise<User[]> {
        return this.User.find().exec();
    }
    
}

export default new UserSchema();
