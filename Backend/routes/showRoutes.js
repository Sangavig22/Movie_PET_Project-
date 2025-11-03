import express from "express";
import{getNowPlayingMovies} from "../controllers/showController"
import {protectAdmin} from "../middleware/auth.js";

const showRouter=express.Router();


showRouter.get('/now-playing',protectAdmin,getNowPlayingMovies)
showRouter.get('/add',protectAdmin,addShow)
showRouter.get("/all",getShows)
showRouter.get("/:movieId",getShow)


export default showRouter;
