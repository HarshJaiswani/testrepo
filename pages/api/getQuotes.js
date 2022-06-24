import * as fs from "fs";

export default function handler(req, res) {
    fs.readFile('Quotes.json','utf-8',(err,data)=>{
        if (err) {
            res.status(400).json({error:"No such File or Directory"});
        }
        else{
            const quotes = JSON.parse(data);
            res.status(200).json([...quotes]);
        }
    })
}
