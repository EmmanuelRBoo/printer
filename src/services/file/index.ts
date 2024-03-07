import db from '../../db'
import { ICreateFile, IGetFiles, IShareFile, IUpdateFileTitle, IGelAllFiles } from '../../interfaces'

const getAllFiles = async ({ createdAt, folderId, userId }: IGelAllFiles) => {
    const data: IGetFiles[] = await db.file.findMany({
        where: { 
            folderId,
            OR: [
                {
                    owner: userId
                }
            ]
        },
        select: {
            id: true,
            data: true,
            folderId: true,
            user: {
                select: {
                    id: true,
                    username: true
                }
            }
        },
        orderBy: {
            createdAt
        }
    })

    data.forEach((f) => {
        if (f.user?.id != userId) {
            f.shared = true
        }   
    })

    return data
}

const createFile = async (data: ICreateFile) => {
    return await db.file.create({ data })
}

const updateFileTitle = async (data: IUpdateFileTitle) => {
    return await db.file.update({ 
        where: { 
            id: data.id 
        },
        data: {
            data: {
                name: data.title
            }
        } 
    })
}

const removeFile = async (id: string) => {
    return await db.file.delete({ where: { id } })
}

export default {
    createFile,
    getAllFiles,
    updateFileTitle,
    removeFile
}