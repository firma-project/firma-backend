import { Schema, model, Model } from "mongoose";
import { User } from "../../domain/user/User";
import { UserRepository } from "../../domain/user/UserRepository";


class UserSchema implements UserRepository {

    private schema: Schema<User>;
    private User: Model<User>;

    constructor () {
        this.schema = new Schema({
            name: String,
            email: String,
            profile: String,
            uid: String,
            sessionToken: String,
        })
        this.User = model('User', this.schema);
    }

    add(user: User): Promise<User> {
        return this.User.create(user);
    }
    list(): Promise<User[]> {
        return this.User.find().exec();
    }

    findByEmail(email: string): Promise<User> {
     
        return this.User.findOne({
            email,
        }).exec();
    }

    async update(user: User): Promise<User> {
        const document = await this.User.findOne({
            email: user.email,
        });

        return document.updateOne(user);
    }
    
}

export default new UserSchema();
