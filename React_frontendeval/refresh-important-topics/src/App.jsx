import './App.css'
import Body from './components/Body';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import DropAndDrag from './components/DropAndDrag';



function App() {

  return (
   <div>
    <header className='text-2xl font-bold py-5 bg-black text-white text-center flex'>
      Hello World!
      <nav className='p-2 m-2 w-96 justify-between text-lg'>
        <a href="/">Home</a>
        <a href='/drop'>Drop</a>
      </nav>
    </header>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Body/>}></Route>
      <Route element={<ProtectedRoute/>}>
      <Route path='/drop' element={<DropAndDrag/>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
