import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Buscador = () => {

  const navigate = useNavigate();

  const onResult = (keyword) => {
    navigate(`/resultados?keyword=${keyword}`, {
      replace: true
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    const keyword = e.currentTarget.keyword.value.trim();
    if (keyword.length <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La busqueda no puede estar vacia',
      })
    } else {
      e.currentTarget.keyword.value = '';
      onResult(keyword);
    }
  }

  return (
    <>
      <form className="d-flex align-items-center" onSubmit={submitHandler}>

        <label className="form-label mb-0 me-2">
          <input
            className="form-control"
            type="text"
            name="keyword"
            placeholder="Buscar..."
          />
        </label>
        <button className="btn btn-primary" type="submit">Buscar</button>
      </form >
    </>
  )
}
