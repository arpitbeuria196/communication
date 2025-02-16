import './App.css';
import { files } from './Data';
import Folder from './Folder';

function App() {

  return (
    <>
    <div className='m-10 justify-center items-center'>
    <Folder files={files}/>
    </div>
    </>
  )
}

export default App
