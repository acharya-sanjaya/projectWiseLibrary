import React, { useEffect } from "react";
import "./MovieList.css";

const ComedyMoviesList = () => {
    useEffect(() => {
        console.log("ComedyMoviesList component is loaded.");
    }, []);

    return <div className="movie-list">Comedy Movies List</div>;
};

export default ComedyMoviesList;
