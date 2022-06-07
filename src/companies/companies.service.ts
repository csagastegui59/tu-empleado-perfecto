import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from '../employees/dto/req/create-employee.dto';
import { Employee } from '../employees/employees.entity';
import { EmployeesRepository } from '../employees/employees.repository';
import { CompaniesRepository } from './companies.repository';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompaniesRepository)
    private companiesRepository: CompaniesRepository,
    @InjectRepository(EmployeesRepository)
    private employeesRepository: EmployeesRepository,
  ) {}
  getAll(): Promise<Company[]> {
    return this.companiesRepository.getAll();
  }

  getOneById(id: string): Promise<Company> {
    return this.companiesRepository.getOneById(id);
  }

  createOne(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesRepository.createOne(createCompanyDto);
  }

  async addEmployee(
    createEmployeeDto: CreateEmployeeDto,
    id: string,
  ): Promise<Employee> {
    const company = await this.companiesRepository.getOneById(id);

    const { email, name, rut } = createEmployeeDto;
    const employee = new Employee();
    employee.company = company;
    employee.email = email;
    employee.name = name;
    employee.rut = rut;

    return this.employeesRepository.save(employee);
  }
}
