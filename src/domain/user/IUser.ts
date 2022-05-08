export interface IUser {
    id?: string;
    name: string;
    email: string;
    profile: string;
    uid?: string;
    sessionToken?: string;

    getUser(): any;
    
}