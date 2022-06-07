import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees.controller';
import { EmployeesRepository } from './employees.repository';
import { EmployeesService } from './employees.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([EmployeesRepository])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
