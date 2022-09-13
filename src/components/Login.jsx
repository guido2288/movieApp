import { useNavigate, Navigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from "axios";


export const Login = () => {

  const navigate = useNavigate();

  const onLogIn = () => {
    navigate('/listado', {
      replace: true
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Los campos no pueden estar vacios',
      })
      return
    };

    if (email !== "" && !regexEmail.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El email no es valido',
      })
      return;
    };

    if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Credenciales Incorrectas',
      })
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Login Correcto',
      showConfirmButton: false,
      timer: 1200
    })

    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(res => {
        const token = res.data.token;
        sessionStorage.setItem('myToken', token)
        onLogIn()
      });


  };

  const token = sessionStorage.getItem('myToken');

  return (
    <>
      {token && <Navigate to="/listado" />}

      <div className="login mt-5 mx-auto shadow p-3 mb-5 bg-body rounded">

        <h2 className="text-center">Login</h2>



        <form onSubmit={submitHandler}>

          <div className="form-group text-center mb-3">

            <label className="text-start w-100 ">Email
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Email"
              />
            </label>


          </div>

          <div className="form-group text-center mb-3">

            <label className="form-label text-start w-100">Password
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="password"
              />

            </label>

          </div>



          <button className="btn btn-primary w-100 mb-3" type="submit">Ingresar</button>

        </form>

        <p className="fw-light"><span className="text-primary">Email:</span> challenge@alkemy.org</p>
        <p className="fw-light"><span className="text-primary">Password:</span> react</p>


      </div>


    </>
  )
}
