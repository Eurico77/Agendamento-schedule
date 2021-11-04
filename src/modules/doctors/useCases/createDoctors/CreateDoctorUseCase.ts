import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import { DoctorsDTO } from '../../dtos/DoctorsDTO';
import { DoctorsRepository } from '../../repositories/implementations/DoctorsResposotory';

@injectable()
class CreateDoctorUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: DoctorsRepository
  ) { }

  async execute({ name, id }: DoctorsDTO): Promise<void> {
    const userExists = await this.usersRepository.findById(id);

    if (userExists) {
      throw new AppError('User already exists!', 400);
    }

    await this.usersRepository.create({
      name,

    });
  }
}

export { CreateDoctorUseCase };
