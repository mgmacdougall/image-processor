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

const fetchImage = async (imageName: string, width: string, height: string): Promise<string> => {
  // check if file exists on the file system
  const _imageName = `${removeExtensions(imageName)}_${height}_${width}.jpg`;
  let result = 'No file found';
  try {
    const files = await fsPromises.readdir(imageCacheDir);
    const file = files.filter((file: string) => file === _imageName);
    result = file.length === 1 ? file.toString() : 'no file found';
  } catch (e) {
    console.log('No file found');
  }
  return result;
};

export default fetchImage;
