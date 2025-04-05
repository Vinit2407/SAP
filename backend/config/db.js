import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vinitpatel24:XzOufKiiB4W4bCPb@cluster0.uj5mvvc.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}


