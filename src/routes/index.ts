import { Router } from 'express';


import { doctorsRoute } from './doctors.routes';

const routes = Router();
routes.use('/doctors', doctorsRoute);


export { routes };
