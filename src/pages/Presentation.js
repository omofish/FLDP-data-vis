import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
    Col,
    Row,
    Button,
    Container,
    InputGroup,
    Form,
} from "@themesberg/react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Routes } from "../routes";

export default () => {
    let history = useHistory();
    return (
        <>
            <div className="d-flex align-items-center justify-content-center mt-5">
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
