import express from "express";
import {registerController, getAllUsers, loginController} from "../controllers/userController";

const router = express.Router();

// Get All Users
router.get("/allUsers", getAllUsers);

//User Regristration
router.post("/register", registerController);

//User Login
router.post("/login", loginController);

export default router;