import React from 'react';
import {Modal, Row, Col } from 'react-bootstrap'
import { FaCopy  } from 'react-icons/fa';
class AboutUsModal extends React.Component {


    render() {


        return (

              <Modal show={this.props.show}  onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><img src="/images/Trans1b.png" alt="About Ms. Katty" /></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={3}>Contact</Col>
                        <Col>Ms. Katty</Col>
                    </Row>
                    <Row>
                        <Col md={3}>Phone:</Col>
                        <Col>615.397.9197 <span onClick={ () =>  {
                            navigator.clipboard.writeText('615.397.9197');

                        }}><FaCopy /></span></Col></Row>
                    <Row>
                        <Col md={3}>Email:</Col>
                        <Col>KattyMcFadden@yahoo.com <span onClick={ () =>  {
                            navigator.clipboard.writeText('KattyMcFadden@yahoo.com');

                        }}><FaCopy /></span></Col>
                    </Row>

                </Modal.Body>

            </Modal>
        );


    }



}
export default AboutUsModal;