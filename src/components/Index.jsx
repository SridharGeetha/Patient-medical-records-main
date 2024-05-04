import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Index = () => {

    const naviagtor = useNavigate();

    function handleAdmin(){
        naviagtor('/admin')

    }
    function handleHospital(){
        naviagtor('/hospital')
    }
  return (
    <>
      <div className="header-div">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header logo-div bounceInLeft wow" data-wow-duration="2s">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse top-right-menu-ul bounceInRight wow" id="bs-example-navbar-collapse-1" data-wow-duration="4s">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="https://github.com/Amrita-TIFAC-Cyber-Blockchain/Patient-Medical-Records">View on GITHUB</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container wow bounceInDown" data-wow-duration="5s">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 text-center slide-text">
              <h2>Medical Records Management </h2>
              <h2>using Distributed Ledger and Storage</h2>
              <p> An Ethereum blockchain based solution for the secure management of Patient Medical Records(PMR). All the data of patients, doctors and hospitals can be stored securely on the blockchain. Only authorised person can access the data.</p>
            </div>
            <div className="col-md-offset-2"></div>
          </div>
        </div>
      </div>

      <div className="container" id="features">
        <div className="row">
          <div className="col-md-12">
            <div className="main_heading">
              <div className="text-center"><span className="underline"></span></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="features-div">
              <i className="fa fa-user" aria-hidden="true" style={{ fontSize: '36px' }}></i>
              <a onClick={handleAdmin}><h3>Admin</h3></a>
              <p>To register hospitals and doctors</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="features-div">
              <i className="fa fa-hospital-o" aria-hidden="true" style={{ fontSize: '36px' }}></i>
              <a onClick={handleHospital}><h3>Hospital</h3></a>
              <p>To register patients, create and update medical records</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 footer-copyright">
              Copyright © Samia Anjum, Ramaguru R, Amrita Viswa Vidyapeetham, Coimbatore, 2020-2021.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
