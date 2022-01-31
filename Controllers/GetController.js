const userModel = require("../Models/Mongodb/model");

const GetController = {
  findAllUsers: async (req, res, next) => {
    userModel.find({}, (err, result) => {
      if (!!err) return next({ cod: "500", msg: "erro tentar novamente" });
      return res.status(200).send(result);
    });
  },

  findUserByName: async (req, res, next) => {
    userModel.find({ name: req.params.name }, (err, result) => {
      if (!!err) return next({ cod: "500", msg: "erro tentar novamente" });
      return res.send(result);
    });
  }

}

module.exports = GetController;