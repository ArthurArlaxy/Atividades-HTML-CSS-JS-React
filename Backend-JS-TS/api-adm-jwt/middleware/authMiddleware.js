const jwt = require("jsonwebtoken");
const secretKey = "secret";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    req.authenticatedUser = "Visitante";
    next()
  }

  try {
    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, secretKey);

    req.authenticatedUser = user;
    
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid Token"})
  }

};

module.exports = authMiddleware;
