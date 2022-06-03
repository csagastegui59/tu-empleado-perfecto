import { Employee } from '../employees/employees.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  rut: string;

  @Column({ name: 'telephone_number' })
  telephoneNumber: string;

  @OneToMany(() => Employee, (employee: Employee) => employee.company)
  employees: Employee[];
}
