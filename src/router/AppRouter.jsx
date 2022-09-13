import { Login } from "../components/Login";
import { Route, Routes } from "react-router-dom";
import { Listado } from "../components/Listado";
import { Detalle } from "../components/Detalle";
import { Header } from "../components/Header";
import { Resultados } from "../components/Resultados";
import { Favoritos } from "../components/Favoritos";
import { useEffect, useState } from "react";

export const AppRouter = () => {

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem('favs');


    if (favsInLocal != null) {
      const favsArray = JSON.parse(favsInLocal);
      setFavourites(favsArray);
    }
  }, [])


  const toggleFavourite = (e) => {

    const favMovies = localStorage.getItem('favs');

    let tempMoviesInFav;

    let tempIdFavMovie;

    if (favMovies === null) {
      tempMoviesInFav = []
    } else {
      tempMoviesInFav = JSON.parse(favMovies)
    }


    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;

    const movieData = {
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId
    }

    let movieIsInFav = tempMoviesInFav.find(movie => {
      return movie.id === movieData.id
    });
    if (!movieIsInFav) {
      tempMoviesInFav.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFav));
      setFavourites(tempMoviesInFav)

    } else {
      let moviesLeft = tempMoviesInFav.filter(movie => {
        return movie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavourites(moviesLeft)
    }
  };

  return (
    <>
      <Header favourites={favourites} />

      <Routes>

        <Route path="/*" element={<Login />} />

        <Route path="/listado" element={<Listado toggleFavourite={toggleFavourite} favourites={favourites} />} />

        <Route path="/detalle" element={<Detalle toggleFavourite={toggleFavourite} />} />

        <Route path="/resultados" element={<Resultados toggleFavourite={toggleFavourite} />} />

        <Route path="/favoritos" element={<Favoritos favourites={favourites} toggleFavourite={toggleFavourite} />} />

      </Routes>

    </>
  )
}
