"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = exports.PostStatuses = exports.PostCategories = void 0;
var mongoose_1 = require("mongoose");
var PostCategories;
(function (PostCategories) {
    PostCategories["NoticeToStudent"] = "avisetudiant";
    PostCategories["OfficialReleases"] = "communique";
})(PostCategories = exports.PostCategories || (exports.PostCategories = {}));
var PostStatuses;
(function (PostStatuses) {
    PostStatuses[PostStatuses["live"] = 0] = "live";
    PostStatuses[PostStatuses["draft"] = 1] = "draft";
    PostStatuses[PostStatuses["not_saved"] = 2] = "not_saved";
})(PostStatuses = exports.PostStatuses || (exports.PostStatuses = {}));
exports.postSchema = new mongoose_1.Schema({
    title: {
        type: String,
        default: "",
    },
    content: {
        type: String,
        default: "",
    },
    cover: {
        type: mongoose_1.Types.ObjectId,
        ref: "Image",
        default: null,
    },
    documents: {
        type: [mongoose_1.Types.ObjectId],
        ref: "Document",
        default: [],
    },
    category: {
        type: PostCategories,
        required: true,
    },
    status: {
        type: PostStatuses,
        default: PostStatuses.not_saved,
    },
}, {
    timestamps: true,
    toJSON: {
        transform: function (_, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.status;
            delete ret.__v;
        },
    },
});
exports.postSchema.statics.build = function (attrs) {
    return new Post(attrs);
};
var Post = (0, mongoose_1.model)("Post", exports.postSchema);
exports.default = Post;
