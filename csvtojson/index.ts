import { CsvUploader } from './helper/csvUploader';
import express from 'express';
import { CsvToJsonController } from './controller/csvToJsonController';

const app = express();
const port = 3000;
const multer = require('multer');


app.post('/upload', multer({ dest: 'uploads/'}).single('csv'), async (req, res) => {
  try{
        
    let result = await new CsvUploader().csvToJson(req.file.path);
    const data = await new CsvToJsonController().csvToJson(result);
    res.json({
        status: 'File uploaded successfully',
        data: data
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
   





// npm run serve
app.listen(port, () => {
  console.log(`Server listening to the port: ${port}.`);
});