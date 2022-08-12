const jwt = require('jsonwebtoken');

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  // console.log(authorization);
  if (authorization) {
    const token = authorization.slice(7, authorization.length); //Bearer xxxx
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
