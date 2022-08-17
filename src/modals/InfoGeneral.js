import React,{useState,useEffect} from 'react';
import {Modal,Col,Table } from "react-bootstrap";
import Swal from 'sweetalert2';

function InfoGeneral(props) {

    const [usuarios, setUsuarios]= useState([]);

    // funcion para cargar datos
    const handleUser =async () => {
        const token = await cargarDatos();
        const {state} = token;
        if(state){
            const {datos} = token;
            setUsuarios(datos);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error mostrar datos, intente más tarde!'
            })
        }
    }
    // 
    useEffect(() => {
        handleUser();
    },[]);
    // funcion para ocultar el modal
    function reset() {
        props.setShow(false);
    }

    return (
        <>
            <Modal show={props.show} fullscreen="'xl-down'" onHide={reset} >
                <Modal.Header closeButton>
                    <Col>
                    <Modal.Title>{"agregar titulo"} </Modal.Title>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Carnet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios &&
                            usuarios.map((usuario) => (
                                <tr key={usuario.carnet}>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.carnet}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
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
    const datos= [
        {
            nombre:"Renan Estuardo Luna",
            carnet:"carnet1"
        },
        {
            nombre:"José Diego Pérez",   
            carnet:"carnet2"
        },
        {
            nombre:"Damihan Antonio Morales Cuyuch",   
            carnet:"carnet3"
        },
        {
            nombre:"Maynor Octavio Piló Tuy",
            carnet:"carnet4"
        }
    ]
    return {state:true,datos:datos};
}


export default InfoGeneral;  