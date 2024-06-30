import PDFDocument from 'pdfkit';
import fs from 'fs';
import { createCanvas } from 'canvas';
import { Chart, registerables } from 'chart.js';
import { PDFData } from '../utils/interfaces/PDFData.interface';
import {Response} from 'express';
Chart.register(...registerables);

function createChartImage(): void {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx: any = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
      datasets: [{
        label: 'Series 1',
        data: [20, 50, 80, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, {
        label: 'Series 2',
        data: [30, 40, 60, 70],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }, {
        label: 'Series 3',
        data: [50, 20, 40, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('chart.png', buffer);
}

function createPDF(data: PDFData, filePath: string, res: Response): void {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=custom-report.pdf');

  // doc.pipe(fs.createWriteStream(filePath));
  // Add custom information to the PDF
  doc.fontSize(25).text('Custom PDF Document', {
    align: 'center'
  });

  doc.moveDown();

  doc.fontSize(12).text(`Client Number: ${data.clientNumber}`);
  doc.text(`Business Name: ${data.businessName}`);
  doc.text(`Business Physical Address: ${data.businessAddress}`);
  doc.text(`Email: ${data.email}`);
  doc.text(`Phone: ${data.phone}`);
  doc.text(`Date of Registration: ${data.dateOfRegistration}`);
  doc.text(`State of Registration: ${data.stateOfRegistration}`);
  doc.text(`Owner Name: ${data.ownerName}`);
  doc.text(`Risk Score: ${data.riskScore}`);

  doc.moveDown();
  doc.text('Payment Data:');
  data.paymentData.forEach(payment => {
    doc.text(`Vendor: ${payment.vendor}, Term: ${payment.term}, Amount: ${payment.amount}, Age: ${payment.age}, Payment Behavior: ${payment.behavior}`);
  });

  // Add chart image
  createChartImage();
  doc.image('chart.png', {
    fit: [500, 400],
    align: 'center',
    valign: 'center'
  });
  doc.pipe(res);
  doc.end();
  console.log("PDF completed.");
}

export { createPDF };
