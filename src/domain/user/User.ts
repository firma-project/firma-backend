export class User {
    private id?: string;
    private name: string;
    private role: string;

    constructor (name: string, role: string, id?: string) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

  
}