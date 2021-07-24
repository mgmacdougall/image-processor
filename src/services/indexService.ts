import sharp from 'sharp';
import path from 'path';
import { promises as fs } from 'fs';
const parseText = (inText: string): string => {
  return inText;
};

const removeExtensions = (fName: string) => {
  if (fName.indexOf('.')) {
    return `${fName.split('.')[0]}`;
  }
  return fName;
};


/**
 * This is the function that will change the size of the image.
 * NOTE: Called from the controller layer, that passes on the information.
 * @param width
 * @param height
 */
const changeFileSize = async (h: string, w: string, name: string): Promise<boolean> => {
  // Read a raw array of pixels and save it to a png
  let isSuccessful = false;
  try {
    const cleanedFile = removeExtensions(name);
    const source = path.join(__dirname, '..', '..', 'images', `${cleanedFile}.jpg`);
    const outFile = path.join(__dirname, '..', '..', 'images', 'cache', `${cleanedFile}_${h}_${w}.jpg`);

    const f = sharp(source).resize(parseInt(h), parseInt(w));
    await f.toFile(outFile);
    isSuccessful = true;
  } catch (e) {
    console.log(e);
  }
  return isSuccessful;
};

export { parseText as default, changeFileSize };
