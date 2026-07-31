import mongoose, { Schema, models, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    image: { type: String, default: "" },
    category: { type: String, required: true },
    description: { type: String, default: "" },
    stock: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default models.Product || model("Product", ProductSchema);