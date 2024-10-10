import { BrowserRouter as Router,Route,Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import "react-toastify/ReactToastify.css"
import { useState } from "react"
import RefreshHandler from "./RefreshHandler"

function App() {
  const [isAuthenticated,setIsAuthenticated]= useState(false);
  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to="/login"/>
  };

  
  return (
    <>
      <Router>
        <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/home" element={<PrivateRoute element={<Home/>}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
