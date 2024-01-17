import React, { useEffect } from "react";
import "./MovieList.css";

const AdventureMoviesList = () => {
    useEffect(() => {
        console.log("AdventureMoviesList component is loaded.");
    }, []);

    return <div className="movie-list">Adventure Movies List</div>;
};

export default AdventureMoviesList;
