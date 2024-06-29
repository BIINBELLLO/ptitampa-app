import { Request, Response } from "express";
import { CompanyService } from "../services/CompanyService";
import { Company } from "../entities/CompanyEntity";

export default class CompanyController {
  private companyService = new CompanyService();

  seedCompany = async (req: Request, res: Response) => {
    try {
      const seeded = await this.companyService.bulkInsertCompanies()
      if (!seeded) {
        return res.status(200).json(false);
      }
      return res.status(200).json(true);
    } catch (e) {
      return res.status(500).json({message: "Seeding failed."});
    }
  };

  getAllCompanies = async (req: Request, res: Response) => {
    try {
      const companyList: Company[] | null = await this.companyService.getAllCompanies()
      if (companyList == null) {
        return res.status(404).json(null);
      }
      return res.status(200).json(companyList);
    } catch (e) {
      return res.status(500).json({message: "Unable to fetch company detail list"});
    }
  };
}