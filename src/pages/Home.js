import React, { useState } from "react";
import { Col, Container, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import ModalInfoGeneral from '../modals/InfoGeneral.js';
import ModalNumeroPar_Impar from '../modals/Numero_par_impar.js';
import ModalFibonacci from '../modals/Fibonacci.js';
import ModalStr from '../modals/Invertir.js';
import ModalCubica from '../modals/Cubica.js';
import ModalAritmetica from '../modals/Aritmetica.js';

function Home(props) {
    // Damihan
    const [showInfoGeneral, setShowInfoGeneral] = useState(false);
    // Damihan
    const [showNumeroPar, setShowNumeroPar] = useState(false);
    // Maynor 
    const [showFibonacci, setShowFibonacci] = useState(false);
    // Jose
    const [showStr, setShowStr] = useState(false);
    // Renan
    const [showCubica, setShowCubica] = useState(false);
    // otro desarrollador
    const [showAritmetica, setShowAritmetica] = useState(false);
    
    // Damihan
    function handleInfoGeneral() {
        setShowInfoGeneral(showInfoGeneral ? false : true);
    }

    // Damihan
    function handleNumeroPar() {
       setShowNumeroPar(showNumeroPar ? false : true);
    }
    // Maynor
    function handleFibonacci() {
        setShowFibonacci(showFibonacci ? false : true);
    }
    // Jose
    function handleStr() {
        setShowStr(showStr ? false : true);
    }
    // Renan
    function handleCubica() {
        setShowCubica(showCubica ? false : true);
    }
    // otro desarrollador
    function handlearitmetica() {
        setShowAritmetica(showAritmetica ? false : true);
    }
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col
                        lg={10}
                        md={10}
                        sm={12}
                        className="p-5 m-auto shadow-sm rounded-lg"
                    >
                        <ListGroup>
                            <ListGroupItem action onClick={() => handleInfoGeneral()}>
                                Información General
                            </ListGroupItem>
                            
                            <ListGroupItem action onClick={() => handleNumeroPar()} >
                                Número Par o Impar
                            </ListGroupItem>
                            {
                                // Maynor
                            }
                            <ListGroupItem action onClick={() => handleFibonacci()} >
                                Fibonacci de un número 
                            </ListGroupItem>
                            {
                                // jose
                            }
                            <ListGroupItem  action onClick={() => handleStr()} >
                                Invertir Palabra
                            </ListGroupItem>
                            {
                                // Renan
                            }
                            <ListGroupItem action onClick={() => handleCubica()} >
                                Potencia al cubo y Raíz cúbica
                            </ListGroupItem>
                            {
                                // otro desarrollador
                            }
                            <ListGroupItem action onClick={() => handlearitmetica()} >
                                Multiplicación y División
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <ModalInfoGeneral show={showInfoGeneral} setShow= {setShowInfoGeneral}/>
                    <ModalNumeroPar_Impar show={showNumeroPar} setShow= {setShowNumeroPar}/>
                    <ModalFibonacci show={showFibonacci} setShow= {setShowFibonacci}/>
                    <ModalStr show={showStr} setShow= {setShowStr}/>
                    <ModalCubica show={showCubica} setShow= {setShowCubica}/>
                    <ModalAritmetica show={showAritmetica} setShow= {setShowAritmetica}/>
                </Row>
            </Container>
        </>
    );
}

export default Home;
