import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {gsap} from "gsap";

function Navbar(props) {

    useEffect(() => {
        AOS.init()

        gsap.fromTo(
            ".logo",
            {
                opacity: 0,
                y: -10,
                delay: 0.5,
                duration: 0.5,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0.5,
                duration: 0.5,
            });
    }, [])

    return (
        <header className="container header">
            <nav className="nav">
                <div className="logo">
                    <img src="/lolobelo-logo.png" alt="" />
                </div>

                <div className="nav_menu" id="nav_menu">
                    <button className="close_btn" id="close_btn">
                        <i className="ri-close-fill"></i>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;