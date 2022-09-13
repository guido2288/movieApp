import { Link } from 'react-router-dom';

export const Movie = ({ movie, toggleFavourite }) => {


  const fav = JSON.parse(localStorage.getItem('favs'));

  return (
    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-3  mt-3 mb-3' >
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='card-img-top' alt='movie poster' />

        {
          (fav.length === 0)
            ? <button className='favourite-btn' onClick={toggleFavourite} data-movie-id={movie.id}>🤍</button>
            :
            fav.map((fav, idx) => {
              if (Number(fav.id) === movie.id) {
                return (
                  <button className='favourite-btn' onClick={toggleFavourite} data-movie-id={movie.id} key={idx}>❤️</button>
                )
              } else {
                return <button className='favourite-btn' onClick={toggleFavourite} data-movie-id={movie.id} key={idx}>🤍</button>
              }
            })
        }
        <div className='card-body'>
          <h5 className='card-title'>{movie.title}</h5>
          <p className='card-text'>{movie.overview.substring(0, 100)}...</p>
          <Link to={`/detalle?movieID=${movie.id}`} className='btn btn-outline-success'>Más...</Link>
        </div>
      </div>
    </div>
  )
}
