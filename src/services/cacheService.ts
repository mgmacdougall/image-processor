/**
 * The Cache service is the main service that deals with the file system.
 */

//First let's create a function that takes a directory name in
// and create it from the command line.

import { promises as fs } from 'fs';

const writeCache = async (fileName: string): Promise<void> => {
  if (fileName) {
    await fs.writeFile('./test.txt', 'test');
  }
};

export default writeCache;
