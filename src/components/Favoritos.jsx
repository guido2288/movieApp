import { Navigate } from "react-router-dom";
import { FavsMovies } from "./FavsMovies";

export const Favoritos = ({ toggleFavourite, favourites }) => {

  const token = sessionStorage.getItem('myToken');

  return (
    <>
      {!token && <Navigate to="/" />}

      <h2 className="text-center">Mis Favoritos</h2>

      <div className='row mx-2'>

        {
          favourites.map((movie, idx) => {
            return (
              <FavsMovies movie={movie} key={idx} toggleFavourite={toggleFavourite} />
            )
          })

        }

      </div>


    </>
  )
}
