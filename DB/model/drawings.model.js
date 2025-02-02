import mongoose ,{ Schema,model } from "mongoose";

const drawingSchema = new Schema(
  {
    imageUrl: {
      type: Object,
      required: true,
    },
    prediction: {
      type: Object,
      required: true,
    },
    childId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Child", // Reference to Child schema
      required: true,
    },
      parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parent",
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
const drawingModel =
mongoose.models.Drawing || model("Drawing", drawingSchema);
export default drawingModel;