/// <reference types="node" />
import mongoose from "mongoose";
interface ImageAttrs {
    data: Buffer;
    contentType: string;
}
interface ImageDoc extends mongoose.Document {
    data: Buffer;
    contentType: string;
}
declare const imageSchema: any;
declare const Image: any;
export default Image;
export { ImageAttrs, ImageDoc, imageSchema, Image };
