import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: [true, "O slug eh obrigatorio"],
    trim: true,
    index: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  imgPath: {
    type: String,
    required: true,
    trim: true,
  },
});

const Product = mongoose.model("Product", schema);
export default Product;
