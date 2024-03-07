import { Request, Response, NextFunction } from 'express'
import { folder } from '../../services'

const isAlreadyExistRelation = async (req: Request, res: Response, next: NextFunction) => {
    const { userId, folderId } = req.body

    try {
        const hasRelation = await folder.getShareFolder({ folderId, userId })

        if (hasRelation.length > 0) {
            return res.status(409).send('Você já compartilhou esta pasta com este usuário')
        }

        next()
    } catch (e) {
        return res.status(500).send('Houve um erro no servidor')
    }
}

export default {
    isAlreadyExistRelation
}