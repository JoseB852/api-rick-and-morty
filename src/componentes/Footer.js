import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                            <img
                                className="logofooter"
                                src="https://cms.rhinoshield.app/public/images/ip_page_rick_and_morty_icon_894e334f64.jpg"
                                alt="Logo"
                            />
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 mt-5">
                            <h4 className="text-black">Contacto</h4>
                            <p className="text-black">Santiago</p>
                            <p className="text-black">Jose Antonio Betancourt</p>
                            <p className="text-black">+(569) 988866678</p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 mt-5">
                            <h4 className="text-black">Redes Sociales</h4>
                            <div className="wrapper">
                                <a href="https://web.facebook.com/joseantonio.betancourtsanchez" className="icon facebook" aria-label="Facebook"target="_blank" rel="noopener noreferrer">
                                    <span><FaFacebook /></span>
                                    <div className="tooltip">Facebook</div>
                                </a>
                                <a href="https://x.com/login?mx=2" className="icon twitter" aria-label="Twitter"target="_blank" rel="noopener noreferrer">
                                    <span><FaTwitter /></span>
                                    <div className="tooltip">Twitter</div>
                                </a>
                                <a href="https://www.instagram.com/?hl=es" className="icon instagram" aria-label="Instagram"target="_blank" rel="noopener noreferrer">
                                    <span><FaInstagram /></span>
                                    <div className="tooltip">Instagram</div>
                                </a>
                                <a href="https://github.com/JoseB852?tab=repositories" className="icon github" aria-label="Github"target="_blank" rel="noopener noreferrer">
                                    <span><FaGithub /></span>
                                    <div className="tooltip">Github</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center derechos">
                            <p>
                                Derechos reservados, Jose Betancourt © 2024, Creado por Jose Betancourt
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
