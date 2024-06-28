
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection=async()=>{
    const mongoDB_URI=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@file-sharing.z3pejvn.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`;
    try{
        await mongoose.connect(mongoDB_URI);
        console.log("database connected successfully");

    }
    catch(error){
        console.error("Error while connecting with the database",error.message)
    }
}

export default DBConnection;