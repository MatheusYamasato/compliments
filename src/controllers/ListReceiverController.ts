import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";


class ListReceiveController {
    async handle(req: Request, res: Response) {
        const { user_id } = req
        
        const listUserReceiverComplimentsService = new ListUserReceiveComplimentsService()

        const compliments = await listUserReceiverComplimentsService.execute(user_id)

        return res.json(compliments)
    }
}

export { ListReceiveController }