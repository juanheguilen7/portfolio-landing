import React from 'react';
import './Main.css'
import NavBar from '../NavBar/NavBar';

const MainComponent = () => {
    return (
        <main className='middle'>
            <div className='text-middle'>
                <h1>Bievenidos</h1>
                <p>
                    ¡Hola! Soy Juan Heguilen, un apasionado desarrollador web con una visión única para transformar ideas en experiencias digitales extraordinarias. Con un sólido background técnico y una creatividad sin límites, estoy aquí para llevar tu presencia en línea al siguiente nivel.
                </p>
            </div>
            <NavBar />
        </main>
    )
}

export default MainComponent;