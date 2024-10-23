import userManager from "../../data/mongo/managers/user.mongo.js";


async function readAllUsers(req, res, next) {
    try {
      let { role } = req.query;
      let users;
      if (role) {
        users = await userManager.readAll({role});
      } else {
        users = await userManager.readAll();
      }
      if (users.length > 0) {
        return res.status(200).json({ message: "Operational users", users });
      } else {
        return res
          .status(404)
          .json({ message: "There are no users with that role" });
      }
    } catch (error) {
      return next(error);
    }
  }
  
  
  async function readOneUsers(req, res, next) {
    try {
      const { id } = req.params;
      const users = await userManager.read(id);
      if (users) {
        return res.status(200).json({ message: "User found", users });
      } else {
        return res.status(200).json({ message: "User not found" });
      }
    } catch (error) {
      return next(error);
    }
  }
  
  async function createUsers(req, res, next) {
    try {
      const users = req.body;
      const responseManager = await userManager.create(users);
      const readAllUsers = await userManager.readAll();
      return res.status(201).json({
        readAllUsers
      });
    } catch (error) {
      return next(error);
    }
  }
  
  async function updateUsers(req, res, next) {
    try {
      const { id } = req.params;
      const upUsers = req.body;
      const responseManager = await userManager.update(id, upUsers);
      if (!responseManager) {
        return res.status(404).json({ message: "User not found" });
      }

      const updateUser = await userManager.read(id)
      return res.status(200).json({
        updateUser
      });
    } catch (error) {
      return next(error);
    }
  }
  
  async function destroyUser(req, res, next) {
    try {
      const { id } = req.params;
      const responseManager = await userManager.delete(id);
      if (responseManager) {
        return res.status(200).json({
          message: responseManager.message,
          id: responseManager.id,
        });
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      return next(error);
    }
  }
  
  
  export {
    readAllUsers,
    readOneUsers,
    createUsers,
    updateUsers,
    destroyUser,
  };