import { upsertStreamUser } from "../lib/Stream.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const Signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email is already exits, please use a different one",
      });
    }

    const idx = Math.floor(Math.random() * 100) + 1;
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

    const newUser = await User.create({
      fullName,
      email,
      password,
      profilePic: randomAvatar,
    });

    try {
      await upsertStreamUser({
        id: newUser._id.toString(),
        name: newUser.fullName,
        image: newUser.profilePic || "",
      });
      console.log(`Stream user create for ${newUser.fullName}`);
    } catch (error) {
      console.error("Error creating Stream user :", error);
    }

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(201).json({ sucess: true, user: newUser });
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ message: "Internel Server Error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invaild email or password" });

    const isPasswordCorrect = await user.matchPassword(password);
    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Invaild email or password" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({ sucess: true, user });
  } catch (error) {
    console.log("Error in Login controller", error.message);
    res.status(500).json({ message: "Internel Server Error" });
  }
};

export const Logout = async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ success: true, messsage: "logout successful" });
};

export const onboard = async (req, res) => {
  try {
    const userId = req.user._id;

    const { fullName, bio, nativeLanguage, learningLanguage, location } =
      req.body;

    if (
      !fullName ||
      !bio ||
      !nativeLanguage ||
      !learningLanguage ||
      !location
    ) {
      return res.status(400).json({
        message: "All fields required",
        missingFields: [
          !fullName && "fullName",
          !bio && "bio",
          !nativeLanguage && "nativeLanguage",
          !learningLanguage && "learningLanguage",
          !location && "location",
        ].filter(Boolean),
      });
    }

    const updateUser = await User.findByIdAndUpdate(
      userId,
      {
        ...req.body,
        isOnboarded: true,
      },
      { new: true }
    );

    if (!updateUser) return res.status(404).json({ message: "User not found" });

    try {
      await upsertStreamUser({
        id: updateUser._id.toString(),
        name: updateUser.fullName,
        image: updateUser.profilePic || "",
      });

      console.log(
        `Stream user updated after onboarding for ${updateUser.fullName}`
      );
    } catch (streamError) {
      console.log(
        "Error updating Stream user during onboarding : ",
        streamError.message
      );
    }

    res.status(200).json({ success: true, user: updateUser });
  } catch (error) {
    console.error("Onborading Error : ", error);
    res.status(500).json({ message: "Internel Server Error" });
  }
};
