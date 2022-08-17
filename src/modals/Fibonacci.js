import React, { useState} from "react";
import { Modal, Col, Row, Button} from "react-bootstrap";
import Swal from "sweetalert2";

function Fibonacci(props) {
    const [numero, setNumero] = useState(0);

    const handleChange=e=>{
        setNumero(e.target.value);
    }
    // funcion para comprobar si es par o impar
    const handleNumber = async () => {
        const token = await cargarDatos({num:numero});
        const { state } = token;
        if (state) {
            const { result } = token;
            Swal.fire({
                icon: "success",
                title: "Fibonacci: ",
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
                            {"Fibonacci de un número "}{" "}
                        </Modal.Title>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs lg="2"></Col>
                        <Col>
                            <input
                                className="form-control"
                                Type="number"
                                placeholder="Ingrese un número"
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col xs lg="3">
                            <Button
                                variant="secondary"
                                onClick={() => handleNumber()}
                            >
                                Verificar
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
    
    return {state:true, result:"[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]"};
}

export default Fibonacci;
