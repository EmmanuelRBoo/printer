import db from '../../db'
import { ICreateFolder, IShareFolder, IGetFolders, IUpdateFolderTitle, IGelAllFolders } from '../../interfaces'

const getFolders = async ({ createdAt, userId }: IGelAllFolders) => {
    const data: IGetFolders[] = await db.folder.findMany({
        where: { 
            OR: [
                {
                    sharedFolders: { 
                        some: { 
                            userId 
                        } 
                    },
                },
                {
                    owner: userId
                }
            ]
        },
        select: {
            id: true,
            title: true,
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

const createFolder = async (data: ICreateFolder) => {
    return await db.folder.create({ data })
}

const removeFolder = async (id: string) => {
    return await db.$transaction([
        db.sharedFolders.deleteMany({ where: { folderId: id } }),
        db.file.deleteMany({ where: { folderId: id } }),
        db.folder.delete({ where: { id } })
    ])
}

const updateFolderTitle = async (data: IUpdateFolderTitle) => {
    return await db.folder.update({ 
        where: { 
            id: data.id 
        },
        data: {
            title: data.title
        } 
    })
}

const getShareFolder = async ({ folderId, userId }: IShareFolder) => {
    return await db.sharedFolders.findMany({ 
        where: { folderId, userId }
    })
}

const shareFolder = async (data: IShareFolder) => {
    return await db.sharedFolders.create({ data })
}

const removeShareFolder = async (id: string) => {
    return await db.sharedFolders.delete({ where: { id } })
}

export default {
    createFolder,
    shareFolder,
    getFolders,
    getShareFolder,
    removeShareFolder,
    updateFolderTitle,
    removeFolder
}