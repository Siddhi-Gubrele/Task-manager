const mongoose = require("mongoose");

// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("connected to the database...");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }); // returning a promise
};

module.exports = connectDB;
