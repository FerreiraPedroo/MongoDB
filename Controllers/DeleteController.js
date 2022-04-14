const userModel = require("../Models/Mongodb/model");

const deleteController = {
  deleteUser: (req, res, next) => {
    const deleteUserId = req.body._id;
    userModel.findByIdAndRemove({ _id: deleteUserId }, (err, result) => {
      if (!!err) return next({ cod: "500", msg: "não foi possiver deletar" });

      console.log(`# ${req.method} > ${req.url} > body: '${JSON.stringify(req.body).substr(0,120)}'`);
      return res.status(200).send({ cod: "200", msg: "deletado com sucesso" });
    })
  }
}

module.exports = deleteController;