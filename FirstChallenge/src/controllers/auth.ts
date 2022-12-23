
import { Request, Response } from "express";
import { registerNewUser,loginUser } from "../services/auth.service";
import { handleHttp } from "../utils/error";
const SignUp= async ({ body }: Request, res: Response) => {
  try{
    const response = await registerNewUser(body);
    res.json(response);
  }catch(error:any){
    handleHttp(res, error);
  }
};

const SigIn = async ({ body }: Request, res: Response) => {
  try{
    const response = await loginUser(body);
    res.json(response);
  }catch(error:any){
    handleHttp(res, error);
  }
};

export { SignUp, SigIn };