import { NextApiRequest, NextApiResponse } from 'next';
const ExcelJS = require('exceljs');


export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const workbook = new ExcelJS.Workbook();
  workbook.xlsx.readFile('public/newsletter.xlsx')
      .then(() => {
          // Sélectionner la première feuille du classeur
          const worksheet = workbook.getWorksheet(1);
  
          // Données à ajouter
          const newRowData = [req.body.firstName,req.body.lastName,req.body.company,req.body.email,req.body.message];
  
          // Ajouter la ligne de données à la fin de la feuille
          worksheet.addRow(newRowData);
  
          // Enregistrer les modifications dans le fichier Excel
          return workbook.xlsx.writeFile('public/newsletter.xlsx');
      })
      .then(() => {
          console.log('Ligne ajoutée avec succès.');
          res.send("ok");
      })
      .catch((error) => {
          console.error('Erreur :', error);
          res.send("erreur : " + error);
      });
};