import { Request, Response, NextFunction } from 'express'
import { user } from '../../services'
import { auth } from '../../controllers'
import { IToken } from '../../interfaces'

const isTokenCorrect = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    
    try {
        const token = auth.verify(String(authorization)) as IToken
        
        if (!token) {
            return res.status(404).send('Token inválido')
        } 

        const userData = await user.getUserByEmail(token.email)

        if (!userData) {
            return res.status(404).send('Usuário inválido')
        }

        switch (true) {
            case token.id != userData.id: return res.status(404).send('Usuário inválido')
            case token.username != userData.username: return res.status(404).send('Nome do usuário inválido')
            case token.roleId != userData.roleId: return res.status(404).send('Permissão inválida')
            default: return next()
        }
    } catch (e) {
        return res.status(500).send('Houve um erro no servidor')
    }
}

const isPermissions = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    const { email } = auth.verify(String(authorization)) as IToken
    const usr = await user.getUserByEmail(email)

    if (usr?.roleId != 0 && !usr?.permissions.includes('write')) {
        return res.status(409).send('Você não tem permissão para criar ou editar este conteúdo')
    } else if (usr?.roleId != 0 && !usr?.permissions.includes('read')) {
        return res.status(409).send('Você não tem permissão para ver este conteúdo')
    } else if (usr?.roleId != 0 && !usr?.permissions.includes('delete')) {
        return res.status(409).send('Você não tem permissão para deletar este conteúdo')
    }

    return next()
}

export default {
    isTokenCorrect,
    isPermissions
}