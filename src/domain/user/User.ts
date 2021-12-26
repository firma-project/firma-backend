export class User {
    id?: string;
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
        id?: string,
        ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.profile = profile;
        this.uid = uid;
        this.sessionToken = sessionToken;
    }
  
}