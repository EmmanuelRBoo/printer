import { Request, Response, NextFunction } from 'express'
import { user } from '../../services'

const isEmailNotExist = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body

    try {
        const userLogin = await user.getUserByEmail(email)
        
        if (!userLogin) {
            return res.status(404).send('Email inserido está errado ou não existe')
        }

        return next()
    } catch (e){
        return res.status(500).send('Houve um erro no servidor')
    }
}

const isEmailAlreadyExist = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body

    try {
        const userLogin = await user.getUserByEmail(email)
        
        if (userLogin) {
            return res.status(409).send('Email inserido já está cadastrado')
        }

        return next()
    } catch (e) {
        return res.status(500).send('Houve um erro no servidor')
    }
}

const isValidPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    try {
        const userLogin = await user.getUserByEmail(email)

        if (userLogin?.password != password) {
            return res.status(401).send('Senha inválida')
        }

        return next()
    } catch {
        return res.status(500).send('Houve um erro no servidor')
    }
}

export default {
    isEmailNotExist,
    isEmailAlreadyExist,
    isValidPassword
}