import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../service/api";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies()
        .then(setMovies)
        .catch((err) => console.error("Error fetching trending movies:", err));
    }, []);

    return (
        <div>
            <h1>Trending Movies</h1>
            {movies.map((movie) => (
                <div key={movie.id}>{movie.title}</div>
            ))}
        </div>
    );
};

export default Home;