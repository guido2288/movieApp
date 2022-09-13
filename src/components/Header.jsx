import { Link } from 'react-router-dom';
import { Buscador } from './Buscador';

export const Header = ({ favourites }) => {

  return (
    <header className='navbar navbar-expand-sm bg-dark'>
      <nav className='container'>
        <span className='navbar-brand text-light mb-2'>Movies App 🎬​</span>

        <Buscador />
        <ul className='navbar-nav  mb-2 '>
          <li className='nav-item'>
            <Link className='nav-link text-light' to="/">Home</Link>
          </li>
          <li>
            <Link className='nav-link text-light' to="/listado">Listado</Link>
          </li>
          <li>
            <Link className='nav-link text-light' to="/favoritos">Favoritos

              <span className='text-primary mx-1'>{favourites.length}</span>

            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
