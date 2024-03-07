import db from '../../db'
import { ICreateAdminFiles } from '../../interfaces'

const getAdminFolders = async () => {
    return await db.folder.findMany()
}

const getAdminFiles = async (folderId: string) => {
    return await db.file.findMany({ where: { folderId } })
}

const createAdminFile = async ({ data, folderId, owner }: ICreateAdminFiles) => {
    return db.file.create({ data: { data, folderId, owner } })
}

export default {
    getAdminFiles,
    getAdminFolders,
    createAdminFile
}