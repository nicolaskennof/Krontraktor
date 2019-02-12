import React, { Component } from "react";
import { Container, Figure, Row, Col } from "react-bootstrap";
import ModalMessage from "../microCompMessage/ModalMessage"
import ModalPhone from "../microCompPhone/ModalPhone"
import Fav from "../microCompFav/Fav"
import Price from "../microCompPrice/Price"
import Rating from "../microCompRating/ModalRating"
import Quant from "../microCompQuant/Quant"
import Hired from "../microCompHired/Hired"
import "./style.css"
import ModalPhoneFav from "../modalPhoneFav/ModalPhoneFav"
let firstName = "Nicolas Jules R";
let lastName = "Kennof";
let occupation = "Plomero"
let workerImage = "http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png"
let myClass="btn btn-warning"

class WorkerCard extends Component {

    state = {
      
      
    }

    calculateCostAverage = () => {
        let sum = 0;
        let total = 0
        this.props.kontratado.costRates.forEach(costRate => {
            sum += costRate.costRating
        })
        total = sum / this.props.kontratado.costRates.length;
        return total
    }

    calculateRating = () => {
        let sum = 0;
        let total = 0;
        this.props.kontratado.qualityRates.forEach(qualityRate => {
            sum += qualityRate.quality
        })
        total = sum / this.props.kontratado.qualityRates.length
        return total
    }


    render() {
        let props = this.props;

        return (
            <div>

                <Figure className="workerCard p-1">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <Figure.Image
                                className="workerImage my-2"
                                alt=""
                                src={workerImage}
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <h4><span id="workerNames">{props.kontratado.firstName} </span> <span id="workerLastNames">{props.kontratado.lastName}</span></h4>
                                    <div className="row">
                                        <div className="col-6">
                                            <h5 className="workerCardDetail"><span id="workerEmployment">{props.kontratado.profession.profession}</span></h5>
                                        </div>
                                        <div className="col-6 text-left">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <p><b>Rango de precio:</b></p>
                                    <Price costRate={this.calculateCostAverage()} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-left">
                                    <Rating quality={this.calculateRating()} />
                                </div>
                                <div className="col-md-3 text-center">
                                    <Quant quant={props.kontratado.hires.length} />
                                </div>
                                <div className="col-md-3 text-center">

                                </div>
                            </div>
                        </div>
                        <Col md={3}>
                            <Row className="workerCardBtnRow">
                                <Col md={6}>
                                    <br />
                                   {/* <ModalMessage /> */}
                                    <br />
                                    <ModalPhone  firstName= {props.kontratado.firstName} lastName={props.kontratado.lastName} contactPhone={props.kontratado.contactPhone} />
                                    </Col>
                                    <Col md={6}>
                                        <br />
                                        <Fav userId={props.userId} favClass={props.favClass} changeClass={this.changeClass} addFavs={props.addFavs} />
                                    <br /><br />
                                    <Hired />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Figure>
            </div>
        )
    }
}

export default WorkerCard;