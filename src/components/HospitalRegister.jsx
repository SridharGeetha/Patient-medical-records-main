import React, { useEffect, useState } from 'react'
import Web3 from 'web3';

export const HospitalRegister = () => {
    const [account, setAccount] = useState('');
    const [web3, setWeb3] = useState(null);
    

 

    useEffect(() => {
        const initializeWeb3 = async () => {
            if (typeof window.ethereum !== 'undefined') {
                console.log("MetaMask is Available :) !");
            }

            // Modern DApp browsers
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);

                // To prevent the page reloading when the MetaMask network changes
                ethereum.autoRefreshOnNetworkChange = false;

                // To Capture the account details from MetaMask
                const accounts = await ethereum.enable();
                setAccount(accounts[0]);
            }
            // Legacy DApp browsers
            else if (window.web3) {
                //window.web3 = new Web3(web3.currentProvider);
                window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/cbd9dc11b30147e9a2cc974be655ef7c"));
            }
            // Non-DApp browsers
            else {
                console.log('Non-Ethereum browser detected. Please install MetaMask');
            }
        };

        initializeWeb3();
    }, []);

    const abi = [
       
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "hospital_id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_hospital_name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_hospital_address",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_hospital_spec",
                        "type": "string"
                    }
                ],
                "name": "store_doctor_details",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "hospital_id",
                        "type": "uint256"
                    }
                ],
                "name": "retreive_hospital_details",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    const contractAddress = '0x9076fbf394E33c0084FEC28d38074b713be67C54';

    const addDetails = () => {
        const myContract = new web3.eth.Contract(abi, contractAddress, { from: account, gasPrice: '5000000', gas: '500000' });
        const ds1 = document.getElementById("addr").value;
        const ds2 = document.getElementById("spec").value;
        const tname = document.getElementById("name1").value;
        const id = document.getElementById("id1").value;
        myContract.methods.store_doctor_details(id, tname, ds1, ds2).send((err, result) => {
            if (err) {
                console.log(err);
            }
            if (result) {
                document.getElementById("result").innerHTML = result;
            }
        });
    };

    const showDetails = () => {
        const myContract = new web3.eth.Contract(abi, contractAddress, { from: account, gasPrice: '5000000', gas: '500000' });
        const idd = document.getElementById("tid").value;
        myContract.methods.retreive_hospital_details(idd).call((err, result) => {
            if (err) {
                console.log(err);
            }
            if (result) {
                document.getElementById("get_name").innerHTML = result[0];
                document.getElementById("get_addr").innerHTML = result[1];
                document.getElementById("get_spec").innerHTML = result[2];
            }
        });
    };

    const delDetails = () => {
        const myContract = new web3.eth.Contract(abi, contractAddress, { from: account, gasPrice: '5000000', gas: '500000' });
        const bid = document.getElementById("bid1").value;
        myContract.methods.burnMyToken(bid).send((err, result) => {
            if (err) {
                console.log(err);
            }
        });
    };
  return (

            <div>
              <title>Register Hospital</title>
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
              {/*<p><a href="doctor.html"><button type="submit" class="hidden" style='margin-right:16px'>Doctor Registration</button></a><a href="patient.html"><button type="submit" class="hidden" style='margin-right:16px'>Patient Registration</button></a><a href="patient_details.html"><button type="submit" class="hidden" style='margin-right:16px'>View Patient Details</button></a><a href="record_details.html"><button type="submit" class="hidden" style='margin-right:16px'>View Medical Record</button></a><a href="examine_details.html"><button type="submit" class="hidden" style='margin-right:16px'>View Patient Examine details</button></a></p>
            */}
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
                        <li><a href="admin_homepage.html">Admin Homepage</a></li>
                      </ul>
                    </div>{/* End navbar-collapse */}
                  </div>{/* End container */}
                </nav>
                <div className="container wow bounceInDown" data-wow-duration="5s">
                  <div className="row">
                    <div className="col-md-offset-2 col-md-8 text-center slide-text">
                      <h1>Hospital Registration </h1>
                    </div>{/* End col-md-8*/}
                    <div className="col-md-offset-2" />{/* End col-md-offset-2 */}
                  </div>{/* End Row */}
                </div>{/* End Contanier */}
              </div>{/* End header-div */}
              <div className="container" id="features">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main_heading">
                      <div className="text-center"><span className="underline" /></div>
                    </div>
                  </div>{/* End col-md-12 */}
                </div>{/* End row */}
                <center>
                  <h2>Register Hospital</h2>
                  <form>
                    <table style={{width: '50%'}}> 
                      <tbody><tr>
                          <td>Enter Hospital Id:</td>
                          <td><input type="text" id="id1" name="id1" /></td>
                        </tr>
                        <tr>
                          <td> Hospital Name:</td>
                          <td><input type="text" id="name1" name="name1" /></td>
                        </tr>
                        <tr>
                          <td>Hospital Address:</td>
                          <td><input type="text" id="addr" name="addr" /></td>
                        </tr>
                        <tr>
                          <td>Hospital Specification:</td>
                          <td><input type="text" id="spec" name="spec" /></td>
                        </tr>
                        <tr>
                          <td><button  onclick={addDetails} >Register</button></td>
                        </tr>
                      </tbody></table>
                  </form>
                </center>
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
              </div></div>
          );
        }

export default HospitalRegister;        
    


