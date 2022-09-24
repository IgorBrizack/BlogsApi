const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const validateToken = (req, res, next) => {
const { headers: { authorization } } = req;

console.log(authorization);

if (!authorization) {
 return res.status(401).json({
  message: 'Token not found',
}); 
}

try {
  const payload = jwt.verify(authorization, secret);
  console.log(payload);
  req.user = payload;
  return next();
} catch (error) {
  return res.status(401).json({
    message: 'Expired or invalid token',
  });
}
};

module.exports = validateToken;