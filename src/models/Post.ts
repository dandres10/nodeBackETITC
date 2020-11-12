import {​​​​​ Schema, model }​​​​​ from "mongoose";

const PostSchema = new Schema({​​​​​
                
        title: {​​​​​ type: String, required: true }​​​​​,
        url: {​​​​​ type: String, required: true }​​​​​,
        content: {​​​​​ type: String, required: true }​​​​​,
        image: {​​​​​ type: String }​​​​​,
        createdAt: {​​​​​ type: Date, default: Date.now }​​​​​,
        updateAt: {​​​​​ type: Date, default: Date.now }​​​​​

}​​​​​);
export default model("Post", PostSchema);