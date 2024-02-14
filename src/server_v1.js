import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";


dotenv.config({
  path: "./env",
});

import express from "express";
const app=express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port : ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();


