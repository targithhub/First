const express =require("express");

const {
    getUserById,
   
  } = require("../../Controllers/User/UserController");
 
  const router = express.Router();

  router.get("/userby-id/:userId", getUserById);
module.exports = router;