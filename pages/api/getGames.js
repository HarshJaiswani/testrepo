import path from "path";
import * as fs from "fs";

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "Games");
  const gamesArray = [];
  fs.readdir(jsonDirectory,(err,data)=>{
        if(err){
            res.status(400).json({error:"No such File or Directory"});
        }
        else{
            data.forEach((e)=>{
                gamesArray.push(JSON.parse(fs.readFileSync(`${jsonDirectory}/${e}`,'utf-8')));
            })
        }
        res.status(200).json({data : gamesArray});
    })
}
