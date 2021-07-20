import sharp from 'sharp';

const parseText = (inText: string): string => {
  return inText;
};

/**
 * This is the function that will change the size of the image.
 * NOTE: Called from the controller layer, that passes on the information.
 * @param image
 * @param width
 * @param height
 */
const changeFileSize = async (w: string, h: string): Promise<void> => {
  // Read a raw array of pixels and save it to a png
  const height: number = parseInt(h);
  const width: number = parseInt(w);
  const f = sharp('../../images/fjord.jpg').resize(height, width);
  await f.toFile('../../images/test.jpg');
};

export { parseText as default, changeFileSize };
