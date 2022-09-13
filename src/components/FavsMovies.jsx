import { Link } from 'react-router-dom';

export const FavsMovies = ({ movie, toggleFavourite }) => {
  return (
    <div className='col-xs-12 col-sm-6 col-md-6 col-lg-3  mt-3 mb-3' >
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.imgURL}`} className='card-img-top' alt='movie poster' />
        <button className='favourite-btn' onClick={toggleFavourite} data-movie-id={movie.id}>❤️​</button>
        <div className='card-body'>
          <h5 className='card-title'>{movie.title}</h5>
          <p className='card-text'>{movie.overview.substring(0, 100)}...</p>
          <Link to={`/detalle?movieID=${movie.id}`} className='btn btn-outline-success'>Más...</Link>
        </div>
      </div>
    </div>
  )
}
