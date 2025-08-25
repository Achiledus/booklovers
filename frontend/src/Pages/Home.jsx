import ContentCard from "../components/ContentCard"
import {useState} from "react"
import "../css/Home.css"


function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const content = [
        {id: 1, title: "The Admired", release_date: "2020"},
        {id: 2, title: "Ayobami I", release_date: "2020"},
        {id: 3, title: "Lekan I", release_date: "2020"},
        {id: 4, title: "Ayobami II", release_date: "2020"}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search for chapter..." 
                className="search-input"
                value = {searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className= "content-grid">
                {content.map(content => 
                    // content.title.toLowerCase().startsWith(searchQuery) && 
                    //we are going to use an Api for the search function. 
                    (<ContentCard content={content} key={content.id}/>))}
        </div>
    </div>);
}

export default Home;