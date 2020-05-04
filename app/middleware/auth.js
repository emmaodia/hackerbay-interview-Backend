const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const { username } = decodedToken;
    if (req.body.username && req.body.username !== username) {
      res.json('Invalid Token');
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: new Error('Invalid request!'),
    });
  }
};
