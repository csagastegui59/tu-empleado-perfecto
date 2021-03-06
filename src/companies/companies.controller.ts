import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatedEmployeeDto } from 'src/employees/dto/res/created-employee.dto';
import { CreateEmployeeDto } from '../employees/dto/req/create-employee.dto';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Get()
  getAll(): Promise<Company[]> {
    return this.companiesService.getAll();
  }

  @Get('/:id')
  getOneById(@Param('id') id: string): Promise<Company> {
    return this.companiesService.getOneById(id);
  }

  @Post()
  createOne(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.createOne(createCompanyDto);
  }

  @Post('/:id')
  addEmployee(
    @Param() params,
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<CreatedEmployeeDto> {
    return this.companiesService.addEmployee(createEmployeeDto, params.id);
  }
}
