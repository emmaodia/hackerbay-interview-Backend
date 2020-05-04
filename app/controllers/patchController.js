const PATCH = require('fast-json-patch');

// eslint-disable-next-line consistent-return
module.exports = async (req, res) => {
  try {
    const { document, patch } = req.body;
    if (document !== '' && document !== null) {
      const response = PATCH.applyPatch(document, patch).newDocument;

      return res.json({
        status: 'success',
        response,
      });
    }

    return res.status(400);
  } catch (error) {
    res.status(500).json(error);
  }
};
