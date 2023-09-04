import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
);

const blogModel = mongoose.model("Blog", blogSchema);

export default blogModel;
