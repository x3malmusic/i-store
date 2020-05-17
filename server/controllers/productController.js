import products from "../database/products";
import categories from "../database/categories";
import { asyncHandler } from "../middleware/async";
import nodemailer from "nodemailer";

export const getProducts = asyncHandler((req, res, next) => {
  res.json(products);
});

export const getCategories = asyncHandler((req, res, next) => {
  res.json(categories);
});

export const buyNotification = asyncHandler((req, res, next) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 25,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let options = {
    from: '"i-store" <i-store.com>',
    to: process.env.EMAIL,
    subject: "You have new order",
    text: `items ${JSON.stringify(req.body.order)} were bought`,
  };

  transporter.sendMail(options);

  res.status(200).send();
});
