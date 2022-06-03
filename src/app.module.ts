import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    EmployeesModule,
    CompaniesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tu-empleado-perfecto',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
