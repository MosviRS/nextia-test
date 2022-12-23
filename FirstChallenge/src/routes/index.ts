import { Router } from "express";
import { checkJwt } from "../middleware/checkSession";
import { SignUp, SigIn } from "../controllers/auth";
import {
  getGood,
  getGoods,
  updateGoods,
  postGood,
  deleteGood,
} from "../controllers/goods";
const router = Router();
/**
 * Routes User
 */
router.post("/register", SignUp);
router.post("/login", SigIn);
/**
 * Routes Goods
 */
router.get("/goods/:ids", checkJwt, getGoods);
router.get("/good/:id", checkJwt, getGood);
router.post("/good", checkJwt, postGood);
router.put("/good/:id", checkJwt, updateGoods);
router.delete("/good/:id", checkJwt, deleteGood);

export { router };
