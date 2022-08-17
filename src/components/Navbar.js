import React from 'react';
import {Navbar} from "react-bootstrap";
import "./style.css";

function NavBar(){
    return (
        <div className="nav">
            <Navbar
                fixed="top"
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Navbar.Brand href="" style={{padding :"15px"}}>Analisis y Diseño de Sistemas 1</Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default NavBar;