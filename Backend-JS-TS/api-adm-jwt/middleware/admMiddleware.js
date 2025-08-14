const jwt = require("jsonwebtoken");
const secretKey = "secret";

const admMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(400).json({ message:"Authorization required"})
  }

  try {
    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, secretKey);

    if(user.role !== "Administrator"){
        res.status(400).json({ massage: "Permission required"})
    }
    
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid Token"})
  }

};

module.exports = admMiddleware;
