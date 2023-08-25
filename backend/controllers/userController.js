import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc   auth user and get token
//@route  POST/api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
    res.send('auth user');
})

//@desc   Register user
//@route  POST/api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
})

//@desc   Logout user / clear cookies
//@route  POST/api/users/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('Logout user')
})

//@desc    Get user profile
//@route   GET/api/users/profile
//@access  Public
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
})

//@desc    Update user profile
//@route   PUT/api/users/profile
//@access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile')
})

//@desc    Get users
//@route   GET/api/users
//@access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users')
})

//@desc    Get user by ID
//@route   GET/api/users/:id
//@access  Private/Admin
const getUserByID= asyncHandler(async (req, res) => {
    res.send('get user by ID')
})

//@desc    Delete users
//@route   DELETE/api/users
//@access  Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
    res.send('delete users')
})

//@desc    update user
//@route   PUT/api/users/:id
//@access  Private/Admin
const updateUser= asyncHandler(async (req, res) => {
    res.send('update user')
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUsers,
    getUserByID,
    getUserProfile,
    updateUser,
    updateUserProfile,
    deleteUsers,
}