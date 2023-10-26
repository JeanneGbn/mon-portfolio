import React from "react";
import Header from '../Components/header';
import AboutMe from "../Components/a_propos";
import Skills from "../Components/skills";
import Galerie from '../Components/galerie';
import Hero from '../Components/hero';
import Footer from "../Components/footer";
import '../Style/main.css';



const Home = () => {
    return (
        <div>
            <Header />
            <main className="main">
                <Hero />
                <AboutMe />
                <Skills />
                <Galerie />
                <Footer />
            </main>

        </div>
    );
};

export default Home;