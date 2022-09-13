import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { key } from "../key/key";


export const Detalle = ({ toggleFavourite }) => {

  const token = sessionStorage.getItem('myToken');

  let query = new URLSearchParams(window.location.search);

  let movieID = query.get('movieID');

  const [movie, setMovie] = useState(null);


  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${key}&language=es-ES`
    axios.get(endPoint)
      .then(resp => {
        const movieData = resp.data
        setMovie(movieData)
      })
      .catch(error => {
        console.log(error)
      })

  }, [movieID])

  return (
    <>
      {!token && <Navigate to="/" />}
      {movie && (
        <div>

          <div className="row mx-4 ">
            <div className="col-4 ">
              <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} className='img-fluid' alt='movie poster' />
            </div>
            <div className="col-8 ">
              <h2 className="text-center pt-4">{movie.title}</h2>
              <hr />
              <h5>Fecha de Estreno: {movie.release_date}</h5>
              <h5>Reseña:</h5>
              <p>{movie.overview}</p>
              <h5>Generos:</h5>
              <ul>
                {
                  movie.genres.map((genre) => {
                    return (
                      <li key={genre.id}>{genre.name}</li>
                    )
                  })
                }
              </ul>
              <h5>Rating: {movie.vote_average}</h5>

              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated  bg-success" style={{ width: `${movie.vote_average * 10}%` }}></div>
              </div>

            </div>

          </div>
        </div>
      )
      }

    </>
  )
}
