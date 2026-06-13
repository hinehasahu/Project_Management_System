import { UserModel } from "../models/userModel.js";

export const refreshAccessToken = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      return res.status(401).json({
        message: "No refresh token",
      });
    }

    jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) {
          return res.status(403).json({
            message: "Invalid refresh token",
          });
        }

        const user = await UserModel.findById(decoded.id);

        if (!user || user.refreshToken !== token) {
          return res.status(403).json({
            message: "Unauthorized",
          });
        }

        const accessToken = generateAccessToken(user);

        res.status(200).json({
          accessToken,
        });
      },
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
    console.log(error);
  }
};
