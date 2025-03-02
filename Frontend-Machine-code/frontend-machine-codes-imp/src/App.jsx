import './App.css'
import CustomModal from './Comments/CustomModal';
import Header from './Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
   <div>
    <div className='min-h-screen min-w-screen'>
    <Header/>
    </div>
   

    <BrowserRouter>
    <Routes>
    <Route path='/customModal' element={<CustomModal/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
