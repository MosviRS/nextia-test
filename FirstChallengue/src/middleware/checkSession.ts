import { NextFunction,Response} from "express";
import { decode } from "../utils/token";
import { ExtendedRequest } from "../types/ExtendedRequest";
/**
 * Verify if the user is logged in and if the token is valid
 * @param req 
 * @param res 
 * @param next 
 */
const checkJwt = (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    const userToken = req.headers.authorization || "";
    const jwtToken = userToken.split(" ").pop();
    const isUser = decode(jwtToken as string) as { id: string };
    if (!isUser) {
      res.status(401).json({
        message: "NOT_AUTHORIZED_USER",
      });
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    console.log({ e });
    res.status(400).json({
      message: "SESSION_NOT_FOUND",
      error: e
    });
  }
};

export { checkJwt };