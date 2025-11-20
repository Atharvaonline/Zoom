import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
export default function LandingPage() {
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className="navHeader">
                    <h2>Zoom Video Call</h2>

                </div>
                <div className='navlist'>
                    <Link to={"/home"}>Join as Guest</Link>
                    <Link to={"/auth?mode=signup"}>Register</Link>
                    <Link className="btn navCTA" to={"/auth"}>Login</Link>
                </div>

             </nav>
             <div className="landingMainContainer">
             <div>
                <h1><span className="accent">Connect</span> with your loved ones</h1>
                
                <p>Cover a distance by Apna video Call</p>
                <br />
                <Link className="btn" to={"/auth"}>Get Started</Link>
                </div>
                <div>
                      <img src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80" alt="Video call illustration"/>
                </div>
              

             </div>
           
                 
                    
         </div>
    )
}