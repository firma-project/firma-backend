import { Router, Express } from 'express';
import fg from 'fast-glob';

const PREFIX_API = 'api';
const ROUTES_DIR = process.env.NODE_ENV === 'production' ? '**/routes/**Route.js' : '**/routes/**Route.ts';

export const setupRoute = (app: Express): void => {
  const router = Router();
  app.use(`/${PREFIX_API}`, router);
  fg.sync(ROUTES_DIR)
    .map(async (routeFile) => {
      
      const route = (await import(`../../../../${routeFile}`)).default;
      route(router);
      console.log('All routes: ', router.stack.map(r => ({
          path: `/${PREFIX_API}${r.route.path}`,
          method: r.route.methods
      })))
    })
}