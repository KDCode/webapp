//Handellar
import PostMessage  from "../models/postMessages.js";  

//Cards showing
export const getPosts = async(req,res)=>{
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
//cards taking entry
export const createPost = async (req,res)=>{
    const body = req.body;

    const post =req.body;
    const newPost = new postMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message :error.message});
    }
}

 
