import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

export default () => {
    return (
        <>
            <div className="section-header vh-100 d-flex align-items-center justify-content-center bg-primary text-white">
                <Row>
                    <Col xs={12} className="text-center">
                        <h1 className="fw-bolder">Explore Personalised FLDP</h1>
                        <p className="text-muted fw-light mb-3 h5">
                            A visual tool to observe characteristics of
                            Personalised Federated Learning with Differential
                            Privacy
                        </p>
                        <div className="d-flex align-items-center justify-content-center"></div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
