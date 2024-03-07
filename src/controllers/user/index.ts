import { Request, Response } from 'express'
import { user } from '../../services'
import auth from '../auth'

const register = async (req: Request, res: Response) => {
    const { username, email, roleId, password } = req.body

    try {
        await user.createUser({ username, email, roleId, password })

        return res.status(201).json({ message: 'Usuário criado com sucesso' })
    } catch (e) {
        return res.status(500).send('Houve um erro inesperado ao criar o usuário')
    }
}

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const userLogin = await user.getUserByLogin({ email, password })

        if (!userLogin) {
            return res.status(404).send('Usuário não encontrado')
        }

        const token = auth.sign({
            id: userLogin.id,
            email: userLogin.email,
            username: userLogin.username,
            roleId: userLogin.roleId
        })

        const data = {
            username: userLogin.username,
            email: userLogin.email,
            token
        }

        return res.status(200).json(data)
    } catch (e) {
        return res.status(500).send('Houve um erro inesperado ao tentar fazer login')
    }
}

const updatePermission = async (req: Request, res: Response) => {
    const { permissions } = req.body
    const { id } = req.params

    try {
        await user.updatePermission({ id, permissions })

        return res.status(200).send('Permissões do usuário atualizadas com sucesso')
    } catch (error) {
        return res.status(500).send('Houve um erro ao atualizar as permissões do usuário')
    }
}

export default {
    register,
    login,
    updatePermission
}