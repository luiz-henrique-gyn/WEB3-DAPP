"use client"
import { useState} from "react";
import Head from "next/head";
import { doLogin } from "@/services/web3Service.js";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const { push } = useRouter();

  const[message,setMessage] = useState("");
  
  function btnLoginClick(){
    doLogin()
    .then(account => push("/vote"))
    .catch(err=>{
      console.error(err);
      setMessage(err.message);
    })
  }

  return (
    <>  
      <Head>
        <title>Big Brother Web3 | Login </title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://aventurasnahistoria.uol.com.br/media/uploads/bbb_HiXlDX3.jpg" className="d-block mx-lg-auto img-fluid" width="700" height="500" alt="Big Brother Web3"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Big Brother Web3</h1>
            <p className="lead">Votação on-chain do BB-Web3</p>
            <p className="lead mb-3">Autentique-se com sua carteira e deixe seu voto para o próximo paredão</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
             <button type="button" onClick={btnLoginClick} className="btn btn-primary btn-lg px-4 me-md-2">
                <img src="/metamask.svg" width="64" className="me-3"/>
                Conectar com a MetaMasck
             </button>
            </div>
            <p className="message">{message}</p>
          </div>
        </div>
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  my-4 border-top">
            <p className="col-md4 mb-0 text-body-secondary">&copy;2024 Big Brother Web3</p>
            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
              <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>

            </ul>
          </footer> 
      </div>
    </>
  );
}

