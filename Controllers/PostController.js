const model = require("../Models/Mongodb/model");
const userModel = model.user();

const PostController = {
  user: async (req, res, next) => {
    const newUserData = req.body;
    const user = new userModel({
      isActive: newUserData.isActive,
      name: newUserData.name,
      age: newUserData.age.length >= 3 ? newUserData.age.slice(0, 2) : newUserData.age,
      img: newUserData.img,
      email: newUserData.email,
      country: newUserData.country,
      address: newUserData.address,
      about: newUserData.about,
      theme: newUserData.theme,
      comments: JSON.parse(newUserData.comments)
    });

    try {
      await user.save();
      console.log(user);
      res.send({ cod: "200", msg: "adicionado com sucesso" });
    } catch (err) {
      next({ cod: "500", msg: "erro tentar novamente" });
    }
  }
}

module.exports = PostController;