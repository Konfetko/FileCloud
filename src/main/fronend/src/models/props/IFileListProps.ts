import IUserFile from "../IUserFile";

export default interface IFileListProps{
    openFile:(file:IUserFile)=>void,
    openContextMenu:(fileId:number,e:React.MouseEvent)=>void
}