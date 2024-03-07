import { Prisma } from '@prisma/client'
import { JsonValue } from '@prisma/client/runtime/library'

export interface IGetFiles {
    id: string
    data: JsonValue
    folderId: string
    shared?: boolean
    user: {
        id: string
        username: string
    } | null
}

export interface IGelAllFiles {
    folderId:string, 
    userId: string, 
    createdAt: Prisma.SortOrder
}

export interface ICreateFile {
    data: JsonValue | any
    owner: string
    folderId: string
}

export interface IUpdateFileTitle {
    id: string
    title: string
}

export interface IShareFile {
    fileId: string,
    userId: string
}