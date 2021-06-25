import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { TagController } from './controllers/TagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthUserController } from './controllers/AuthUserController'
import { ComplimentController } from './controllers/ComplimentController'

export const router = Router()

const userController = new UserController()
const tagController = new TagController()
const authController = new AuthUserController()
const complimentController = new ComplimentController()

router.post("/users", userController.handle)
router.post("/tags", ensureAdmin, tagController.handle)
router.post("/login", authController.handle)
router.post("/compliments", complimentController.handle)