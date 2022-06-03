import { EntityRepository, Repository } from 'typeorm';
import { Employee } from './employees.entity';

@EntityRepository(Employee)
export class EmployeesRepository extends Repository<Employee> {}
