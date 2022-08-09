import IUserFile from "../IUserFile";

export default interface IFileProps{
    file:IUserFile,
    openFile:(fileId:number)=>void,
    openContextMenu:(fileId:number,e:React.MouseEvent)=>void
}