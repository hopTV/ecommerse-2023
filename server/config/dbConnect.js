const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOOSE_URI);
    if (connect.connection.readyState === 1) {
      console.log("connect success!");
    } else {
      console.log("connect faile");
    }
  } catch (err) {
    console.log("db connection is failed");
    throw new Error(err);
  }
};

module.exports = dbConnect;
