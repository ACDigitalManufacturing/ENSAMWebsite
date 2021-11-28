"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.imageSchema = void 0;
var mongoose_1 = require("mongoose");
var imageSchema = new mongoose_1.default.Schema({
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
exports.imageSchema = imageSchema;
imageSchema.statics.build = function (attrs) {
    return new Image(attrs);
};
var Image = mongoose_1.default.model("Image", imageSchema);
exports.Image = Image;
exports.default = Image;
