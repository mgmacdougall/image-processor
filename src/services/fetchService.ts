/**
 * The Cache service is the main service that deals with the file system.
 */
import path from 'path';
import { promises as fsPromises } from 'fs';

const imageCacheDir = path.join(__dirname, '..', '..', 'images', 'cache');

const removeExtensions = (fName: string) => {
  if (fName.indexOf('.')) {
    return `${fName.split('.')[0]}`;
  }
  return fName;
};

const fetchImage = async (height: number, width: number, imageName: string): Promise<string> => {
  const _imageName = `${removeExtensions(imageName)}_${height}_${width}.jpg`;
  const no_result = 'No file found';
  try {
    const files = await fsPromises.readdir(imageCacheDir);
    const file = files.filter((file: string) => file === _imageName);
    return file.length === 1 ? path.join(imageCacheDir, file.toString()) : no_result;
  } catch (e) {
    throw new Error(e);
  }
};

export default fetchImage;
