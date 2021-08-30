// returns a new anonymous function called when the route is landed on
module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => next(err));
};
