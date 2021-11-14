import React from 'react'
import { Link ,BrowserRouter as Router} from 'react-router-dom'

function Footer() {
    return (
        <>
            <Router>
                <div className="main-footer">
                    <div className="left-bottom">                        
                        <Link className="linkedin" target="_blank" to={{ pathname: "https://www.linkedin.com/in/abdallah-hamada-89a06b194" }}>
                            <img src="/assets/images/icons/linkedin.png" alt="linked in" />
                            <span>/abdallah-hamada-89a06b194</span>
                        </Link>
                        <Link className="facebook" target="_blank" to={{ pathname: "https://www.facebook.com/abdo.hamda2017" }}>
                            <img src="/assets/images/icons/facebook.svg" alt="facebook" />
                            <span>/abdo.hamda2017</span>
                        </Link>                        
                        <div className="whatsapp">
                            <img src="/assets/images/icons/whatsapp.svg" alt="whatsapp" />
                            <span>+201093594038</span>
                        </div>
                    </div>
                    <div className="right-bottom">
                        <span>All Rights reserved<span className="name"> Abdallah Hamada</span><sup>&copy;</sup> {new Date().getFullYear()}</span>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Footer
