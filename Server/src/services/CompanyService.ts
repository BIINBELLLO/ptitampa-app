import { AppDataSource } from "../config/data-source";
import { Company } from "../entities/CompanyEntity";
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

  getAllCompanies = async () => {
    try {
      const companyList: Company[] = await this.companyRepository.find();
      return companyList;
    } catch (error) {
      console.error("Error during bulk insert:", error);
      return null;
    }
  }
  
}
