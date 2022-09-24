const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
const { headers: { authorization } } = req;

if (!authorization) {
 return res.status(401).json({
  message: 'Token not found',
}); 
}

try {
  const payload = jwt.verify(authorization);
  req.user = payload;
  return next();
} catch (error) {
  return res.status(401).json({
    message: 'Expired or invalid token',
  });
}
};

module.exports = validateToken;