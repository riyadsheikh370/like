import React from 'react'
import './banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import Me from "../../assets/me.png"
import Du from "../../assets/banner_du.png"
import Dd from "../../assets/banner_dd.png"


const Banner = () => {

    return (
        <>
            <section id='banner'>
                <Container>
                    <div className="banner_main">
                        <Row>
                            <Col lg={6}>
                                <div className="banner_left">
                                    <img src={Me} alt={Me} />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="banner_right">
                                    <div className="img_one">
                                        <img src={Du} alt={Du} />
                                    </div>
                                    <h3> Hi, <span className="type"> I'm Riyad Sheikh_</span></h3>
                                    <p>I'm a front‑end developer <br /> with user‑friendly experiences.</p>
                                    <div className="img_three">
                                        <img src={Dd} alt={Dd} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default Banner
