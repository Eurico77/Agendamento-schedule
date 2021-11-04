import { DoctorsDTO } from '../dtos/DoctorsDTO';
import { Doctor } from '../entities/Doctors';

interface DoctorRepositoryInterface {
  create(data: DoctorsDTO): Promise<void>;
  findById(id: string): Promise<Doctor>;
}

export { DoctorRepositoryInterface };
