import jwt from "jsonwebtoken";

// Middleware to check JWT token and roles
export const authenticateToken =
  (requiredRoles = []) =>
  (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Expected: "Bearer <token>"
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "Access denied. No token provided.",
        success: false,
      });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user data to the request
      req.user = decoded;

      // Check for roles if required
      if (requiredRoles.length > 0 && !requiredRoles.includes(decoded.role)) {
        return res.status(403).json({
          status: 403,
          message: "Access denied. Insufficient permissions.",
          success: false,
        });
      }

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      return res.status(401).json({
        status: 401,
        message: "Invalid token.",
        success: false,
      });
    }
  };
