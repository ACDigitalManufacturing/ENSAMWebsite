import { Types, Document, Model, Schema } from "mongoose";
import { DocumentDoc } from "./Document";
import { ImageDoc } from "./Image";
export declare type documentsType = Types.ObjectId[] | DocumentDoc[];
export declare type coverType = Types.ObjectId | ImageDoc;
export interface PostAttrs {
    category: PostCategories;
    status: PostStatuses;
}
export interface PostDoc<C = coverType, D = documentsType> extends Document {
    title: string;
    content: string;
    cover: C;
    documents: D;
    category: PostCategories;
    status: PostStatuses;
}
export interface PostModel extends Model<PostDoc> {
    build(attrs: PostAttrs): PostDoc;
}
export declare enum PostCategories {
    NoticeToStudent = "avisetudiant",
    OfficialReleases = "communique"
}
export declare enum PostStatuses {
    live = 0,
    draft = 1,
    not_saved = 2
}
export declare const postSchema: Schema<any, Model<any, any, any, any>, {}>;
declare const Post: PostModel;
export default Post;
