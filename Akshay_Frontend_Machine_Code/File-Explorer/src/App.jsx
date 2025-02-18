import { useState } from 'react'
import './App.css'
import Folder from './Folder'
import { files } from './Data';

function App() {
  const [data, setData] = useState(files);

  return (
    <div className="min-h-screen m-10">
      <Folder files={data} setFiles={setData} />
    </div>
  );
}

export default App
