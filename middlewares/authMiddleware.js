// import JWT from "jsonwebtoken";
// import userModel from "../models/userModel.js";

// //Protected Routes token base
// export const requireSignIn = async (req, res, next) => {
//   try {
//     const decode = JWT.verify(
//       req.headers.authorization,
//       process.env.JWT_SECRET
//     );
//     req.user = decode;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// //admin acceess
// export const isAdmin = async (req, res, next) => {
//   try {
//     const user = await userModel.findById(req.user._id);
//     if (user.role !== 1) {
//       return res.status(401).send({
//         success: false,
//         message: "UnAuthorized Access",
//       });
//     } else {
//       next();
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(401).send({
//       success: false,
//       error,
//       message: "Error in admin middelware",
//     });
//   }
// };

// import JWT from "jsonwebtoken";
// import userModel from "../models/userModel.js";

// const jwtSecret = process.env.JWT_SECRET || "default-secret-key";

// // Protected Routes token-based
// export const requireSignIn = async (req, res, next) => {
//   console.log(req.headers.Authorization);
//   console.log(req.body.token);
//   try {
//     const decode = JWT.verify(req.headers.Authorization, jwtSecret);
//     req.user = decode;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({
//       success: false,
//       message: "Unauthorized. Invalid token.",
//     });
//   }
// };

// // Admin access
// export const isAdmin = async (req, res, next) => {
//   try {
//     const userId = req.user?._id;

//     if (!userId) {
//       return res.status(401).send({
//         success: false,
//         message: "Unauthorized Access. User not found.",
//       });
//     }

//     const user = await userModel.findById(userId);

//     if (user.role !== 1) {
//       return res.status(401).send({
//         success: false,
//         message: "Unauthorized Access. User is not an admin.",
//       });
//     }

//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).send({
//       success: false,
//       error: error.message,
//       message: "Error in admin middleware.",
//     });
//   }
// };

//aqib

// import JWT from "jsonwebtoken";
// import userModel from "../models/userModel.js";

// //Protected Routes token base
// export const requireSignIn = async (req, res, next) => {
//   try {
//     const decode = JWT.verify(
//       req.headers.authorization,
//       process.env.JWT_SECRET
//     );
//     req.user = decode;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const jwtSecret = process.env.JWT_SECRET;

// // // Protected Routes token-based
// // export const requireSignIn = async (req, res, next) => {
// //   try {
// //     const authHeader = req.headers.authorization;

// //     if (!authHeader || !authHeader.startsWith("Bearer")) {
// //       return res.status(401).json({
// //         success: false,
// //         message: "Unauthorized. Token not provided.",
// //       });
// //     }

// //     const token = authHeader.split(" ")[1];
// //     console.log({ token });
// //     const decode = jwt.verify(token, "HSYgm3xj");
// //     req.user = decode;
// //     next();
// //   } catch (error) {
// //     console.error(error);
// //     res.status(401).json({
// //       success: false,
// //       message: "Unauthorized. Invalid token.",
// //     });
// //   }
// // };

// // Admin access
// export const isAdmin = async (req, res, next) => {
//   try {
//     const userId = req.user?._id;
//     console.log(`this is user id ${userId}`);

//     if (!userId) {
//       return res.status(401).send({
//         success: false,
//         message: "Unauthorized Access. User not found.",
//       });
//     }

//     const user = await userModel.findById(userId);

//     if (!user || user.role !== 1) {
//       return res.status(401).send({
//         success: false,
//         message: "Unauthorized Access. User is not an admin.",
//       });
//     }

//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).send({
//       success: false,
//       error: error.message,
//       message: "Error in admin middleware.",
//     });
//   }
// };

//sheroz

import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const userId = req.user?._id;
    console.log(` this is user id  ${userId}`);
    const user = await userModel.findById(userId);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
