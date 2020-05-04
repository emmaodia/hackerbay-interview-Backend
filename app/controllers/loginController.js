const JWT = require('jsonwebtoken');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username && password !== '') {
      const token = JWT.sign(
        { username },
        'RANDOM_TOKEN_SECRET',
        { expiresIn: '1h' },
      );

      return res.json({
        status: 'success',
        token,
      });
    }

    return res.status(400);
  } catch (error) {
    res.status(500).json({
      status: error,
    });
    return error;
  }
};
