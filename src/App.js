import './App.css';
import Navbar from "./component/Navbar";
import InfoText from "./component/InfoText";
import InfoImage from "./component/InfoImage";
import {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

    return (
        <>
            <Navbar />

            <section className="wrapper">
                <div className="container">
                    <div className="grid-cols-2">
                        <InfoText />
                        <InfoImage />
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
