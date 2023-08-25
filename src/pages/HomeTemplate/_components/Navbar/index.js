import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      /*** HEADER ***/
      <>
        <div className="navbar navbar-expand-lg">
          <div className="container pl-0 pr-0">
            <a className="navbar-brand" href="#">
              <img src="./images/logomovie.png" alt="logo-movie" width={200} height={90} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <nav className="navbar navbar-expand-sm header-content">
              <ul className="navbar-nav ">
                <li className="nav-item mx-3 font-weight-bold">
                  <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link text-dark"} to="/">Lịch Chiếu</NavLink>
                </li>
                <li className="nav-item mx-3 font-weight-bold">
                  <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link text-dark"} to="/cum-rap">Cụm Rạp</NavLink>
                </li>
                <li className="nav-item mx-3 font-weight-bold">
                  <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link text-dark"} to="/tin-tuc">Tin Tức</NavLink>
                </li>
                <li className="nav-item mx-3 font-weight-bold">
                  <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link text-dark"} to="/ung-dung">Ứng Dụng</NavLink>
                </li>
              </ul>
            </nav>
            <div className='d-flex header-content'>
              <a className="nav-link active text-dark" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <div>
                  <i className="fa-solid fa-xl fa-user mr-2" />Đăng Nhập
                </div>
              </a>
              <a className="nav-link active text-dark" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <div>
                  <i className="fa-solid fa-xl fa-user mr-2" />Đăng Ký
                </div>
              </a>
            </div>
          </div >
        </div >
        {/**** CAROUSEL  ****/}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} className="mx-3" />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="movie d-block w-100" src="./images/movie1.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="movie d-block w-100" src="./images/movie2.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="movie d-block w-100" src="./images/movie3.jpg" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    )
  }
}
