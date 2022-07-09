import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), 'BlogData');
  const slug = req.query.slug;
  const fileContentsUnparsed = await fs.readFile(`${jsonDirectory}/${slug}.json`, 'utf-8');
  const fileContents = JSON.parse(fileContentsUnparsed);
  res.status(200).json(fileContents);
}