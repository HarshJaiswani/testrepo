import * as fs from "fs";

export default function handler(req, res) {
    const randomNum = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    fs.readFile("public/Quotes.json",'utf-8',(err,data)=>{
        if (err) {
            console.log(err);
            res.status(400).json({error:"No such File or Directory"});
        }
        else{
            const quotes = JSON.parse(data);
            res.status(200).json(quotes[randomNum(1,1600)]);
        }
    })
}
