import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';

@EntityRepository(Company)
export class CompaniesRepository extends Repository<Company> {
  async getAll(): Promise<Company[]> {
    return this.find({
      relations: ['employees'],
    });
  }

  async getOneById(id: string): Promise<Company> {
    const company = await this.findOne({
      where: { id: id },
      relations: ['employees'],
    });

    if (!company) {
      throw new NotFoundException(`Company with id: ${id} was not found`);
    }

    return company;
  }

  async createOne(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = this.create({ ...createCompanyDto });

    await this.save(company);
    return company;
  }
}
