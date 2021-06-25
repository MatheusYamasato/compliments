import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

class UserController {
    async handle(req: Request, res: Response) {
        try {
            const { name, email, admin, password } = req.body
            const createUsersService = new CreateUserService()
            const user = await createUsersService.execute({name, email, admin, password})
            return res.json(user)
        } catch (e) {
            return res.status(404).json({ error: e.message})
        }

    }

}

export { UserController }