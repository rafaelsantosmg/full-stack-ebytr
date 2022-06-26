module.exports = (schemas) => (req, res, next) => {
  const { error } = schemas.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
