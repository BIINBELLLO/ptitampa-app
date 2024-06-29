import { Router } from "express";
import UserController from "../controllers/UserController";
import CompanyController from "../controllers/CompanyController";

const router = Router();
const companyController = new CompanyController();

router.get("/seed", companyController.seedCompany);
router.get("/getAllCompanies", companyController.getAllCompanies);

export default router