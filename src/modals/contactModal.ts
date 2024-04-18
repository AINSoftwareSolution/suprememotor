import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ContactModal =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

  export default ContactModal;
