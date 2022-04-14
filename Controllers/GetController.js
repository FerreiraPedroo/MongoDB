const userModel = require("../Models/Mongodb/model");

const getController = {
  findAllUsers: async (req, res, next) => {
    userModel.find({}, (err, result) => {
      if (!!err) return next({ cod: "500", msg: "erro tentar novamente" });
      console.log(`# ${req.method} > ${req.url} > body: '${JSON.stringify(req.body).substr(0,120)}' | msg resp: ${JSON.stringify(result).substr(0,120)} . . .'`);    
      return res.status(200).send(result);
    });
  },

  findUserByName: async (req, res, next) => {
    userModel.find({ name: req.params.name }, (err, result) => {
      if (!!err) return next({ cod: "500", msg: "erro tentar novamente" });
      console.log(`# ${req.method} > ${req.url} > body: '${JSON.stringify(req.body).substr(0,120)}' | msg resp: ${JSON.stringify(result).substr(0,120)} . . .'`);
      return res.status(200).send(result);
    });
  }

}

module.exports = getController;