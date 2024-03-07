import { ICreateUser, IGetUser, IUserPermissions } from './user'
import { IToken } from './auth'
import { ICreateFolder, IShareFolder, IGetFolders, IUpdateFolderTitle, IGelAllFolders } from './folder'
import { ICreateFile, IGetFiles, IShareFile, IUpdateFileTitle, IGelAllFiles } from './file'
import { ICreateAdminFiles } from './admin'

export type {
    ICreateUser,
    IGetUser,
    IToken,
    IGetFolders,
    ICreateFolder,
    IShareFolder,
    IGelAllFolders,
    IUpdateFolderTitle,
    ICreateFile, 
    IGetFiles, 
    IShareFile, 
    IUpdateFileTitle,
    IGelAllFiles,
    ICreateAdminFiles,
    IUserPermissions
}