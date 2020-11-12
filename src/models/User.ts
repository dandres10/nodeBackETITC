import { Schema, model } from "mongoose";

const USchema = new Schema ({
        name: { type: String, required: true},
        email: { type: String, required: true},
        nickname: { type: String, required: true},
        avatar: { type: String, required: true, lowercase: true},
        createAt: { type: Date, default: Date.now},
        posts: [{
                type: Schema.Types.ObjectId,
                ref: "Post",
        }],       

});

export default model('User', USchema);