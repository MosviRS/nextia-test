import { Router } from "express";
import { SignUp, SigIn } from "../controllers/auth";

const router = Router();
router.post("/register", SignUp);
router.post("/login", SigIn);

export { router };