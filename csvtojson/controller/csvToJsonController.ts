import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient({ errorFormat: "minimal" });

export class CsvToJsonController {
    async csvToJson (data :Array<any>) {
        try {
            let newArray = [];
            for (let i = 0; i < data.length; i++) {
                const uuid = uuidv4();
                const newObj = {...data[i], uuid};
                newArray.push(newObj);
            }
            const result = await prisma.csvToJson.createMany({
                data : newArray
            });
            console.log(result)
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}