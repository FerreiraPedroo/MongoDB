const mongoose = require("mongoose");

const optionsMongoDB = {
  serverSelectionTimeoutMS: 2000,
  heartbeatFrequencyMS: 5000
};

const databaseConection = () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, optionsMongoDB);
    console.log(`# MongodbDB conected... host:'${mongoose.connections[0].host}' | port:'${mongoose.connections[0].port}' | db name:'${mongoose.connections[0].name}'`);
  } catch (error) {
    console.log("#");
    console.log("# Não foi possivel estabelecer conexão com o MongodbDB ...");
  }
}

module.exports = databaseConection;