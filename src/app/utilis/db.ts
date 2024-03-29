// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     if (mongoose.connections[0].readyState) {
//       console.log('Already connected to MongoDB');
//       return;
//     }

//     const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname';

//     mongoose.connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }).then(() => {
//         console.log('Connection Success');
//       }).catch((e) => {
//         console.log(e);
//       })

//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// export default connectDB;
