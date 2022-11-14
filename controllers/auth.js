import { db } from "../db/connect.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  //Check if the user exists
  const q = "SELECT * FROM users WHERE username=?";
  const params = [req.body.username];
  db.query(q, [params], (error, data) => {
    if (error) return res.status(500).json(error);
    if (data.length) return res.status(409).json("User already exists");
    //Create new user
    //Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,email,`password`,`name`) VALUE (?)";
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (error, data) => {
      if (error) return res.status(500).json(error);
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  //Check if the username exists
  const q = "SELECT * FROM users WHERE username=?";

  db.query(q, [req.body.username], (error, data) => {
    if (error) return res.status(500).json(error);
    if (data.length === 0) return res.status(404).json("User not found");

    const userPasswordDB = data[0].password;
    console.log({ userPasswordDB });
    //Check if the password is correct
    const checkPassword = bcrypt.compareSync(req.body.password, userPasswordDB);
    if (checkPassword) return res.status(200).json(data);

    return res.status(404).json("The password or username is incorrect");
  });
};

export const logout = (req, res) => {};
