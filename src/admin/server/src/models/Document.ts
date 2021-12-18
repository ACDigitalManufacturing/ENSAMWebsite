import mongoose from "mongoose";

export interface DocumentAttrs {
  filename: string;
  data: Buffer;
  contentType: string;
}

export interface DocumentDoc extends mongoose.Document {
  filename: string;
  data: Buffer;
  contentType: string;
}

export interface DocumentModel extends mongoose.Model<DocumentDoc> {
  build(attrs: DocumentAttrs): DocumentDoc;
}

export const documentSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    data: {
      type: Buffer,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret.data;
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
