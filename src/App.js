import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import Home from './web/home';
import New from './web/new';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="container">
          <div className=" d-flex p-2">
            <div className="d-flex">
              <div className="logo w-25">
                <img src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" className="w-100"
                  alt="" />
              </div>

              <div className="py-4 mx-5">
                <strong>
                  ĐẠI HỌC BÁCH KHOA HÀ NỘI<br />
                  TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
                </strong>
              </div>
            </div>

            <form className="position-relative d-flex align-items-center w-50 ">
              <div className="">
                <div className="d-flex justify-content-center ">
                  <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" className='mx-1' alt="" />
                  <img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" className='mx-1' alt="" />
                </div>
                <input className="form-control me-2 rounded-pill h-25 my-1" type="text" placeholder="Search" />
              </div>

              <div className="position-absolute end-0 mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </form>
          </div>
        </div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark border-red">
          <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  d-flex justify-content-center" id="collapsibleNavbar" >
              <ul className="navbar-nav">
                <li className="nav-item dropdown border-start border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Giới thiệu</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to=''>Trang chủ</Link></li>
                    <li><Link className="dropdown-item" to='new'>Tin tức</Link></li>
                    <li><a className="dropdown-item" href="#">A third link</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Khoa-Trung tâm</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Khoa</a></li>
                    <li><a className="dropdown-item" href="#">Khoa học máy tính</a></li>
                    <li><a className="dropdown-item" href="#">Kĩ thuật máy tính</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Đào tạo</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Nghiên cứu</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Tuyển sinh</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Hợp tác đối ngoại</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Cựu sinh viên</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Tin tức - sự kiện</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">Tuyển dụng</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown border-end">
                  <a className="nav-link dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown">SInh viên</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">Link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='new' element={<New />} />
        </Routes>

        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-md-3">
                <h6 className='border-bottom py-3 text-white'>Categories</h6>
                <div className="footer-links">
                  <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                  <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                  <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                  <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                  <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                  <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                </div>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6 className='border-bottom py-3 text-white'>Categories</h6>
                <div className="footer-links">
                  <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                  <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                  <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                  <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                  <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                  <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                </div>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6 className='border-bottom py-3 text-white'>Categories</h6>
                <div className="footer-links">
                  <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                  <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                  <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                  <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                  <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                  <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                </div>
              </div>

              <div className="col-xs-6 col-md-3 ">
                <div className="p-4">
                  <img className="w-100" src="https://soict.hust.edu.vn/wp-content/uploads/2019/04/soict-light-logo-300x66.png" alt="" />
                </div>
                <div className="footer-links">
                  <li><a href="http://scanfcode.com/about/">About Us</a></li>
                  <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                  <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                  <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="social-icons row row-cols-4">
                      <div className=" col text-center">
                        <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
                      </div>
                      <div className="col text-center">
                        <a className="twitter " href="#"><i className="fa fa-twitter"></i></a>
                      </div>
                      <div className="col text-center">
                        <a className="dribbble " href="#"><i className="fa fa-dribbble"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <strong>Copyright © Trường Công nghệ Thông tin và Truyền thông</strong>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <span className='position-fixed bottom-0 end-0 btn px-3 py-2 m-3  bg-black text-white'><i className="ti-angle-up"></i></span>
    </React.Fragment>
  );
}

export default App;
