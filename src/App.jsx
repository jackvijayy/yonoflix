
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import { Routes,Route } from "react-router-dom"
import Search from "./Components/Search"
import PlayingVideo from "./Components/PlayingVideo"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search/:searchQuery" element={<Search/>}/> 
        <Route path="/video/:id" element={<PlayingVideo/>}/>
      </Routes>
    </div>
  )
}

export default App