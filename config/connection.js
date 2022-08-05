const Mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await Mongoose.connect("mongodb://127.0.0.1:27017/e-commerce", {
            useNewUrlParser: true,
            useUniFiedTopology: true,
        });
        console.log(`MongoDb Connected: ${connect.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;
