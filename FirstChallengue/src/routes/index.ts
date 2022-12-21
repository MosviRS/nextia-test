import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * @param {string} fileName Name of the file
 * @returns {string} Return the name of the file without the extension
 */
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};
/**
 * import all the files in the folder and add them to the router
 * 
 */
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };