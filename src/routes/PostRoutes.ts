import {​​​​​ Router, Request, Response }​​​​​ from 'express';
import Post from '../models/Post';

class PostRouter {​​​​​
            router: Router;
            constructor() {​​​​​
            this.router = Router();
            this.routes();
        }​​​​​
        public async getPosts(req: Request, res: Response): Promise<void> {​​​​​
            const posts = await Post.find();
            res.json({​​​​​ posts }​​​​​);
        }​​​​​

        public async getPost(req: Request, res: Response): Promise<void> {
            ​​​​​console.log(req.params.id)
            const post = await Post.findById(req.params.id);
            res.json(post);
        }​​​​​

        public async createPost(req: Request, res: Response): Promise<void>{​​​​​
            const {​​​​​ title, url, content, image }​​​​​ = req.body;
            const newPost= new Post({​​​​​title, url, content, image}​​​​​);
            await newPost.save();
            res.json({​​​​​status: res.status, data: newPost}​​​​​);
        }​​​​​

        public async updatePost(req: Request, res: Response): Promise<void>{​​​​​
            const {​​​​​ id }​​​​​ = req.params;
            const post = await Post.findByIdAndUpdate(id, req.body, {​​​​​new: true}​​​​​);
            res.json({​​​​​status: res.status, data: post}​​​​​);
        }​​​​​

        public async deletePost(req: Request, res: Response): Promise<void> {​​​​​
            const {​​​​​ id }​​​​​ = req.params;
            const post = await Post.findByIdAndRemove(id);
            res.json(
                { status: 200,
                    postEliminado: post
                });
        }​​​​​

        routes() {​​​​​
            this.router.get('/', this.getPosts);
            this.router.get('/:id', this.getPost);
            this.router.post('/', this.createPost);
            this.router.put('/:id', this.updatePost);
            this.router.delete('/:id', this.deletePost);
        }​​​​​
}​​​​​
const postRoutes = new PostRouter();
export default postRoutes.router;