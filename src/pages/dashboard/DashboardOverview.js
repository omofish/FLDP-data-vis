import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Button } from "@themesberg/react-bootstrap";
import { TrainingChartWidget, ParameterWidget } from "../../components/Widgets";
import { partial } from "match-json";

export default () => {
    let { id } = useParams(); // query is passed through id. spaces are converted to %20

    const data = require("../../data/all_experiments.json");

    const [activeRun, setActiveRun] = useState(
        data.find((d) => d.exp == id)
    );

    // effect to update active run when exp changes
    useEffect(() => {
        setActiveRun(data.find((d) => d.exp == id));
    }, [id, data, setActiveRun]);

    // // effect to update state when new run is selected
    // useEffect(() => {
    //     setState(data.find((d) => d.title == activeRun));
    // }, [activeRun, setState]);

    return (
        <div className="px-3">
            <Row className="pt-5 pb-4">
                <Col
                    xs={12}
                    className="d-flex align-items-center justify-content-center"
                >
                    <h1>Experiment {id}</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xl={8} className="mb-4">
                    <Row>
                        <TrainingChartWidget
                            title={"Run Name"}
                            activeRun={activeRun}
                        />
                    </Row>
                </Col>
                <Col xs={12} xl={4} className="mb-4 ps-4">
                    <Row>
                        <ParameterWidget
                            expNum={id}
                            title={"Parameters"}
                            data={data.filter((x) => x.exp == id)}
                            activeRun={activeRun}
                            setActiveRun={setActiveRun}
                        />
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
            <Row>
                <Col xs={12} xl={12} className="mb-4">
                    <Row>
                        <Col xs={12} xl={8} className="mb-4">
                            <Row>
                                {/* <Col xs={12} className="mb-4">
                                    <WordCloudWidget
                                        title="Word Cloud"
                                        data={wordCloudData}
                                    />
                                </Col>
                                <Col xs={12} className="mb-4">
                                    <MapChart
                                        title="Geographical Breakdown"
                                        data={geoData}
                                    />
                                </Col>
                                <Col xs={12} className="mb-4">
                                    <TweetsTable
                                        title="Top 10 Tweets"
                                        data={tweetData.slice(0, 10)}
                                        seeAll={() => setOverview(false)}
                                    />
                                </Col> */}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12} className="mb-4 d-none d-sm-block"></Col>
            </Row>
        </div>
    );
};
