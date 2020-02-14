import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
     firstName :{type:String},
     lastName : {type:String}
})

const userModel = mongoose.model('users',userSchema)
export {userSchema}