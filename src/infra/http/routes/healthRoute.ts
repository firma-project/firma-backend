import { Router, Request, Response } from 'express';

export default (router: Router): void => {
    router.get('/status', async (req: Request, res: Response) => {
        res.send('Ok')
    });
}