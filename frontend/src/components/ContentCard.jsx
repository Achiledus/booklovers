import "../css/ContentCard.css";
import { useNavigate} from "react-router-dom";

function ContentCard({content}){
    function OnFavoriteClick(e){
         e.stopPropagation();
         alert("Clicked")
    }
    
    function handleCardClick() {
        localStorage.setItem("lastread", content.id - 1); 
        useNavigate(`/chapter/${content.id - 1}`);
    }

    return (
            <div className="content-card" onClick={handleCardClick}>
                <div className="content-poster">
                    <img src={content.url || "https://via.placeholder.com/150"} alt={content.title} />
                    <div className="content-overlay">
                        <button
                            className="favorite-btn"
                            onClick={OnFavoriteClick}
                        >
                            🫀
                        </button>
                    </div>
                </div>
                <div className="content-info">
                    <h3>{content.title}</h3>
                    <p>{content.release_date}</p>
                </div>
            </div>
    );
}

export default ContentCard