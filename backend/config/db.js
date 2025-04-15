import mongoose from "mongoose";
import dotenv from 'dotenv';

// load variabel yang ada didefinisikan di file .env ke process.env, jadi bisa digunakan dengan contoh nya "process.env.NAMA_VARIABEL_DI_FILE_DOTENV"
dotenv.config();

// connect ke database
export const connectDB = async ()=>{
    try {
        // connect ke database menggunakan string yang ada di .env
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 artinya exit with failure, kalau 0 artinya success
    }
}