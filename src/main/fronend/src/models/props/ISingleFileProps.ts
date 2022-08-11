import IUserFileBlob from "../IUserFileBlob";

export default interface ISingleFileProps{
   blobFile:IUserFileBlob,
   saveFile:()=>void,
   deleteFile:(blobFile:IUserFileBlob)=>void
}