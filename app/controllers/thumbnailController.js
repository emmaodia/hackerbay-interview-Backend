const JIMP = require('jimp');

module.exports = async (req, res) => {
  try {
    const { url } = req.body;

    const image = await JIMP.read(url);

    image.resize(50, 50)
      .getBase64(JIMP.AUTO, (e, img64) => res.send(`<img src="${img64}"/>`));

    res.status(200).json({ status: 'success', image });
  } catch (error) {
    res.status(500).json(error);
  }
};
