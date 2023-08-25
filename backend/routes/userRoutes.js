import express from "express";
const router = express.Router();
import {
    authUser,
    registerUser,
    logoutUser,
    getUsers,
    getUserByID,
    getUserProfile,
    updateUser,
    updateUserProfile,
    deleteUsers,
} from "../controllers/userController.js";

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUsers).get(getUserByID).put(updateUser);

export default router;