import express from "express";
import { protectAdmin } from "../middleware/auth.js";

const showRouter = express.Router();


export default showRouter;
