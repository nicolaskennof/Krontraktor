import React, { Component } from "react"
import NavBarStart from "../Components/navBars/navBarStart"
import ModalLogin from "../Components/ModalLogin/ModalLogin"
import ImgCarousel from "../Components/carousel/carousel"
import { Container } from "react-bootstrap"
import HeroImageHomepage from "../Components/HeroImage/HeroImageHomepage"
import KontratadoKonversationsWrapper from "../Components/KontratadoConversation/KontratadoKonversationsWrapper"
import CommonWrapper from "../Components/workersWrapper/commonWrapper"
import Functioning from "../Components/Steps/Functioning"
import ThisIsKontratado from "../Components/Steps/ThisIsKontratado"
import Footer from "../Components/Footer/Footer"

class BeforeLogin extends Component {
    
    state = {
        show:false,
        isSignup: false
    }
    
    handleClose = () =>{
        this.setState({show:false});
    }
    
    handleShow = (isSignup) => {
        this.setState({
            isSignup,
            show:true
        });
    }

    render() {
        return (
            <div>
                <NavBarStart handleShow = {this.handleShow} />
                <ImgCarousel />
                <Functioning />
                <HeroImageHomepage />
                <ThisIsKontratado />
                <Footer />
                <Container>
                <ModalLogin logKontratado = {this.props.logKontratado} isSignup = {this.state.isSignup} handleClose = {this.handleClose} show = {this.state.show} facebookResponse={this.props.facebookResponse} />
                </Container>
            </div>
        )
    }
}
export default BeforeLogin;