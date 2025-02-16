import { useState } from "react"

const Folder = ({files}) => {
    const[open,setIsOpen] = useState(true);

    const handleOpen = ()=>
    {
        setIsOpen(!open);
    }

  return (
    <div>
      <div
      className="justify-center items-center cursor-pointer hover:text-blue-500"
      onClick={handleOpen}
      >
        {files.isFolder ? "📁" : "📄"}
         <span className="font-medium">{files?.name}</span>
      </div>
      {
        files.isFolder && open && (
            <div className="border-l-2 pl-4 ml-2">
                {files.children.map((file,index)=>(
                    <Folder key={index}
                    files={file}
                    />
                ))}
            </div>
        )
      }
    </div>
  )
}

export default Folder
