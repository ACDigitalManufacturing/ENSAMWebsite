import mongoose from "mongoose";

export interface ImageAttrs {
  data: Buffer;
  contentType: string;
}

export interface ImageDoc extends mongoose.Document {
  data: Buffer;
  contentType: string;
}

export interface ImageModel extends mongoose.Model<ImageDoc> {
  build(attrs: ImageAttrs): ImageDoc;
}

export const imageSchema = new mongoose.Schema(
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

export const Image = mongoose.model<ImageDoc, ImageModel>("Image", imageSchema);

export default Image;
