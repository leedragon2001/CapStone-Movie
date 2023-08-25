import axios from 'axios'
import React, { Component } from 'react'
import LichChieuItem from "./LichChieuItem";
import Slider from "react-slick";
import Swal from 'sweetalert2';

export default class LichChieu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null,
      error: null
    }
  }
  componentDidMount() {
    //pending
    this.setState({
      loading: true,
      data: null,
      error: null
    })
    //call api
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
      headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE0LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTE5MDQwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1MzM4MDAwfQ.k7Kzay9-bYUjN7pTcMrYpgTq5Xe5U6jdvM1OUQ5L_2A",
      }
    })
      .then((result) => {
        if (result.data.statusCode === 200) {
          this.setState({
            loading: false,
            data: result.data.content,
            error: null
          })
        }
      })
      .catch((error) => {
        this.setState({
          loading: false,
          data: null,
          error,
        })
      })
  }

  renderListLichChieu = () => {
    const { data } = this.state;
    return data?.map((movie) => <div><LichChieuItem key={movie.maPhim} movie={movie} /></div>)
  }
  handlePopUp = () => {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 4,
      arrows: false,
    };
    return (
      <div className='container'>
        <div className="headerTitle titleLichChieu">
          <div className='row container'>
            <div className="under-line col-md-3">
              <div className="form-group mt-4">
                <select className="form-control" name="">
                  <option>Phim</option>
                  <option></option>
                </select>
              </div>
            </div>
            <div className="under-line col-md-3 partition">
              <div className="form-group mt-4">
                <select className="form-control" name="">
                  <option>Rạp</option>
                  <option></option>
                  <option></option>
                </select>
              </div>
            </div>
            <div className="under-line col-md-3 partition">
              <div className="form-group mt-4">
                <select className="form-control" name="">
                  <option>Ngày giờ chiếu</option>
                  <option></option>
                  <option></option>
                </select>
              </div>
            </div>
            <div className='col-md-3 partition'>
              {/* dùng sweet alert để hiện box */}
              <button className="btnMuaVe" onClick={() => {
                this.handlePopUp()
              }}>MUA VÉ NGAY</button>

            </div>
          </div>
        </div>
        <Slider {...settings}>
          {this.renderListLichChieu()}
        </Slider>
        <br />
        <div className='container mt-3'>
          <img src="./images/shadow.png" alt="" width={1080}/>
        </div>
      </div>
    )
  }
}
