import { promises as fs } from "fs";
import path from "path";
export const readFile = async () => {
    try {
      const data = await fs.readFile(path.join(__dirname, "..", "index.html"), 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return { items: [] };
    }
  };
  
export const writeFile = data => {
  fs.writeFile('data.json', JSON.stringify(data, null, 2));
};