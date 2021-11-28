import mongoose from "mongoose";

export interface DocumentAttrs {
  data: Buffer;
  contentType: string;
}

export interface DocumentDoc extends mongoose.Document {
  data: Buffer;
  contentType: string;
}

export interface DocumentModel extends mongoose.Model<DocumentDoc> {
  build(attrs: DocumentAttrs): DocumentDoc;
}

export const documentSchema = new mongoose.Schema(
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

documentSchema.statics.build = (attrs: DocumentAttrs) => {
  return new Document(attrs);
};

export const Document = mongoose.model<DocumentDoc, DocumentModel>(
  "Document",
  documentSchema,
);

export default Document;
