import { ILike, Like } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Company } from "../entities/CompanyEntity";
import { PaginationResult } from "../utils/interfaces/pagination.interface";
import { SeedCompanyData } from "../utils/seed";

export class CompanyService {
  private readonly companyRepository = AppDataSource.getRepository(Company);
  
  async bulkInsertCompanies () : Promise<boolean> {
    try {
      const companies = SeedCompanyData.map(data => {
        const company = new Company();
        company.name = data.name;
        company.address = data.address;
        company.city = data.city;
        company.state = data.state;
        company.zipcode = data.zipcode;
        return company;
      });

      await this.companyRepository.save(companies);
      return true;
    } catch (error) {
      console.error("Error during bulk insert:", error);
      return false;
    }
  }

  getAllCompanies = async (page: number, pageSize: number, searchText: string) : Promise<PaginationResult<Company>>=> {
    try {
      const [result, total]: [Company[], number] = await this.companyRepository.findAndCount({
        where: { name: ILike('%' + searchText + '%') }, order: { name: "DESC" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      });
    const totalPages = Math.ceil(total / pageSize);

    return {
      data: result,
      count: total,
      totalPages,
      currentPage: page,
    };
    } catch (error) {
      console.error("Error during bulk insert:", error);
      return {
        data: [],
        count: 0,
        totalPages: 0,
        currentPage: 0,
      };
    }
  }
  
}
