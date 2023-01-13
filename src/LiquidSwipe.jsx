import React from 'react'
import LiquidSwipe from 'react-liquidswipe';
import About from './About';
import App from './App';
import Experience from './Experience';
import styled from 'styled-components';

const Syles = styled.div`
    transform: translateY(-200px);
    width: 100%;
    
    `
function Swipe() {
    let components = [
        <App />,
        <About />,
        <Experience />,
    ];
    return (
        <LiquidSwipe
            components={components}
            style={{ 
            }}
        />
    )
}

export default Swipe