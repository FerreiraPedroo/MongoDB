const userModel = require("../Models/Mongodb/model");

const postController = {
  newUser: async (req, res, next) => {
    const newUserData = req.body;

    try {
      const userVerify = await userModel.find({ name: newUserData.name })
      if (userVerify.length > 0) {
        return next({ cod: "500", msg: "usuario ja cadastrado" });
      } else {
        const user = new userModel({
          isActive: newUserData.isActive,
          name: newUserData.name,
          img: newUserData.img,
          email: newUserData.email,
          about: newUserData.about,
          theme: newUserData.theme,
        });
        await user.save();
        console.log("#");
        console.log("# User save :", user);

        return res.status(200).send({ cod: "200", msg: "adicionado com sucesso" });
      }
    } catch (err) {
      console.log("# Erro > msg: ", err._message);
      return next({ cod: "500", msg: "erro tentar novamente" });
    }
  }
}

module.exports = postController;