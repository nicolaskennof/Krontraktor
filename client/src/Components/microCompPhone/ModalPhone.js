import React from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";
import "./style.css"

class ModalPhone extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            phoneModal: false
        };
    }

    render() {
        let phoneClose = () => this.setState({ phoneModal: false });

        return (
            <ButtonToolbar>
                <Button className="workerCardButton" id="phoneBtn" onClick={() => this.setState({ phoneModal: true })}>
                    <i className="fas fa-phone"></i>
                </Button>

                <Modal
                    size="sm"
                    show={this.state.phoneModal}
                    onHide={phoneClose}
                    aria-labelledby="modal-phone"
                    centered
                >
                    <Modal.Header closeButton className="border-dark">
                        <Modal.Title id="modal-phone">
                            <i className="fas fa-phone"></i> Contacto
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        El número de celular de {this.props.firstName + " " + this.props.lastName} es el siguiente:<br /><b>{this.props.contactPhone}</b>.
                    </Modal.Body>
                </Modal>
            </ButtonToolbar>
        );
    }
}

export default ModalPhone