const csv=require('csvtojson')
export class CsvUploader {
   async csvToJson (file:any) {
    try{
       let results=await csv().fromFile(file);
        return results
    } catch (err) {
      console.log(err);
    }   
    
   }
    
}