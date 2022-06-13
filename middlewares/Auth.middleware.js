const jwt = require('jsonwebtoken');

module.exports.authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json('Токен яц х1окх чохь');
  }
  const [type, token] = authorization.split(' ');

  if (type !== 'Bearer') {
    res.status(401).json('Неверный тип токена');
  }
  try {
    req.user = await jwt.verify(token, process.env.SECRET_JWT_KEY);

    next();
  }
  catch (e) {
    return res.status(401).json('Неверный токен');
  }
};
