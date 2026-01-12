import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    viewer:{
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        message:{
            type: String,
            required: true,
        }

    }
})
export default userSchema