import IUserFile from "../IUserFile";

export default interface IFileProps{
    file:IUserFile,
    openFile:(file:IUserFile)=>void,
    openContextMenu:(fileId:number,e:React.MouseEvent)=>void
}