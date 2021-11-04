import { Router } from 'express';


import { CreateUserController } from '../modules/doctors/useCases/createDoctors/CreateDoctorController'


const doctorsRoute = Router();
const createUserController = new CreateUserController();

doctorsRoute.post('/', createUserController.handle);

export { doctorsRoute };
