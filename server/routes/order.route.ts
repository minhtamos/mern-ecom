import express from "express";
import Review from "../models/review.mobel";
import { uuid } from "uuidv4";
import Order from "../models/order.model";

const OrderRoute = express.Router();
require("dotenv").config();

OrderRoute.get("/sync/force", async (req, res) => {
  await Order.sync({ force: true });
  res.json({ msg: "Table synced" });
});

OrderRoute.get("/sync", async (req, res) => {
  await Order.sync();
  res.json({ msg: "Table synced" });
});

OrderRoute.delete("/truncate", async (req, res) => {
  try {
    await Order.destroy({ truncate: true });
    res.status(200).json({ msg: "Table truncated" });
  } catch (error) {
    res.status(400).json(error);
  }
});

OrderRoute.post("/", async (req, res) => {
  const {
    productID,
    userID,
    quantity,
    color,
    size,
    productName,
    price,
  } = req.body;
  console.log(req.body);
  try {
    const existedCate = await Order.findOne({
      where: { productID: productID, userID: userID },
    });
    if (existedCate === null) {
      await Order.create({
        id: uuid(),
        productID,
        productName,
        price,
        userID,
        quantity,
        color,
        size,
        status: "ordered",
      });
      res.status(200).json({ message: "Added successful" });
    } else {
      res
        .status(400)
        .json({ errors: [{ message: "You have already reviewed" }] });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

OrderRoute.post("/all", async (req, res) => {
  const { order } = req.body;
  if (order.length === 0) {
    res.status(400).json({ errors: [{ message: "Empty order" }] });
  }
  order.forEach(async (cart: any, index: number) => {
    const {
      productID,
      userID,
      quantity,
      color,
      size,
      productName,
      price,
    } = cart;
    try {
      await Order.create({
        id: uuid(),
        productID,
        productName,
        price,
        userID,
        quantity,
        color,
        size,
        status: "ordered",
      });
      if (index === order.length - 1) {
        res.status(200).json({ message: "Order successfully" });
      }
    } catch (error) {
      res.status(400).json(error);
    }
  });
});

OrderRoute.delete("/", async (req, res) => {
  const { id } = req.body;
  try {
    await Order.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ msg: "Deleted successful" });
  } catch (error) {
    res.status(400).json(error);
  }
});

OrderRoute.get("/:userID", async (req, res) => {
  try {
    const { userID } = req.params;
    const orders = await Order.findAll({
      where: {
        userID: userID,
      },
    });
    res.status(200).json(orders); 
  } catch (error) {
    res.status(400).json(error);
  }
});

OrderRoute.get("/", async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

OrderRoute.put("/delivered/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Order.update({status: "delivered"}, {where: {
      id: id
    }});
    res.status(200).json({message: "Updated Successful"}); 
  } catch (error) {
    res.status(400).json(error);  
  }
});

OrderRoute.put("/ordered/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Order.update({status: "ordered"}, {where: {
      id: id
    }});
    res.status(200).json({message: "Updated Successful"}); 
  } catch (error) {
    res.status(400).json(error);  
  }
});

export default OrderRoute;
