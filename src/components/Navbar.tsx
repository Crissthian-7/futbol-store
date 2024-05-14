import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../index.css'
import Logo from '../assets/imagenes/xrp-symbol-black.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col d-flex">
            <a className="navbar-brand" href="#">
              <img
                src={Logo}
                alt=""
                height={50}
                className="d-inline-block align-text-top rounded-2"
              />
            </a>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <a className="navbar-brand" href="#">
              Home
            </a>
            <a className="navbar-brand" href="#">
              About
            </a>
            <a className="navbar-brand" href="#">
              Services
            </a>
            <a className="navbar-brand" href="#">
              Contact
            </a>
          </div>
          <div className="col d-flex justify-content-end align-items-center text-end">
            <a className="navbar-brand" href="#">
              <i className="bi bi-search"></i>
            </a>
            <a className="navbar-brand" href="#">
              <i className="bi bi-person"></i>
            </a>
            <a className="navbar-brand" href="#">
              <i className="bi bi-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
