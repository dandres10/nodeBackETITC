import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/UserRoutes';
import postRoutes from './routes/PostRoutes';
import cors from 'cors';

class Server{
    public app : express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(){
        
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({​​​​​extended: false}​​​​​));
        this.app.use(cors());

    }
    routes(){
        this.app.use('/api/users',userRoutes);  
        this.app.use('/api/posts',postRoutes);        

    }
    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log('server on port', this.app.get('port')); 
        });
    }
}

export {​​​​​ Server }​​​​​;

