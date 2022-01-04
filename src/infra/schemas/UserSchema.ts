import { Schema, model, Model, Document } from "mongoose";
import { User } from "../../domain/user/User";
import { UserRepository } from "../../domain/user/UserRepository";
import { UserFactory } from "../../domain/user/UserFactory";
import { IUser } from "../../domain/user/IUser";

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
        this.User = model<User>('User', this.schema);
    }

    async add(user: User): Promise<IUser> {
        const addedUser = await this.User.create(user); 
        return UserFactory.create(addedUser);
    }

    async list(): Promise<IUser[]> {
        const users = await this.User.find().exec();
        return users.map(user => UserFactory.create(user));
    }

    async findByEmail(email: string): Promise<IUser> {
     
        const newUser = await this.User.findOne({
            email,
        }).exec(); 

        return UserFactory.create(newUser);
    }

    async update(user: User): Promise<IUser> {
        const document = await this.User.findOne({
            email: user.email,
        });

        const updatedUser = await document.updateOne(user);
        return UserFactory.create(updatedUser);
    }
    
}

export default new UserSchema();
