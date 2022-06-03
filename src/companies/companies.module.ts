import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { CompaniesRepository } from './companies.repository';
import { EmployeesRepository } from '../employees/employees.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompaniesRepository, EmployeesRepository]),
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
