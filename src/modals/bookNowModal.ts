import mongoose, { Schema } from "mongoose";

const bookNowSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BookNow =
  mongoose.models.BookNow || mongoose.model("BookNow", bookNowSchema);

export default BookNow;
