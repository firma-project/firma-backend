import { Request, Response } from 'express';
import { Controller } from '../protocols/Controller';

export const adapterRoute = (controllerRoute: Controller) => async (req: Request, res: Response) => {

    const httpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
    };

    const httpResponse = await controllerRoute.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body)
} 