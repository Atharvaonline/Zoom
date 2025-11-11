import httpStatus from "http-status";
import {User} from "../models/user.model.js";
import bcrypt , {hash} from "bcrypt";

import crypto from "crypto"

// POST /auth/login
 const login = async (req, res) => {
  try {
    const { username, password } = req.body || {};

    if (!username || !password) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "username and password are required" });
    }

    const user = await User.findOne({ username });
    // Use a generic message to avoid user enumeration
    if (!user) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ message: "Invalid credentials" });
    }

    // Simple random token (consider JWT instead)
    const token = crypto.randomBytes(32).toString("hex");
    user.token = token; // make sure your schema has `token: String`
    await user.save();

    return res.status(httpStatus.OK).json({ token });
  } catch (e) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `Something went wrong: ${e.message}` });
  }
};


const register = async (req, res) => {
    const {name, username, password } = req.body;

try {
    const existingUser = await User.findOne({username});
    if (existingUser) {
        return res.status(httpStatus.FOUND).json({message: "Username already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name: name,
        username: username,
        password: hashedPassword
    });

    await newUser.save();

    res.status(httpStatus.CREATED).json({message: "User registered "})

} catch (e){
    res.json({message: `Something went wrong ${e.message}`});
}

}

export {login, register};