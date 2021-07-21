import sharp from 'sharp';
import path from 'path';

const parseText = (inText: string): string => {
  return inText;
};

/**
 * This is the function that will change the size of the image.
 * NOTE: Called from the controller layer, that passes on the information.
 * @param width
 * @param height
 */
const changeFileSize = async (
  h: string,
  w: string,
  name: string
): Promise<boolean> => {
  // Read a raw array of pixels and save it to a png
  let isSuccessful = false;
  try {
    const source = path.join(__dirname, '..', '..', 'images', name);
    const outFile = path.join(
      __dirname,
      '..',
      '..',
      'images',
      `${name}_${h}_${w}.jpg`
    );
    // const sourse = path.join(__dirname, '')
    const f = sharp(source).resize(parseInt(h), parseInt(w));
    await f.toFile(outFile);
    isSuccessful = true;
  } catch (e) {
    console.log(e);
  }
  return isSuccessful;
};

export { parseText as default, changeFileSize };
