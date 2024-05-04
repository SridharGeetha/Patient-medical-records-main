import React from 'react'

export const HospitalHome = () => {

          return (
            <div>
              {/*
          Awesome Responsive Template
          templatestock.co
      */}
              <title>Patient Medical Records</title>
              {/* Bootstrap CSS */}
              <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css" />
              {/* Goggle Font */}
              <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500" />
              {/* Font Css */}
              <link rel="stylesheet" type="text/css" href="../css/font-awesome.min.css" />
              {/* Custom CSS */}
              <link rel="stylesheet" type="text/css" href="../css/style.css" />
              {/* Animation Css */}
              <link rel="stylesheet" href="../css/animate.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              {/* Header */}
              <div className="header-div">
                <nav className="navbar navbar-default">
                  <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header logo-div bounceInLeft wow" data-wow-duration="2s">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse top-right-menu-ul bounceInRight wow" id="bs-example-navbar-collapse-1" data-wow-duration="4s">
                      <ul className="nav navbar-nav navbar-right">
                        <li><a href="../index.html">Home</a></li>
                      </ul>
                    </div>{/* End navbar-collapse */}
                  </div>{/* End container */}
                </nav>
                <div className="container wow bounceInDown" data-wow-duration="5s">
                  <div className="row">
                    <div className="col-md-offset-2 col-md-8 text-center slide-text">
                      <h1>Hospital Homepage </h1>
                    </div>{/* End col-md-8*/}
                    <div className="col-md-offset-2" />{/* End col-md-offset-2 */}
                  </div>{/* End Row */}
                </div>{/* End Contanier */}
              </div>{/* End header-div */}
              {/* Feature */}
              <div className="container" id="features">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main_heading">
                      <div className="text-center"><span className="underline" /></div>
                    </div>
                  </div>{/* End col-md-12 */}
                </div>{/* End row */}
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <div className="features-div">
                      <i className="fa fa-wheelchair" aria-hidden="true" style={{fontSize: '36px'}} />
                      <a href="patient_registration.html"><h3>Patient Registration</h3></a>
                      <p>Register and store Patient details</p>
                    </div>			
                  </div>{/* End col-md-3*/}
                  <div className="col-md-3 col-sm-6">
                    <div className="features-div">
                      <i className="fa fa-pencil-square-o" aria-hidden="true" style={{fontSize: '36px'}} />
                      <a href="create_medical_record.html"><h3> Create Medical Record</h3></a>
                      <p>Create and store Medical Record of patients</p>
                    </div>			
                  </div>{/* End col-md-3*/}
                  <div className="col-md-3 col-sm-6">
                    <div className="features-div">
                      <i className="fa fa-flask" aria-hidden="true" style={{fontSize: '36px'}} />
                      <a href="lab_diagnostics.html"><h3>Lab Diagnostics</h3></a>
                      <p>Store Lab Diagnostic results of patients</p>
                    </div>			
                  </div>{/* End col-md-3*/}
                  <div className="col-md-3 col-sm-6">
                    <div className="features-div">
                      <i className="fa fa-user-circle" aria-hidden="true" style={{fontSize: '36px'}} />
                      <a href="patient_homepage.html"><h3>View Patient</h3></a>
                      <p>View Patient details</p>
                    </div>			
                  </div>{/* End col-md-3*/}
                </div>{/* End row */}
              </div>{/* End Container */}
              {/* Footer */}
              <footer>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 footer-copyright">
                      Copyright © Samia Anjum, Ramaguru R, Amrita Viswa Vidyapeetham, Coimbatore, 2020-2021.
                    </div>
                  </div>
                </div>
              </footer>
              {/* End Footer */}
            </div>
          );
        }
 

