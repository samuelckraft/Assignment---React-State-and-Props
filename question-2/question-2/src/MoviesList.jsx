import React, { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a list of movies
    const [movies, setMovies] = useState([
        { title: '1917', genre: 'Action', description: 'In World War II, two soilders are tasked with delivering a message across No Mans Land to the front lines that could save thousands of lives, including one of the messengers brothers' },
        { title: 'Inglorious Basterds', genre: 'Action', description: 'A team of Jewish-American soldiers team up with a French movie maker to take down the Nazi elite in a mission that could end the war' },
        { title: 'The Other Guys', genre: 'Comedy', description: 'Two police pencil pushers accidentally stumble upon a massive scheme to steal billions and must step up to the hero role in order to stop the villains from getting away with it' },
        { title: 'iRobot', genre: 'Sci-Fi', description: 'After a scientist passes away under mysterious circumstances, only one detective suspects that his robot could be behind it, leading to an investigation into the artificial intelligence industry' },
        { title: 'The Departed', genre: 'Drama', description: 'In New York, a cop undercover as a mobster and a mobster undercover as a cop must learn to navigate their respective roles, without getting too lost in them' },
    ]);


    const [showDetails, setShowDetails] = useState({});
    

    const [showActionMovies, setShowActionMovies] = useState(false);


    const toggleDetails = (index) => {
        setShowDetails((prevDetails) => ({
            ...prevDetails,
            [index]: !prevDetails[index],
        }));
    };


    const removeMovie = (index) => {
        setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
    };


    const toggleView = () => {
        setShowActionMovies((prevShowActionMovies) => !prevShowActionMovies);
    };


    const filteredMovies = showActionMovies ? movies.filter(movie => movie.genre === 'Action') : movies;

    return (
        <div>
            {/* Toggle view button */}
            <button onClick={toggleView}>
                {showActionMovies ? 'Show All Movies' : 'Show Action Movies'}
            </button>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <div onClick={() => toggleDetails(index)}>
                            {movie.title}
                        </div>
                        {showDetails[index] && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;