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
const User_1 = __importDefault(require("../models/User"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    // consulta
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findById(req.params.id).populate('posts');
            res.json({
                status: 200,
                usuario: user
            });
        });
    }
    // consulta
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.default.find();
            res.json({
                status: 200,
                usuarios: users
            });
        });
    }
    // creación usuario.
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new User_1.default(req.body);
            yield newUser.save();
            res.json({
                status: 200,
                usuarioCreado: newUser
            });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new User_1.default(req.body);
            const { id } = req.params;
            const user = yield User_1.default.findByIdAndRemove(id);
            res.json({
                status: 200,
                usuarioEliminado: user
            });
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new User_1.default(req.body);
            const { id } = req.params;
            const user = yield User_1.default.findByIdAndUpdate(id, req.body, { new: true });
            res.json({
                status: 200,
                usuarioActualizado: user
            });
        });
    }
    routes() {
        this.router.get('/', this.getUsers);
        this.router.get('/:id', this.getUser);
        this.router.post('/', this.createUser);
        this.router.delete('/:id', this.deleteUser);
        this.router.put('/:id', this.updateUser);
    }
}
const userRoutes = new UserRoutes();
userRoutes.routes();
exports.default = userRoutes.router;
