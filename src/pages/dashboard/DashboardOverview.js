import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "@themesberg/react-bootstrap";
import {
    TrainingChartWidget,
    ParameterWidget,
    DataSummaryWidget,
} from "../../components/Widgets";

export default () => {
    let { id } = useParams(); // query is passed through id. spaces are converted to %20

    const data = require("../../data/all_experiments.json");

    const [activeRun, setActiveRun] = useState(data.find((d) => d.exp == id));
    const [lossMode, setLossMode] = useState(false);

    // effect to update active run when exp changes
    useEffect(() => {
        setActiveRun(data.find((d) => d.exp == id));
    }, [id, data, setActiveRun]);

    return (
        <>
            <div className="py-2">
                <Row className="pt-5 pb-4">
                    <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <h1>Experiment {id}</h1>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col xs={12} xl={12} className="mb-4">
                        <Row>
                            <Col>
                                <Row xs={12} xl={8} className="mb-4">
                                    <Col>
                                        <TrainingChartWidget
                                            title={"Run Name"}
                                            activeRun={activeRun}
                                            lossMode={lossMode}
                                            setLossMode={setLossMode}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col xs={6} className="">
                                        <DataSummaryWidget
                                            activeRun={activeRun}
                                            trainMode={false}
                                        />
                                    </Col>
                                    <Col xs={6} className="">
                                        <DataSummaryWidget
                                            activeRun={activeRun}
                                            trainMode={true}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} xl={4} className="mb-4">
                                <Row>
                                    <Col>
                                        <ParameterWidget
                                            expNum={id}
                                            title={"Parameters"}
                                            data={data.filter(
                                                (x) => x.exp == id
                                            )}
                                            activeRun={activeRun}
                                            setActiveRun={setActiveRun}
                                            color={"primary"}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={12} className="mb-4 d-none d-sm-block">
                        {/* <SummaryWidget
                        title="Tweet Sentiment Over Time"
                        value={avgSentiment}
                        count={count}
                        data={sentimentData}
                        legend={sentimentCircleData}
                    /> */}
                    </Col>
                </Row>
            </div>
        </>
    );
};
