import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Product from "../models/product.model";
import { LoginError, SignUpError } from "../utils/ErrorType";
import {RoleType} from "../utils/RoleType";

const ProductRoute = express.Router();
require("dotenv").config();

ProductRoute.get("/sync", async (req, res) => {
  await Product.sync();
  res.json({ msg: "Table synced" });
});

export default ProductRoute;