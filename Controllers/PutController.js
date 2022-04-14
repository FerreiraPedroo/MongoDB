const userModel = require("../Models/Mongodb/model");

const putController = {
  updateUser: async (req, res, next) => {
    const saveUserData = req.body;

    userModel.findByIdAndUpdate(saveUserData._id, { $set: saveUserData }, { new: true }, (err, result) => {
      if (!!err) return next({ cod: "500", msg: "não foi possivel efetuar a atualização" });
      console.log(`# ${req.method} > ${req.url} > body: '${JSON.stringify(req.body).substr(0,120)}' | 'msg resp: '{ cod: "200", msg: "adicionado com sucesso" }'`);
      return res.status(200).send({ cod: "200", msg: "atualizado com sucesso" });
    });
  }
}

module.exports = putController;