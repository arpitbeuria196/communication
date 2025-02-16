import { useState } from "react";

const Folder = ({ files, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`ml-${level * 4} p-1`}>
      {/* Folder/File Header */}
      <div
        className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition duration-300"
        onClick={handleOpen}
      >
        <span className="text-lg">{files?.isFolder ? (isOpen ? "📂" : "📁") : "📄"}</span>
        <span className="font-medium">{files?.name}</span>
      </div>

      {/* Display children when folder is open */}
      {files?.isFolder && isOpen && (
        <div className="pl-4 border-l-2 border-gray-300 ml-2">
          {files?.children?.map((file, index) => (
            <Folder key={index} files={file} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
