import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";
import { key } from "../key/key";


export const Resultados = ({ toggleFavourite }) => {

  const token = sessionStorage.getItem('myToken');

  let query = new URLSearchParams(window.location.search);

  let keyword = query.get('keyword');

  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=es-ES&query=${keyword}`
    axios.get(endPoint)
      .then(resp => {
        const moviesArray = resp.data.results;
        if (moviesArray.length === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se encontro lo que buscabas...',
          })
        }
        setMoviesResults(moviesArray)
      })
      .catch(error => {
        console.log(error)
      })


  }, [keyword])

  return (
    <>
      {!token && <Navigate to="/" />}

      <h2 className="text-center mt-2">Resultados de "{keyword}"</h2>
      {moviesResults.length === 0 && <h3 className="text-center">No hay resultados</h3>}
      <div className='row mx-2'>

        {
          moviesResults.map((movie, idx) => {
            return (
              <Movie movie={movie} key={idx} toggleFavourite={toggleFavourite} />
            )
          })

        }

      </div>

    </>
  )
}
