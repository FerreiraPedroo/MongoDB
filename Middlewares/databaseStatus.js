const mongoose = require("mongoose");

const databaseStatus = async (req, res, next) => {

  mongoose.connection.on("error", (err) => {
    logError(err)
  })


}

module.exports = databaseStatus