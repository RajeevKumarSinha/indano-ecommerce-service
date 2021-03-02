import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Shop from '../../../assets/images/amazon-global-img/shop.png';
import Africa from '../../../assets/images/amazon-global-img/Africa.png';
import America from '../../../assets/images/amazon-global-img/America.png';
import Europe from '../../../assets/images/amazon-global-img/Europe.png';
import Asia from '../../../assets/images/amazon-global-img/Asia.png';


export default function index() {
    return (
        <div>
        <Container style={{ marginTop: '10%' }}>
            <h1 className="serviceHeadText font-mobile-biggerr">Amazon Global</h1>
            <h4 className="mt-4 text-muted font-italic">Amazon global is the seprate international marketplace of Amazon where anyone can register themselves and start selling
                their product internationally.</h4>
            <h1 className="serviceHeadText font-mobile-biggerr mt-4">Procedure to start selling globally</h1>
            <Row className="mt-4 mb-4">
                <Col className="col-6">
                    <Image src={Shop} width={'70%'} className="pt-5 mt-sm-0 pt-sm-0" />
                </Col>
                <Col className="col-6 pt-4 font-weight-bold">
                    <ul>
                        <li>Choose The Marketplace</li>
                        <li>Register For Your international Seller Account</li>
                        <li>Provide Your Business Details</li>
                        <li>Start Selling Internationally</li>
                    </ul>
                </Col>
            </Row>
            <h1 className="serviceHeadText font-mobile-biggerr mt-4">Benefits Of Amazon Global</h1>
            <ul className="font-weight-bold">
                <li>Reach Hundreds Of Millions Of Customer's</li>
                <li>Increase Sales From Festival Demands Across The World</li>
                <li>Earn In Dollars,Pounds And Euros. Get Paid In Rupees</li>
            </ul>
            </Container>
            <div className="getTouch">
                <Container>
                    <h6 className="font-weight-bold font-italic mb-0 mt-4 pt-5 text-center">Amazon works with 53 Global Domains around the Globe, In 4 different Continents</h6>
                    <h6 className="font-weight-bold font-italic mb-4 mt-2  text-center">WE PROVIDE SERVICES FOR 4 CONTINENTS IN THESE COUNTRIES</h6>
                    <Row className="mt-5 pb-4">
                        <Col className="col-3 ml-5">
                        <Image src={Africa} width={'60%'} className="mx-auto"/>
                        </Col>
                        <Col className="col-3">
                        <Image src={America} width={'60%'} className="mx-auto"/>
                        </Col>
                        <Col className="col-3">
                        <Image src={Europe} width={'75%'} className="mx-auto"/>
                        </Col>
                        <Col className="col-2">
                        <Image src={Asia} width={'110%'} className="mx-auto"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}