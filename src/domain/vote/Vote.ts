export class Vote {
    private id?: string;
    private from: string;
    private origin: string;
    private createdAt: Date;

    constructor (from: string, origin: string, createdAt: Date, id?: string) {
        this.id = id;
        this.from = from;
        this.origin = origin;
        this.createdAt = createdAt;
    }

  
}