import { IUser } from "./IUser";

export class User implements IUser {
    _id?: string;
    name: string;
    email: string;
    profile: string;
    uid?: string;
    sessionToken?: string;

    constructor (
        name: string,
        email: string,
        profile: string,
        uid?: string,
        sessionToken?: string,
        _id?: string,
        ) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.profile = profile;
        this.uid = uid;
        this.sessionToken = sessionToken;
    }

    getUser () {
        return {
            _id: this._id || this.uid,
            uid: this.uid,
            name: this.name,
            email: this.email,
            profile: this.profile,
        }
    }
  
}