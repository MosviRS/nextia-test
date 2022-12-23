import { GoodInterface } from "../types/GoodInterface";
import { Goods } from "../models/GoodsModel";
import { ResponseGoodInterface } from "../types/ResponseGoodInterface";
const insertGoodItem = async ({ article, description, userId }) => {
  if (!article || !description || !userId)
    return {
      status: false,
      message: "the good data is not defined",
      good: null,
    } as ResponseGoodInterface;
  const responseInsert = await Goods.create({
    article,
    description,
    userId,
  });
  return {
    status: true,
    message: "Successfully registered good",
    good: responseInsert,
  } as ResponseGoodInterface;
};

const getGoodsItems = async (ids:String[]) => {
  const goods = await Goods.findAll({ where: { id: ids } });
  if (!goods)
    return {
      status: false,
      message: "Good Items dont exist",
      goods: [],
    } as ResponseGoodInterface;
  return {
    status: true,
    message: "Good Items exist",
    goods: goods,
  } as ResponseGoodInterface;
};

const getGoodItem = async (id: string) => {
  const good = await Goods.findOne({ where: { id: id } });
  if (!good)
    return {
      status: false,
      message: "Good Item dont exist",
      good: null,
    } as ResponseGoodInterface;
  return {
      status: false,
      message: "Good Item dont exist",
      good: good,
  } as ResponseGoodInterface;
};

const updateGoodItem = async (id: string, data: GoodInterface) => {
  if (!id || !data)
  return {
    status: false,
    message: "the good data is not defined",
    good: null,
  } as ResponseGoodInterface;
  await Goods.update(data, { where: { id: id } });
  return {
    status: true,
    message: "Successfully updated good data",
    good:Object.assign({},data,{id:id})
  }; 
};

const deleteGoodItem = async (id: string) => {
  if (!id)
  return {
    status: false,
    message: "the good id data is not defined",
    good: null,
  } as ResponseGoodInterface;
  await Goods.destroy({ where: { id: id } });
  return {
    status: true,
    message: "Deleted good data",
    good: null
  }; 
};

export {
  insertGoodItem,
  getGoodsItems,
  getGoodItem,
  updateGoodItem,
  deleteGoodItem,
};
