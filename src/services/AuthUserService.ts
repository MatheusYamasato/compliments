import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

interface IAuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({email, password}: IAuthRequest) {
        const usersRepository = getCustomRepository(UsersRepository)

        const user = await usersRepository.findOne({email})

        if(!user) throw new Error("Email/Password Incorrect")

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) throw new Error("Email/Password Incorrect")
    
        /* gerando o token do WEBToken
            1º param = algum dado, por exemplo o email
            2º param = chave secreta que tem de ser gerada pelo MD5 Hash
            3º param = definir quando expira e definindo o subject
        */
        const token = sign({
            email: user.email
        }, "f75e081cfac2563a78e1a2b07b66c99f", {
            subject: user.id,
            expiresIn: "1d"
        })
        
    }

}

export { AuthUserService }