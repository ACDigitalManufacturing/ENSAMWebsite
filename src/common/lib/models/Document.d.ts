/// <reference types="node" />
import mongoose from "mongoose";
interface DocumentAttrs {
    data: Buffer;
    contentType: string;
}
interface DocumentDoc extends mongoose.Document {
    data: Buffer;
    contentType: string;
}
declare const documentSchema: any;
declare const Document: any;
export default Document;
export { DocumentAttrs, DocumentDoc, documentSchema, Document };
