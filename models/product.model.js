import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true, // Add index for name searches
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true, // Add index for slug lookups
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      index: true, // Add index for price filtering
    },
    Catagory: {
      type: mongoose.ObjectId,
      ref: "Catagory",
      required: true,
      index: true, // Add index for category filtering
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

// Add compound index for better search performance
productSchema.index({ name: 'text', description: 'text' });

// Add index for sorting by creation date
productSchema.index({ createdAt: -1 });

export default mongoose.model("Products", productSchema);