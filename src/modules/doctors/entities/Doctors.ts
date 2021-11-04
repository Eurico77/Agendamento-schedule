import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';


@Entity('doctors')
class Doctor {
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }

  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Doctor };
