import Balonimg from '../assets/imagenes/balon.jpg'
import Camisetasimg from '../assets/imagenes/camiseta.png'
import Zapatillasimg from '../assets/imagenes/zapatilla.png'

const Slider = () => {
  return (
    <div className="container-fluid h-100 ratio-16x9">
      <div className="row h-100">
        <div className="col-5 p-0">
          <div className="d-flex flex-column justify-content-center ps-4 h-100">
            <h5 className="fs-5">
              Un 15% de descuento
            </h5>
            <h1 className="ps-4"> En compras <b>online!</b> </h1>
            <p className="ps-4">
              pero solo por tiempo limitado
            </p>
            <button className="btn btn-primary w-25 rounded-1 bg-dark border-0 ">Compra ahora</button>
            <div className={'h-25 position-relative w-50 mt-5'}>
              <button className="carousel-control-prev bg-black w-25 h-25 rounded-2" type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev">
                <span className="carousel-control-prev-icon h-75" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <p className="position-relative text-center "> 01 / 03</p>
              <button className="carousel-control-next bg-black w-25 h-25 rounded-2" type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next">
                <span className="carousel-control-next-icon h-75" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>
        <div className="col-7 p-0">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                      className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Balonimg} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={Camisetasimg} className="img-fluid" alt="..."/>
              </div>
              <div className="carousel-item " >
                <img src={Zapatillasimg} className="img-fluid object-fit-cover ratio-21x9" alt="..."/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider