// import mongoose from "mongoose";

// const connectMongoDB = async () => {
//   try{
// await mongoose.connect(process.env.MONGODB_URI);
// console.log("connected to mongodb");
//   } catch (error){
//     console.log(error)  
//   }
// };
// export default connectMongoDB


import mongoose from "mongoose";

export const connectMongoDB = async () => {

await mongoose.connect(process.env.MONGODB_URI);
console.log("connected to mongodb");
  // } catch (error){
  //   console.log(error)  
  // }
};






















// import mongoose from "mongoose";

// const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 30000, // Optional: increase if needed
//       socketTimeoutMS: 45000,          // Optional: increase if needed
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// export default connectMongoDB;
