"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Post_1 = __importDefault(require("../models/Post"));
class PostRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield Post_1.default.find();
            res.json({ posts });
        });
    }
    getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const post = yield Post_1.default.findById(req.params.id);
            res.json(post);
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, url, content, image } = req.body;
            const newPost = new Post_1.default({ title, url, content, image });
            yield newPost.save();
            res.json({ status: res.status, data: newPost });
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const post = yield Post_1.default.findByIdAndUpdate(id, req.body, { new: true });
            res.json({ status: res.status, data: post });
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const post = yield Post_1.default.findByIdAndRemove(id);
            res.json({ status: 200,
                postEliminado: post
            });
        });
    }
    routes() {
        this.router.get('/', this.getPosts);
        this.router.get('/:id', this.getPost);
        this.router.post('/', this.createPost);
        this.router.put('/:id', this.updatePost);
        this.router.delete('/:id', this.deletePost);
    }
}
const postRoutes = new PostRouter();
exports.default = postRoutes.router;
