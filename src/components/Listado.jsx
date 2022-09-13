import { useEffect, useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { Movie } from './Movie';
import Swal from 'sweetalert2';
import { NavPage } from './NavPage';
import { key } from '../key/key';

export const Listado = ({ toggleFavourite }) => {

  const token = sessionStorage.getItem('myToken');

  const [moviesList, setMoviesList] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=es-ES&page=${page}`
    axios.get(endPoint)
      .then(resp => {
        const apiData = resp.data
        setPage(apiData.page)
        setMoviesList(apiData.results)
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al cargar los datos...',
        })
      })

  }, [setMoviesList, page]);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className='row mx-2'>

        {
          moviesList.map((movie, idx) => {
            return (
              <Movie movie={movie} key={idx} toggleFavourite={toggleFavourite} />
            )
          })

        }

      </div>

      <NavPage
        page={page}
        setPage={setPage}
      />

    </>
  )
}


