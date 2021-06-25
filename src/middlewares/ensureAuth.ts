import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export function ensureAuth(req: Request, res: Response, next: NextFunction) {
    // Primeiro, receber o token
    const authtoken = req.headers.authorization

    if(!authtoken) return res.status(401).end()

    const [ , token] = authtoken.split(" ") 

    try {
        const { sub } = verify(token, "f75e081cfac2563a78e1a2b07b66c99f") as IPayLoad
        
        req.user_id = sub
        
        return next()
    } catch(e) {
        return res.status(401).end()
    }
    // Token está preenchido?
    
    // Token está valido?
    

}