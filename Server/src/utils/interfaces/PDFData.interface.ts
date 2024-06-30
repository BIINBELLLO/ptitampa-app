import { PaymentData } from "./paymentData.interface";

export interface PDFData {
  clientNumber: string;
  businessName: string;
  businessAddress: string;
  email: string;
  phone: string;
  dateOfRegistration: string;
  stateOfRegistration: string;
  ownerName: string;
  riskScore: string;
  paymentData: PaymentData[];
}