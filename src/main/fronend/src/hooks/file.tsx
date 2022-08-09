

export default function useFile(theBlob: Blob, fileName:string){
    // const [file,setFile] = useState<File>(new File([],""))
    // var b: any = theBlob;
    // b.lastModifiedDate = new Date();
    // b.name = fileName;
    //
    // setFile(new File([theBlob],fileName))
    // return {file}
    const url = URL.createObjectURL(theBlob)
    return {url}
}