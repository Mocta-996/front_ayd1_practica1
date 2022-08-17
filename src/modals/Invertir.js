import React, { useState} from "react";
import { Modal, Col, Row, Button} from "react-bootstrap";
import Swal from "sweetalert2";

function Invertir(props) {
    const [str, setStr] = useState(0);

    const handleChange=e=>{
        setStr(e.target.value);
    }
    // funcion para comprobar si es par o impar
    const handleStr = async () => {
        const token = await cargarDatos({str:str});
        const { state } = token;
        if (state) {
            const { result } = token;
            Swal.fire({
                icon: "success",
                title: "Palabra Invertida: ",
                text: result,
            });

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al mostrar el resultado, intente más tarde!",
            });
        }
    };
    // funcion para ocultar el modal
    function reset() {
        props.setShow(false);
    }

    return (
        <>
            <Modal show={props.show} fullscreen="'xl-down'" onHide={reset}>
                <Modal.Header closeButton>
                    <Col>
                        <Modal.Title>
                            {"Invertir una Palabra "}{" "}
                        </Modal.Title>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs lg="2"></Col>
                        <Col>
                            <input
                                className="form-control"
                                Type="text"
                                placeholder="Ingrese una palabra"
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col xs lg="3">
                            <Button
                                variant="secondary"
                                onClick={() => handleStr()}
                            >
                                Invertir
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    );
}

async function cargarDatos(data) {
    /*return fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((data) => data.json());   */
    
    // variable que contiene la palabra
    const {str} = data;
    //  respuesta
    return {state:true, result:str};
}

export default Invertir;
