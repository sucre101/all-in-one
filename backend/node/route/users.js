import express from "express";
import {
    all as getUsers,
    get as getUser,
    put as addUser,
    patch as updateUser,
    remove as deleteUser,
} from '../controller/user.controller.js'

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/', addUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser)

export default router;