// http://localhost:3000/api/getBlog?slug=how-to-learn-javascript
import * as fs from "fs";

export default async function handler(req, res) {
    const slug = req.query.slug;
    const blog = JSON.parse(fs.readFileSync(`https://legrosh.vercel.app/BlogData/${slug}.json`,'utf-8'));
    res.status(200).json(blog);
}
