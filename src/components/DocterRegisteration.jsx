import React, { useEffect, useState } from 'react'

export const DocterRegisteration = () => {
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
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "doctor_id",
                    "type": "uint16"
                }
            ],
            "name": "retreive_doctor_details",
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
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint16",
                    "name": "doctor_id",
                    "type": "uint16"
                },
                {
                    "internalType": "string",
                    "name": "_doctor_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_doctor_specialisation",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_doctor_ph_no",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_doctor_address",
                    "type": "string"
                }
            ],
            "name": "store_doctor_details",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    
    ];
    const contractAddress = '0x466147A21E54F6a7A22Cc86004ab5841C00bE41f';

    const addDetails = () => {
        const myContract = new web3.eth.Contract(abi, contractAddress, { from: account, gasPrice: '5000000', gas: '500000' });
        const ds1 = document.getElementById("spec").value;
        const ds2 = document.getElementById("pno").value;
        const ds3 = document.getElementById("addr").value;
        const tname = document.getElementById("name1").value;
        const id = document.getElementById("id1").value;

        myContract.methods.store_doctor_details(id, tname, ds1, ds2, ds3).send((err, result) => {
            if (err) {
                console.log(err);
            }
        });
    };

    const showDetails = () => {
        const myContract = new web3.eth.Contract(abi, contractAddress, { from: account, gasPrice: '5000000', gas: '500000' });
        const idd = document.getElementById("tid").value;

        myContract.methods.retreive_doctor_details(idd).call((err, result) => {
            if (err) {
                console.log(err);
            } else {
                document.getElementById("get_name").innerHTML = result[0];
                document.getElementById("get_spec").innerHTML = result[1];
                document.getElementById("get_pno").innerHTML = result[2];
                document.getElementById("get_addr").innerHTML = result[3];
            }
        });
    };
  return (
   
        
            <div>
              <title>Register Doctor </title>
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
              {/*<p><a href="hospital.html"><button type="submit" class="hidden" style='margin-right:16px'>Hospital Registration</button></a><a href="patient.html"><button type="submit" class="hidden" style='margin-right:16px'>Patient Registration</button></a><a href="patient_details.html"><button type="submit" class="hidden" style='margin-right:16px'>View Patient Details</button></a><a href="record_details.html"><button type="submit" class="hidden" style='margin-right:16px'>View Medical Record</button></a><a href="examine_details.html"><button type="submit" class="hidden" style='margin-right:16px'>View Patient Examine details</button></a></p>
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
                      <h1>Doctor Registration </h1>
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
                  <h2>Register Doctor</h2>
                  <form>
                    <table style={{width: '40%'}}> 
                      <tbody><tr>
                          <td>Enter Doctor Id:</td>
                          <td><input type="text" id="id1" name="id1" /></td>
                        </tr>
                        <tr>
                          <td> Doctor Name:</td>
                          <td><input type="text" id="name1" name="name1" /></td>
                        </tr>
                        <tr>
                          <td>Doctor Specification:</td>
                          <td><input type="text" id="spec" name="spec" /></td>
                        </tr>
                        <tr>
                          <td>Doctor Phone Number:</td>
                          <td><input type="text" id="pno" name="pno" /></td>
                        </tr>
                        <tr>
                          <td>Doctor Address:</td>
                          <td><input type="text" id="addr" name="addr" /></td>
                        </tr>
                        <tr>
                          <td><input type="button" onclick={addDetails} defaultValue="Register" /></td>
                        </tr>
                      </tbody></table>
                  </form>
                </center>
              </div></div>
          );
        }
    
