import { useEffect, useState } from "react";
import { bookChapters } from "../data/content.jsx";
import { useParams, useNavigate } from "react-router-dom";

function ChapterViewer() {
        const { id } = useParams();
        const [currentChapter, setCurrentChapter] = useState(Number(id) || 0);
        useEffect(() => {
            localStorage.setItem("lastRead",currentChapter);
        }, [currentChapter]);

        if (!bookChapters || bookChapters.length === 0) {
            return <div>No chapters available.</div>;
        }

        const handleNext = () => {
            if(currentChapter < bookChapters.length - 1){
                setCurrentChapter(currentChapter + 1);
            }
        };

        const handlePrev = () => {
            if (currentChapter > 0){
                setCurrentChapter(currentChapter - 1);
            }
        };


        return (
            <div>
                <h1 className="chapter-header">{bookChapters[currentChapter].title}</h1>
                <p>{bookChapters[currentChapter].content}</p>
                
                <div className="chapter-flipper">
                    <button onClick={handlePrev} disabled={currentChapter===0}>
                        Previous
                    </button>
                    <button onClick={handleNext} disabled={currentChapter === bookChapters.length -1}>
                        Next
                    </button>
                </div>
            </div>
        );
};

export default ChapterViewer;