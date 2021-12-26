import { HttpRequest, HttpResponse } from './Http';

export interface Controller {
    handle (req?: HttpRequest): Promise<HttpResponse>
}