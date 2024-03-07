import { Prisma } from '@prisma/client'

export interface IGetFolders {
    id: string
    title: string
    shared?: boolean
    user: { 
        id: string
        username: string 
    } | null
}

export interface IGelAllFolders {
    userId: string, 
    createdAt: Prisma.SortOrder
}

export interface ICreateFolder {
    title: string
    owner: string
}

export interface IUpdateFolderTitle {
    id: string
    title: string
}

export interface IShareFolder {
    folderId: string,
    userId: string
}