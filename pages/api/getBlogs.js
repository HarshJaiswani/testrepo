import * as fs from "fs";

export default function handler(req, res) {
    const blogsArray = [];
    fs.readdir('https://legrosh.vercel.app/BlogData',(err,data)=>{
        if(err){
            res.status(400).json({error:"No such File or Directory"});
        }
        else{
            data.forEach((e)=>{
                blogsArray.push(JSON.parse(fs.readFileSync(`https://legrosh.vercel.app/BlogData/${e}`,'utf-8')));
            })
        }
        res.status(200).json({data : blogsArray});
    })
}
