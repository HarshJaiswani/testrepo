import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const quoteFile = path.resolve("public/Quotes.json");
  const fileContentsUnparsed = await fs.readFile(quoteFile, "utf-8");
  const fileContents = JSON.parse(fileContentsUnparsed);
  res.status(200).json(fileContents[randomNum(0,1642)]);
}
