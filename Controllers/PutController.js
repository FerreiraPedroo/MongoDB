const userModel = require("../Models/Mongodb/model");

const PutController = {
  updateUser: async (req, res, next) => {
    const saveUserData = req.body;

    userModel.findByIdAndUpdate(saveUserData._id, { $set: saveUserData }, { new: true }, (err, result) => {
      if (!!err) return next({ cod: "500", msg: "não foi possivel efetuar a atualização" });
      return res.status(200).send({ cod: "200", msg: "atualizado com sucesso" });
    });
  }
}

module.exports = PutController;