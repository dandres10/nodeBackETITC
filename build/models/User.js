"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const USchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    nickname: { type: String, required: true },
    avatar: { type: String, required: true, lowercase: true },
    createAt: { type: Date, default: Date.now },
    posts: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Post",
        }],
});
exports.default = mongoose_1.model('User', USchema);
