const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users);
    } catch (e) {
      res.json(e);
    }
  }, registerUser: async (req, res) => {
    try {
      const {
        login,
        password,
        name,
      } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({
        login: login,
        password: hash,
        name: name,
      });

      res.json(user);
    } catch (e) {
      return res.status(400).json({
        error: "Ошибка при регистрации." + e,
      });
    }
  },
  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      const user = await User.findOne({ login });
      if (!user) {
        return res.status(401).json({
          error: "Неверный логин",
        });
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return res.status(401).json({
          error: "Неверный пароль",
        });
      }

      const payload = {
        id: user._id,
        login: user.login,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });
      res.json({
        token,
        userId: user._id,
      });
    } catch (e) {
      res.json(e);
    }
  },
};
