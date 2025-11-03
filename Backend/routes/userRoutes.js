import express from "express";
import { getFavourites, getUserBookings, updateFavourite } from "../controllers/userController";

const userRouter=express.Router(); //this is express.js

userRouter.get('/booking',getUserBookings)
userRouter.post('/update-favourite',updateFavourite)
userRouter.get('/favourite',getFavourites)


export default userRouter; //i made
