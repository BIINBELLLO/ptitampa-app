import path from "path";
import { createPDF } from "../services/PdfService";
import { PDFData } from '../utils/interfaces/PDFData.interface'
export class PdfController {

  downloadPdf = async (req: Request, res: any) => {
    try {
      const pdfData: PDFData = {
        clientNumber: '010000XXXXXX',
        businessName: 'Sample Business',
        businessAddress: '123 Business St, City, State, Zipcode',
        email: 'contact@business.com',
        phone: '123-456-7890',
        dateOfRegistration: '2023-01-01',
        stateOfRegistration: 'State',
        ownerName: 'Owner Name',
        riskScore: '70',
        paymentData: [
          { vendor: 'Bank of America', term: '8 years', amount: '$10,000', age: '8 years', behavior: 'On time' },
          { vendor: 'Quill', term: 'Net 30', amount: '$500', age: '2 months', behavior: 'On time' }
        ]
      };
    
      const pdfFilePath = path.join(__dirname, 'output.pdf');
    
      // Create PDF
      createPDF(pdfData, pdfFilePath, res);
    
      // Wait for the PDF to be created and then send it as a response
      // await setTimeout(() => {
      //   res.download(pdfFilePath, 'custom-report.pdf', (err: any) => {
      //     if (err) {
      //       console.error('Error downloading PDF:', err);
      //     } else {
      //       console.log('PDF downloaded successfully');
      //     }
      //   });
      // }, 1000); // Adjust the timeout as needed to ensure the file is created
    }
    catch (e) {
      res.json({fileName: "ERR COULD NOT GENERATE PDF"});
      throw e;
    }
  }
}