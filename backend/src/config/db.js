import mongoose from "mongoose"
import { ENV }  from "./env"

export const connectDB = async ()=> {
    try{
        await mongoose.connect(ENV.MONGODB_URL)
        console.log(`MongoDB conected sucessfully!`)

    }catch(error){
        console.error(`error connecting to MongoDB`)
    process.exit(1)
    }
}