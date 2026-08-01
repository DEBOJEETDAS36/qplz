import { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    program: { type: String, default: "" }, // populated only when submitted from Workshop page
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Contact || model("Contact", ContactSchema);