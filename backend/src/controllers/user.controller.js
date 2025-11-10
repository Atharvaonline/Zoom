import httpStatus from "http-status";
import {user} from "../models/user.model.js";
import bcrypt , {hash} from "bcrypt";



const register = (req, res) => {
    const {name, username, password } = req.body;

try {
    const existingUser = await user.findOne({username});
    if (existingUser) {
        return res.status(httpStatus.CONFLICT).json({message: "Username already exists"});
    }

    const hashedPassword = await bcrypt.hash(password);

    const newUser = new user({
        name: name
        username: username,
        password: hashedPassword
    });

    await newUser.save();

    res.status(httpStatus.CREATED).json({message: "User registered "})

} catch (e){
    res.json({message: 'Somthing went wrong ${e}'});
}

}

