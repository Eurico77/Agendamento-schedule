import { container } from 'tsyringe';

import { DoctorsRepository } from '../../modules/doctors/repositories/implementations/DoctorsResposotory';
import { DoctorRepositoryInterface } from '../../modules/doctors/repositories/DoctorsRespositoryInterface';

container.registerSingleton<DoctorRepositoryInterface>('UsersRepository', DoctorsRepository);
