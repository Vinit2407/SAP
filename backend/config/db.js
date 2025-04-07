import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://username:idstring:projectname').then(()=>console.log("DB Connected"));
}


