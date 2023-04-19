const calc = async (req, res) => {
  try {
    return res.status(200).json({ success: 'yes', message: 'done' });
  } catch (error) {
    return res.status(400).json({ success: 'no', message: 'fail' });
  }
};

module.exports = { calc };
