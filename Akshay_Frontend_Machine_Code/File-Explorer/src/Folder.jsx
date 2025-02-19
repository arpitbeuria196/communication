import { useState } from "react";

const Folder = ({ files, setFiles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const addDocs = () => {
   
  };

  const deleteDocs = (name) => {
    
  
    

  };

  return (
    <div>
      <div className="flex items-center cursor-pointer space-x-2" onClick={handleOpen}>
        <span>{files.isFolder ? (isOpen ? "📂" : "📁") : "📄"}</span>
        <span>{files.name}</span>

        {/* Add and Delete buttons (only for folders) */}
        {files.isFolder && <button className="ml-2 text-green-500" onClick={addDocs}>➕</button>}
        <button className="ml-2 text-red-500" onClick={() => deleteDocs(files.name)}>❌</button>
      </div>
      {files.isFolder && isOpen && files.children && (
        <div className="p-2 ml-2 border-l-2">
          {files.children.map((file, index) => (
            <Folder key={file.name} files={file} setFiles={setFiles} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
