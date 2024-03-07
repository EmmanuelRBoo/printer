import { JsonValue } from '@prisma/client/runtime/library'

export interface ICreateAdminFiles {
    data: JsonValue | any
    owner: string
    folderId: string
}