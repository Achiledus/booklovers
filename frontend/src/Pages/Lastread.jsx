import "../css/Favorites.css"
import { bookChapters } from "../data/content";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Lastread(){ 
    const [chapter, setChapter] = useState(null);
    const [chapterIndex, setChapterIndex] = useState(null);

    useEffect(() => {
        const lastReadIndex = Number(localStorage.getItem("lastread"));
        if (!isNaN(lastReadIndex) && lastReadIndex >= 0 && lastReadIndex < bookChapters.length) {
            setChapter(bookChapters[lastReadIndex]);
            setChapterIndex(lastReadIndex);
        }
    }, []);

    if (!chapter) {
        return (
            <div className="lastread-empty">
                <h2> Nothing read Yet</h2>
                <p>Start reading and I'll keep track</p>
            </div>
        );
    }
    return (
        <div className= "lastread-summary">
            <h2>Last Read: {chapter.title}</h2>
            <p>{chapter.content.slice(0,100)}...</p>
            <button onClick={() => useNavigate(`/chapter/${chapterIndex}`)}>Continue Reading</button>
        </div>
    );
 }

 export default Lastread;