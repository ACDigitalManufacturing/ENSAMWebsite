import mongoose from "mongoose";

interface ImageAttrs {
  data: Buffer;
  contentType: string;
}

interface ImageDoc extends mongoose.Document {
  data: Buffer;
  contentType: string;
}

interface ImageModel extends mongoose.Model<ImageDoc> {
  build(attrs: ImageAttrs): ImageDoc;
}

const imageSchema = new mongoose.Schema(
  {
    data: {
      type: Buffer,
      required: true,
    },
    contentType: {
      type: Buffer,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

imageSchema.statics.build = (attrs: ImageAttrs) => {
  return new Image(attrs);
};

const Image = mongoose.model<ImageDoc, ImageModel>("Image", imageSchema);

export default Image;
export { ImageAttrs, ImageDoc, imageSchema, Image };
