import './css/App.css'
import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom";
import Lastread from './Pages/Lastread';
import Navbar from "./components/Navbar";
import ChapterViewer from "./components/ChapterViewer";
import Chapter from "./Pages/Chapter";
import AboutMe from "./Pages/AboutMe"

function App() {
  const contentNumber = 2;
  return (
    <div>
    <Navbar/>
    <main className= "main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="lastread" element={<Lastread/>}/>
        <Route path="/chapter/:id" element={<ChapterViewer />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/currentlyreading" element={<Chapter/>} />
      </Routes>
    </main>
    </div>
  )
}



export default App
 