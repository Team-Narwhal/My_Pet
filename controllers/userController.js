const { User, Pet } = require("../models");

// Gets all Users with their Pet array from pet_db
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      include: [
        {
          model: Pet,
        },
      ],
    });

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("userController.js getAllUsers()", error);
    res.status(500).json({ error });
  }
};

const signUp = async (req, res) => {
  try {
    // { email: 'becky@gmail.com', password: 'password' }
    const newUser = await User.create(req.body);
    req.session.save(() => {
      req.session.user = newUser;
      req.session.isLoggedIn = true;
      res.json(newUser);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const signIn = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!existingUser) {
      return res.status(401).json({ error: "Your Credentials are not valid" });
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ error: "Your Password doesnot match" });
    }
    req.session.save(() => {
      req.session.user = existingUser;
      req.session.isLoggedIn = true;
      res.json({ sucess: true });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
const signOut = async (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      res.json({ success: true });
    });
  }
};

module.exports = {
  getAllUsers,
  signIn,
  signUp,
  signOut,
};
