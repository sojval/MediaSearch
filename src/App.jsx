
import './App.css'
import HomePage from './pages/HomePage'
import { Route,Routes } from "react-router-dom";
import CollectionPage from "./pages/CollectionPage"
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className='min-h-screen w-full bg-gray-950 text-white'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>

      </Routes>
      

      <ToastContainer/>
    </div>
  )
}

export default App
