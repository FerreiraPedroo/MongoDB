const userModel = require("../Models/Mongodb/model");

const PostController = {
  newUser: async (req, res, next) => {
    const newUserData = req.body;
    const user = new userModel({
      isActive: newUserData.isActive,
      name: newUserData.name,
      img: newUserData.img,
      email: newUserData.email,
      about: newUserData.about,
      theme: newUserData.theme,
    });

    try {
      await user.save();
      console.log(user);
      return res.send({ cod: "200", msg: "adicionado com sucesso" });

    } catch (err) {
      console.log("# Erro > msg: ", err._message);
      return next({ cod: "500", msg: "erro tentar novamente" });
    }
  }
}

module.exports = PostController;