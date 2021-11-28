"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = exports.documentSchema = void 0;
var mongoose_1 = require("mongoose");
var documentSchema = new mongoose_1.default.Schema({
    data: {
        type: Buffer,
        required: true,
    },
    contentType: {
        type: Buffer,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        transform: function (_, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        },
    },
});
exports.documentSchema = documentSchema;
documentSchema.statics.build = function (attrs) {
    return new Document(attrs);
};
var Document = mongoose_1.default.model("Document", documentSchema);
exports.Document = Document;
exports.default = Document;
