import { Types, Document, Model, Schema, model } from "mongoose";
import { DocumentDoc } from "./Document";
import { ImageDoc } from "./Image";

export type documentsType = Types.ObjectId[] | DocumentDoc[];
export type coverType = Types.ObjectId | ImageDoc;

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

export enum PostCategories {
  NoticeToStudent = 0,
  OfficialReleases = 1,
}
export enum PostStatuses {
  live = 0,
  draft = 1,
  not_saved = 2,
}

export const postSchema = new Schema(
  {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },

    cover: {
      type: Types.ObjectId,
      ref: "Image",
      default: null,
    },
    documents: {
      type: [Types.ObjectId],
      ref: "Document",
      default: [],
    },

    category: {
      type: Number,
      enum: PostCategories,
      required: true,
    },
    status: {
      type: Number,
      enum: PostStatuses,
      default: PostStatuses.not_saved,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.status;
        delete ret.__v;
      },
    },
  },
);

postSchema.statics.build = (attrs: PostAttrs) => {
  return new Post(attrs);
};

export const Post = model<PostDoc, PostModel>("Post", postSchema);

export default Post;
