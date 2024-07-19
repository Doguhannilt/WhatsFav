import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./pages/Navbar"

function App() {
  return (
  <>
    <ToastContainer />
      <main className="">
        <Outlet />
    </main>
  
    </>
  )
}

export default App
