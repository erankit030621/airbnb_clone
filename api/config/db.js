const mongoose = require('mongoose');

const connectWithDB = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.MONGO_URI,)
    .then(() => console.log(`DB connected successfully`)) // Fixed the .then() callback
    .catch((err) => {
      console.log(`DB connection failed`);
      console.error(err); // Changed to console.error for better visibility
      process.exit(1);
    });
};

module.exports = connectWithDB;