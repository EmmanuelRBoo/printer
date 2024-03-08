import { Request, Response } from 'express'
import { file, admin } from '../../services'

const getAllFiles = async (req: Request, res: Response) => {
    const { userId, createdAt, roleId } = req.body
    const { folderId } = req.params

    try {
        const data = roleId == 0 ? await admin.getAdminFiles(folderId) : await file.getAllFiles({ createdAt, folderId, userId })

        return res.status(200).json({ data, message: 'Arquivos carregados com sucesso' })
    } catch (e) {
        return res.status(200).send('Houve um erro ao carregar os arquivos')
    }
}

const createFile = async (req: Request, res: Response) => {
    const { folderId, data, owner, roleId } = req.body

    try {
        if (roleId == 0) {
            await admin.createAdminFile({ data, folderId, owner })
        } else {
            await file.createFile({ folderId, data, owner })
        }

        return res.status(201).send('Arquivo criado com sucesso')
    } catch (error) {
        return res.status(200).send('Houve um erro ao criar o arquivo')
    }
}

const updateFileTitle = async (req: Request, res: Response) => {
    const { title } = req.body
    const { id } = req.params

    try {
        await file.updateFileTitle({ title, id })

        return res.status(200).json({ message: 'Título do arquivo atualizado com sucesso' })
    } catch (e) {
        return res.status(500).send('Houve um erro ao tentar atualizar o título do arquivo')
    }
}

const removeFile = async (req: Request, res: Response) => {
    const  { id } = req.params
    
    try {
        await file.removeFile(id)

        return res.status(204).json({ message: 'Arquivo removido com sucesso' })
    } catch (e) {
        return res.status(500).send('Houve um erro ao tentar remover o arquivo')
    }
}

export default {
    getAllFiles,
    createFile,
    updateFileTitle,
    removeFile
}