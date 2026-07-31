import { Schema, models, model } from "mongoose";

const WorkshopEnquirySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    program: { type: String, required: true },
    message: { type: String, default: "" },
  },
  { timestamps: true }
);

export default models.WorkshopEnquiry || model("WorkshopEnquiry", WorkshopEnquirySchema);