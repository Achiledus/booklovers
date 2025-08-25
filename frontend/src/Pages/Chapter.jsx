import {useParams} from "react-router-dom";
import {bookChapters} from "../data/content";

function Chapter() {
    const {id} = useParams();
    const chapterId = parseInt(id);
    const chapter = bookChapters.find((c) => c.id === chapterId);

    if (!chapter) return <div>Chapter Not found.</div>

    return (
        <div className= "chapter-view">
          <h1>{chapter.title}</h1>
          <p>{chapter.content}</p>  
        </div>
    )
}

export default Chapter;