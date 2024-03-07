import { Request, Response } from 'express'
import { folder, admin } from '../../services'

const getFolders = async (req: Request, res: Response) => {
    const { userId, createdAt, roleId } = req.body

    try {
        const data = roleId == 0 ? await admin.getAdminFolders() : await folder.getFolders({ createdAt, userId })

        return res.status(200).json({ data, message: 'Carregada com sucesso' })
    } catch (e) {
        return res.status(500).send('Houve um erro ao tentar criar a pasta')
    }
}

const createFolder = async (req: Request, res: Response) => {
    const { owner, title } = req.body

    try {
        await folder.createFolder({ owner, title })

        return res.status(201).json({ message: 'Pasta criada com sucesso' })
    } catch (e) {
        return res.status(500).send('Houve um erro ao tentar criar a pasta')
    }
}

const updateFolderTitle = async (req: Request, res: Response) => {
    const { title } = req.body
    const { id } = req.params

    try {
        await folder.updateFolderTitle({ title, id })

        return res.status(200).json({ message: 'Título da pasta atualizado com sucesso' })
    } catch (e) {
        return res.status(500).send('Houve um erro ao tentar atualizar o título da pasta')
    }
}

const shareFolder = async (req: Request, res: Response) => {
    const { userId, folderId } = req.body

    try {
        await folder.shareFolder({ folderId, userId })

        return res.status(201).json({ message: 'Pasta compartilhada com sucesso' })
    } catch (e) {
        return res.status(500).send('Houve um erro ao tentar compartilhar a pasta')
    }
}

const removeFolder = async (req: Request, res: Response) => {
    const  { id } = req.params
    
    try {
        await folder.removeFolder(id)

        return res.status(204).json({ message: 'Pasta removida com sucesso' })
    } catch (e) {
        return res.status(500).send('Houve um erro ao tentar remover a pasta')
    }
}

const getShareFolder = async (req: Request, res: Response) => {
    const { userId, folderId } = req.body

    try {
        const data = await  folder.getShareFolder({ userId, folderId })

        return res.status(200).json({ data, message: 'Pastas carregadas com sucesso' })
    } catch (e) {
        return res.status(500).send('Houve um erro ao tentar carregar as pastas compartilhadas')
    }
}

const removeShareFolder = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        await folder.removeShareFolder(id)

        return res.status(204).json({ message: 'Compartilhamento removido com sucesso' })
    } catch (e) {
        return res.status(500).send('Houve um erro ao tentar remover o compartilhamento da pasta')
    }
}


export default {
    createFolder,
    shareFolder,
    getFolders,
    getShareFolder,
    updateFolderTitle,
    removeFolder,
    removeShareFolder
}