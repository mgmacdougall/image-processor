import sharp, { OutputInfo } from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';

// Default directories
const imageSourceDir = path.join(__dirname, '..', '..', 'images');
const imageCacheDir = path.join(__dirname, '..', '..', 'images', 'cache');

const removeExtensions = (fName: string) => {
  if (fName.indexOf('.')) {
    return `${fName.split('.')[0]}`;
  }
  return fName;
};

const doesFileExistInImgDir = async (name: string | null): Promise<boolean> => {
  const source: string = imageSourceDir;
  const files: string[] = await fsPromises.readdir(source);
  const isFound: boolean = name ? files.indexOf(name) > 1 : false;
  return isFound;
};

/**
 * This is the function that will change the size of the image.
 * NOTE: Called from the controller layer, that passes on the information.
 * @param width
 * @param height
 */
const changeFileSize = async (h: number | null, w: number | null, name: string | null): Promise<boolean> => {
  let isSuccessful = false;
  if (await doesFileExistInImgDir(name)) {
    try {
      const cleanedFile = removeExtensions(name || 'default');
      const source = path.join(imageSourceDir, `${cleanedFile}.jpg`);
      const outFile = path.join(imageCacheDir, `${cleanedFile}_${h}_${w}.jpg`);
      if (h && w) {
        await resizeImage(source, h, w, outFile);
        isSuccessful = true;
      }
    } catch (e) {
      console.log(e);
    }
  }
  return isSuccessful;
};

const resizeImage = async (inSource: string, height: number, width: number, outLocation: string): Promise<OutputInfo> => {
  try {
    const _resizedImg = sharp(inSource, { raw: { width: width, height: height, channels: 3 } });
    return await _resizedImg.toFile(outLocation);
  } catch (error) {
    throw new Error('Resize image failed with');
  }
};

export default changeFileSize;
