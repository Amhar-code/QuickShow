import axios from 'axios';
import Movie from '../models/Movie.js';
import Show from '../models/Show.js';

//API for get now playing movies from TMDB API
export const getNowPlayingMovies = async (req, res) => {
    try {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
            headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` }
        });

        const movies = data.results;
        res.json({ success: true, movies: movies });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//API to add a new show to the database
export const addShow = async (req, res) => {
    try {
        const { movieId, showsInput, showPrice } = req.body;
        let movie = await Movie.findById(movieId);
        if (!movie) {
            // Fetch movie details and credits from TMDB API'
            const [movieDetailsResponse, movieCreditsResponse] = await Promise.all([
                axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                    headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` }
                }),
                axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
                    headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` }
                })
            ])

            const movieApitData = movieDetailsResponse.data;
            const movieCreditsData = movieCreditsResponse.data;

            const movieDetails = {
                _id: movieId,
                title: movieApitData.title,
                overview: movieApitData.overview,
                poster_path: movieApitData.poster_path,
                backdrop_path: movieApitData.backdrop_path,
                genres: movieApitData.genres,
                casts: movieCreditsData.cast,
                release_date: movieApitData.release_date,
                original_language: movieApitData.original_language,
                tagline: movieApitData.tagline || "",
                vote_average: movieApitData.vote_average,
                runtime: movieApitData.runtime,
            }

            //Add moovie to database
            movie = await Movie.create(movieDetails);
        }

        const showsToCreate = [];
        showsInput.forEach(show => {
            const showDate = show.date;
            show.time.forEach((time) => {
                const dateTimeString = `${showDate}T${time}`;
                showsToCreate.push({
                    movie: movieId,
                    showDateTime: new Date(dateTimeString),
                    showPrice,
                    occupiedSeats: {}
                })
            })
        });

        if (showsToCreate.length > 0) {
            await Show.insertMany(showsToCreate);
        }

        res.json({ success: true, message: "Show Added Successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}