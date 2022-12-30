"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Links = void 0;
var mongoose_1 = require("mongoose");
var LinkSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "linked ner oruulna uu!"]
    },
    userName: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: [true, "linkee zaawal oruulna uu!"]
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        refs: 'User',
        required: true
    },
    isHide: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.Links = (0, mongoose_1.model)('Link', LinkSchema);
//# sourceMappingURL=Link.js.map