import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "@themesberg/react-bootstrap";
import {
    CompareChartWidget,
    ParameterWidget,
} from "../components/Widgets";

export default () => {
    let { id } = useParams(); // query is passed through id. spaces are converted to %20

    const data = require("../data/all_experiments.json");

    const [expNum1, setExpNum1] = useState(4);
    const [activeRun1, setActiveRun1] = useState(data.find((d) => d.exp == expNum1));

    const [expNum2, setExpNum2] = useState(4);
    const [activeRun2, setActiveRun2] = useState(data.find((d) => d.exp == expNum2));

    const [chartMode, setChartMode] = useState(0);

    // effect to update active run when exp changes
    useEffect(() => {
        setActiveRun1(data.find((d) => d.exp == expNum1));
    }, [expNum1, data, setActiveRun1]);
    // effect to update active run when exp changes
    useEffect(() => {
        setActiveRun2(data.find((d) => d.exp == expNum2));
    }, [expNum2, data, setActiveRun2]);

    return (
        <>
            {/* <div className="py-2">
                <Row className="pt-5 pb-4">
                    <Col
                        xs={12}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <h1>Compare Runs {id}</h1>
                    </Col>
                </Row>
            </div> */}
            <div className="mt-4">
                <Row>
                    <Col xs={12} xl={12} className="mb-4">
                        <Row xs={12} xl={12} className="mb-4">
                            <Col>
                                <CompareChartWidget
                                    title={"Comparing Runs"}
                                    activeRun1={activeRun1}
                                    activeRun2={activeRun2}
                                    chartMode={chartMode}
                                    setChartMode={setChartMode}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} xl={6} className="mb-4">
                                <ParameterWidget
                                    expNum={expNum1}
                                    setExpNum={setExpNum1}
                                    title={"Parameters 1"}
                                    data={data.filter((x) => x.exp == expNum1)}
                                    activeRun={activeRun1}
                                    setActiveRun={setActiveRun1}
                                />
                            </Col>
                            <Col xs={12} xl={6} className="mb-4">
                                <ParameterWidget
                                    expNum={expNum2}
                                    setExpNum={setExpNum2}
                                    title={"Parameters 2"}
                                    data={data.filter((x) => x.exp == expNum2)}
                                    activeRun={activeRun2}
                                    setActiveRun={setActiveRun2}
                                />
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
