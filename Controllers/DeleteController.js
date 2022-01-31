const userModel = require("../Models/Mongodb/model");

const DeleteController = {
  deleteUser: (req, res, next) => {
    const deleteUserId = req.body._id;
    userModel.findByIdAndRemove({ _id: deleteUserId }, (err, result) => {
      if (!!err) return next({ cod: "500", msg: "não foi possiver deletar" });
      return res.status(200).send({ cod: "200", msg: "deletado com sucesso" });
    })
  }
}

module.exports = DeleteController;