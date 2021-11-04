import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateDoctorUseCase } from './CreateDoctorUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createUserUseCase = container.resolve(CreateDoctorUseCase);

    await createUserUseCase.execute({ name });

    return response.status(201).send();
  }
}

export { CreateUserController };
