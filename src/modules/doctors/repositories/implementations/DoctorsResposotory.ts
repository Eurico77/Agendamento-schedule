import { getRepository, Repository } from 'typeorm';

import { DoctorsDTO } from '../../dtos/DoctorsDTO';
import { Doctor } from '../../entities/Doctors';
import { DoctorRepositoryInterface } from '../DoctorsRespositoryInterface';

class DoctorsRepository implements DoctorRepositoryInterface {
  private repository: Repository<Doctor>;
  constructor() {
    this.repository = getRepository(Doctor);
  }

  async create({ name, id, }: DoctorsDTO): Promise<void> {
    const user = this.repository.create({
      name,

      id,

    });
    await this.repository.save(user);
  }

  async findById(id: string): Promise<Doctor> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { DoctorsRepository };
