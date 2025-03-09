import './App.css'
import CustomModal from './Comments/CustomModal';
import DynamicProgress from './Comments/DynamicProgress';
import StarRating from './Comments/StarRating';
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
    <Route path='/starRating' element={<StarRating/>}></Route>
    <Route path='/dynamicProgress' element={<DynamicProgress/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
