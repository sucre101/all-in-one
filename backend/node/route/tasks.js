import { Router } from "express"
import {taskController} from "../controller/task.controller.js";

const router = new Router();

router.get('/', (req, res) => taskController(req, res).getAll());
router.get('/:id', (req, res) => taskController(req, res).getById());

export default router;