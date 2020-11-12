import { Request, Response, Router } from 'express';

import User from "../models/User";


class UserRoutes {
    router: Router;

    constructor() {
        this.router = Router();
    }
    // consulta
    async getUser(req: Request, res: Response): Promise<void> {
        const user = await User.findById(req.params.id).populate('posts');
        res.json(
            {
                status: 200,
                usuario: user
            });
    }

    // consulta
    async getUsers(req: Request, res: Response): Promise<void> {
        const users = await User.find();
        res.json(
            {
                status: 200,
                usuarios: users
            });
    }

    // creación usuario.

    async createUser(req: Request, res: Response): Promise<void> {
        
        const newUser = new User(req.body);
        await newUser.save();
        res.json(
            {
                status: 200,
                usuarioCreado: newUser
            });

    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        const newUser = new User(req.body);
        const { id } = req.params
        const user = await User.findByIdAndRemove(id);
        res.json(
            {
                status: 200,
                usuarioEliminado: user
            });

    }

    async updateUser(req: Request, res: Response): Promise<void> {
        const newUser = new User(req.body);
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.json(
            {
                status: 200,
                usuarioActualizado: user
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

export default userRoutes.router; 