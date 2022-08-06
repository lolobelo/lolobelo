import React, {useEffect} from 'react';
import AOS from "aos";
import {gsap} from "gsap";

function InfoText(props) {

    useEffect(() => {
        AOS.init()

        gsap.fromTo(
            ".main-heading",
            {
                opacity: 0,
                y: 20,
                delay: 1.2,
                duration: 1,
            },
            {
                opacity: 1,
                y: 0,
                delay: 1.2,
                duration: 1,
            });

        gsap.fromTo(
            ".info-text",
            {
                opacity: 0,
                y: 20,
                delay: 1.4,
                duration: 1,
            },
            {
                opacity: 1,
                y: 0,
                delay: 1.4,
                duration: 1,
            });

        gsap.fromTo(
            ".btn_wrapper",
            {
                opacity: 0,
                y: 20,
                delay: 1.6,
                duration: 1,
            },
            {
                opacity: 1,
                y: 0,
                delay: 1.6,
                duration: 1,
            });

        gsap.fromTo(
            ".team_img_wrapper img",
            {
                opacity: 0,
                y: 20,
                delay: 1.8,
                duration: 1,
            },
            {
                opacity: 1,
                y: 0,
                delay: 1.8,
                duration: 1,
            });
    }, [])

    return (
        <div className="grid-item-1">
            <h1 className="main-heading">
                Bienvenido a <span>Lolobelo.</span>
            </h1>
            <p className="info-text">
                Somos una pizzeria con más de 10 años de clientes felices y pasta artesanal.
            </p>

            <div className="btn_wrapper">
                <a className="btn view_more_btn" href="/#">
                    Ver Carta <i className="ri-arrow-right-line"></i>
                </a>

                <a className="btn documentation_btn" href="/#">
                    Ordenar aquí
                </a>
            </div>
        </div>
    );
}

export default InfoText;