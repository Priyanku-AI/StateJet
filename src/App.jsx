import Login from "./components/Login"
import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./components/Profile"

function App() {
  

  return (
    <>
    <Toaster position="top-center"/>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
