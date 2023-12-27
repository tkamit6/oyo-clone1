import mongoose from "mongoose";

export const connectDb = async ()=>{
    await mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    console.log('db connectd')
}
