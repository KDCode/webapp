import mongoose from 'mongoose';

//Dynamic cards from database
const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Number,
        default:new Date()
    },
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;

