import { Request, Response } from "express";
import { handleHttp } from "../utils/error";
import { ExtendedRequest } from "../types/ExtendedRequest";
import { insertGoodItem, getGoodsItems, getGoodItem, updateGoodItem, deleteGoodItem } from "../services/good.service";
const getGood = async ({ params }: Request, res: Response) => {
   try {
      const { id } = params;
      const response = await getGoodItem(id);
      res.json(response);
    } catch (e) {
      handleHttp(res, "ERROR_GET_ITEM");
    } 
  };
  
  const getGoods = async (req: Request, res: Response) => {
    try {
      const ids = req.params.ids.split(',');
      const response = await getGoodsItems(ids);
      res.json(response);
    } catch (e) {
      handleHttp(res, "ERROR_GET_ITEMS");
    }
  };
  
  const updateGoods = async ({ params, body }: Request, res: Response) => {
    try {
      const { id } = params;
      const response = await updateGoodItem(id, body);
      res.json(response);
    } catch (e) {
      handleHttp(res, "ERROR_UPDATE_ITEM");
    }
  };
  
  const postGood = async ({ body,user }: ExtendedRequest, res: Response) => {
    try {
      const requestData = {
        ...body,
        userId: user?.id
      }
      const response = await insertGoodItem(requestData);
      res.json(response);
    } catch (e) {
      handleHttp(res, "ERROR_POST_GOOD", e);
    }
  };
  
  const deleteGood = async ({ params }: Request, res: Response) => {
    try {
      const { id } = params;
      const response = await deleteGoodItem(id);
      res.json(response);
    } catch (e) {
      handleHttp(res, "ERROR_DELETE_ITEM");
    }
  };
  
  export { getGood, getGoods, updateGoods, postGood, deleteGood};