export default interface IFileListProps{
    openFile:(fileId:number)=>void,
    openContextMenu:(fileId:number,e:React.MouseEvent)=>void
}