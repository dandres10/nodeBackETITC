"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//const mongo_uri = 'mongodb://localhost/dbetitc';
const mongo_uri = 'mongodb+srv://1Sistemas:<1Sistemas>@cluster0.k3y8i.mongodb.net/<1Sistemas>?retryWrites=true&w=majority';
mongoose_1.default.connect(mongo_uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
