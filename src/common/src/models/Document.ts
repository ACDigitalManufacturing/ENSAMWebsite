import mongoose from "mongoose";

interface DocumentAttrs {
  data: Buffer;
  contentType: string;
}

interface DocumentDoc extends mongoose.Document {
  data: Buffer;
  contentType: string;
}

interface DocumentModel extends mongoose.Model<DocumentDoc> {
  build(attrs: DocumentAttrs): DocumentDoc;
}

const documentSchema = new mongoose.Schema(
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

const Document = mongoose.model<DocumentDoc, DocumentModel>(
  "Document",
  documentSchema,
);

export default Document;
export { DocumentAttrs, DocumentDoc, documentSchema, Document };
