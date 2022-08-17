import React, { useState} from "react";
import { Modal, Col, Row, Button,Form} from "react-bootstrap";
import Swal from "sweetalert2";

function Pot_Raiz(props) {
    const [numero, setNumero] = useState(0);
    const [operacion,setOperacion]= useState(1);

    const handleChange=e=>{
        setNumero(e.target.value);
    }
    // funcion para comprobar si es par o impar
    const handleNumber = async () => {
        const token = await cargarDatos({op:operacion,num:numero});
        const { state } = token;
        if (state) {
            const { result } = token;
            Swal.fire({
                icon: "success",
                title: "El resultado es: ",
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
                        <Modal.Title>{"Potencia y Radicación "} </Modal.Title>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <div>
                            <Row>
                                <h1 className="shadow-sm  mt-5 p-3 text-center rounded">
                                    Seleccione una opción
                                </h1>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col className="mb-3" md="auto">
                                    <Form.Check
                                        inline
                                        label="Potencia al cubo"
                                        name="group1"
                                        type="radio"
                                        id="radio1"
                                        value="1"
                                        onChange={(e) => setOperacion(e.target.value)}
                                       
                                                                             
                                    />
                                    <Form.Check
                                        inline
                                        label="Raiz Cubica"
                                        name="group1"
                                        type="radio"
                                        id="radio2"
                                        value="2"
                                        onChange={(e) => setOperacion(e.target.value)}
                                        
                                    />
                                </Col>
                                <Col></Col>
                            </Row>
                        </div>
                    </Row>
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
    const {op,num}=data;
    if (op ==1){
        return {state:true, result:Math.pow(num,3)};
    }
    else {
        return {state:true, result:Math.cbrt(num)};
    }
    
}

export default Pot_Raiz;
