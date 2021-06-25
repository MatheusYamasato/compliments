import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { TagController } from './controllers/TagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthUserController } from './controllers/AuthUserController'
import { ComplimentController } from './controllers/ComplimentController'
import { ensureAuth } from './middlewares/ensureAuth'
import { ListSendController } from './controllers/ListSendController'
import { ListReceiveController } from './controllers/ListReceiverController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

export const router = Router()

const userController = new UserController()
const tagController = new TagController()
const authController = new AuthUserController()
const complimentController = new ComplimentController()
const listSendController = new ListSendController()
const listReceiveController = new ListReceiveController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.post("/users", userController.handle)
router.get("/users", ensureAuth, listUsersController.handle)
router.post("/tags", ensureAuth ,ensureAdmin, tagController.handle)
router.post("/login", authController.handle)
router.post("/compliments", ensureAuth, complimentController.handle)
router.get("/users/compliments/send", ensureAuth, listSendController.handle)
router.get("/users/compliments/receive", ensureAuth, listReceiveController.handle)
router.get("/tags", ensureAuth, listTagsController.handle)