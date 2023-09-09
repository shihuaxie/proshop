import express from "express";
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

import {protect, admin} from "../middleware/authMiddleware.js";

const router = express.Router();

router.route('/')
    .post(registerUser)
    .get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router.route('/:id')
    .delete(protect, admin, deleteUsers)
    .get(protect, admin, getUserByID)
    .put(protect, admin, updateUser);

export default router;