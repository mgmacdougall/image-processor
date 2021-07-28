import path from 'path';
import { promises as fsPromises } from 'fs';

const imageSourceDir = path.join(__dirname, '..', '..', 'images', 'cache');
const fetchCacheImage = async (name: string): Promise<string> => {
  const images = await fsPromises.readdir(imageSourceDir);
  const exists = images.some((image: string) => image === name);
  return exists ? path.join(imageSourceDir, name) : 'No image found';
};

export default fetchCacheImage;
