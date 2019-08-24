
function loggersStart  (req, res, next) {
  console.log("********************* data in headers *********************");
  console.log(req.headers);
  console.log("********************* data in headers Ends *********************");

  console.log("********************* data in req body *********************");
  console.log(req.body);
  console.log("********************* data in req body Ends *********************");

  next();
};

module.exports = loggersStart;