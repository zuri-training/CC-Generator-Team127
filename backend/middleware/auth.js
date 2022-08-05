const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log(authorization);
  //   checks if the user is authenticated
  if (authorization) {
    // gets the token of the user
    const token = authorization.slice(7, authorization.length); //Bearer xxxx
    // verifies the user token
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};

module.exports = auth;
