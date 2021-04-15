import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowDown,
    faBullseye,
    faGraduationCap,
    faVial,
} from "@fortawesome/free-solid-svg-icons";
import {
    Col,
    Row,
    Card,
    Button,
    ButtonGroup,
    FormGroup,
    Form,
} from "@themesberg/react-bootstrap";
import {
    ComparisonChart,
    TrainingChart,
} from "./Charts";

import allStates from "../data/parameters";

export const TrainingChartWidget = (props) => {
    const { title, activeRun, lossMode, setLossMode } = props;

    const legend = [
        {
            id: 1,
            label: lossMode ? "Test Loss" : "Test Accuracy",
            color: "tertiary",
            icon: lossMode ? faArrowDown : faBullseye,
        },
        {
            id: 2,
            label: lossMode ? "Train Loss" : "Train Accuracy",
            color: "quaternary",
            icon: lossMode ? faArrowDown : faBullseye,
        },
    ];

    return (
        <Card className="bg-secondary-alt shadow-sm">
            <Card.Header className="d-flex flex-row align-items-center flex-0">
                <div className="d-block">
                    <h5 className="fw-normal mb-2">{title}</h5>
                    <h3>{activeRun.title}</h3>
                </div>
                <div className="d-flex ms-auto">
                    <ButtonGroup>
                        <Button
                            size="md"
                            onClick={() => setLossMode(true)}
                            variant={lossMode ? "primary" : "outline-primary"}
                        >
                            Loss
                        </Button>
                        <Button
                            size="md"
                            onClick={() => setLossMode(false)}
                            variant={lossMode ? "outline-primary" : "primary"}
                        >
                            Accuracy
                        </Button>
                    </ButtonGroup>
                </div>
            </Card.Header>
            <Card.Body className="p-2">
                <TrainingChart
                    runData={activeRun}
                    lossMode={lossMode}
                    size="ct-major-tenth"
                />
                <div className="d-flex align-items-center justify-content-center mt-4">
                    {legend.map((d) => (
                        <h6
                            key={`circle-element-${d.id}`}
                            className="fw-normal text-gray mx-3"
                        >
                            <FontAwesomeIcon
                                icon={d.icon}
                                className={`icon icon-xs text-${d.color} w-20 me-1`}
                            />
                            {` ${d.label} `}
                        </h6>
                    ))}
                </div>
            </Card.Body>
        </Card>
    );
};

export const CompareChartWidget = (props) => {
    const { title, activeRun1, activeRun2, chartMode, setChartMode } = props;

    const legend = [
        {
            id: 0,
            label: "Test Accuracy",
            icon: faBullseye,
            value: "acc_test",
        },
        {
            id: 1,
            label: "Train Accuracy",
            icon: faBullseye,
            value: "acc_train",
        },
        {
            id: 2,
            label: "Test Loss",
            icon: faArrowDown,
            value: "loss_test",
        },
        {
            id: 3,
            label: "Train Loss",
            icon: faArrowDown,
            value: "loss_train",
        },
    ];

    const handleClick = (e) => {
        setChartMode(e.target.value);
    };

    return (
        <Card className="bg-secondary-alt shadow-sm">
            <Card.Header className="d-flex flex-row align-items-center flex-0">
                <div className="d-block">
                    <h5 className="fw-normal mb-2">{title}</h5>
                    <h4>
                        <span className="text-tertiary">
                            {activeRun1.title}
                        </span><br />
                        <span className="text-quaternary">
                            {activeRun2.title}
                        </span>
                    </h4>
                </div>
                <div className="d-flex ms-auto">
                    <ButtonGroup>
                        {legend.map((d) => (
                            <Button
                                key={`circle-element-${d.id}`}
                                size="md"
                                value={d.id}
                                onClick={(e) => handleClick(e)}
                                variant={
                                    chartMode == d.id
                                        ? "primary"
                                        : "outline-primary"
                                }
                            >
                                {d.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>
            </Card.Header>
            <Card.Body className="p-2">
                <ComparisonChart
                    runData1={activeRun1}
                    runData2={activeRun2}
                    metric={legend[chartMode].value}
                    size="ct-double-octave"
                />
                <div className="d-flex align-items-center justify-content-center mt-4">
                    <h6 className="fw-normal text-gray mx-3">
                        <FontAwesomeIcon
                            icon={legend[chartMode].icon}
                            className={`icon icon-xs text-tertiary w-20 me-1`}
                        />
                        {` ${legend[chartMode].label} 1`}
                    </h6>
                    <h6 className="fw-normal text-gray mx-3">
                        <FontAwesomeIcon
                            icon={legend[chartMode].icon}
                            className={`icon icon-xs text-quaternary w-20 me-1`}
                        />
                        {` ${legend[chartMode].label} 2`}
                    </h6>
                </div>
            </Card.Body>
        </Card>
    );
};

export const ParameterWidget = (props) => {
    const { expNum, title, data, activeRun, setActiveRun, setExpNum } = props;

    const experiments = [1, 2, 3, 4];

    const disabledFields = {
        0: [],
        1: ["sigma", "sel_k"],
        2: ["dataset", "DP", "lr", "sel_k"],
        3: ["dataset", "DP", "lr", "sigma", "sel_k"],
        4: ["dataset", "DP", "lr", "sigma", "n_per"],
    };

    const isMatch = (newState, newRun) => {
        let match = true;
        const comparisonProps = [
            "dataset",
            "DP",
            "lr",
            "n_per",
            "sel_k",
            "sigma",
        ];
        if (expNum == 1) {
            comparisonProps.pop();
        }
        comparisonProps.forEach((prop) => {
            if (newState[prop] != newRun[prop]) {
                match = false;
            }
        });
        return match;
    };

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        const newState = { ...activeRun, [name]: value };
        const newRun = data.find((x) => isMatch(newState, x));
        console.log(newRun);
        setActiveRun(newRun);
    };

    const StateButtonGroup = (props) => {
        const { title } = props;
        return (
            <>
                <FormGroup className="mb-3">
                    <Form.Label>{allStates[title].display}</Form.Label>
                    <ButtonGroup className="w-100">
                        {allStates[title].states.map((m) => (
                            <Button
                                name={title}
                                key={m}
                                value={m}
                                onClick={(e) => handleInputChange(e)}
                                variant={
                                    activeRun[title] === m
                                        ? "primary"
                                        : "outline-primary"
                                }
                                disabled={
                                    // just for that one per setting :)
                                    m === "4" &&
                                    title === "n_per" &&
                                    (expNum === "2" || expNum === "1")
                                        ? true
                                        : m === "1.1" &&
                                          title === "sigma" &&
                                          expNum === "2"
                                        ? true
                                        : disabledFields[expNum].includes(title)
                                        ? true
                                        : false
                                }
                            >
                                {m}
                            </Button>
                        ))}
                    </ButtonGroup>
                </FormGroup>
            </>
        );
    };

    const handleSelectChange = (e) => {
        const title = e.target.value;
        setActiveRun(data.find((d) => d.title == title));
    };

    const handleExpChange = (e) => {
        setExpNum(e.target.value);
    };

    return (
        <Card className="bg-secondary-alt shadow-sm">
            <Card.Header className="d-flex flex-row align-items-center justify-items-center flex-0">
                <div className="d-block">
                    <h5 className="fw-normal mb-2">{title}</h5>
                </div>
                {setExpNum && (
                    <div className="d-flex ms-auto">
                        <h6>
                            Experiment
                            <ButtonGroup className="ms-3">
                                {experiments.map((d) => (
                                    <Button
                                        key={d}
                                        size="sm"
                                        value={d}
                                        onClick={(e) => handleExpChange(e)}
                                        variant={
                                            expNum == d
                                                ? "primary"
                                                : "outline-primary"
                                        }
                                    >
                                        {d}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </h6>
                    </div>
                )}
            </Card.Header>
            <Card.Body className="d-flex flex-column align-items-center justify-items-center">
                <Form className="w-100">
                    <FormGroup className="mb-3">
                        <Form.Label>Run</Form.Label>
                        <Form.Select
                            value={activeRun.title}
                            onChange={(e) => handleSelectChange(e)}
                        >
                            {data.map((d) => (
                                <option key={d.title}>{d.title}</option>
                            ))}
                        </Form.Select>
                    </FormGroup>
                    {Object.keys(allStates).map((k) => (
                        <StateButtonGroup title={k} key={k} />
                    ))}
                </Form>
            </Card.Body>
        </Card>
    );
};

export const DataSummaryWidget = (props) => {
    const { activeRun, trainMode } = props;
    const icon = trainMode ? faGraduationCap : faVial;
    const color = trainMode ? "quaternary" : "tertiary";
    const category = trainMode ? "Train Summary" : "Test Summary";

    const [accVar, lossVar] = trainMode
        ? [activeRun.acc_train, activeRun.loss_train]
        : [activeRun.acc_test, activeRun.loss_test];

    const accMax = Math.max(...accVar).toFixed(4);
    const lossMin = Math.min(...lossVar).toFixed(4);

    return (
        <Card border="light" className="shadow-sm">
            <Card.Body>
                <Row className="d-block d-xl-flex align-items-center">
                    <Col
                        xl={5}
                        className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0"
                    >
                        <div
                            className={`icon icon-shape icon-xl text-primary rounded me-4 me-sm-0`}
                        >
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <div className="d-sm-none">
                            <h4>{category}</h4>
                            <h3 className="mb-1">{accMax}</h3>
                        </div>
                    </Col>
                    <Col xs={12} xl={7} className="px-xl-0">
                        <div className="d-none d-sm-block">
                            <h4>{category}</h4>
                            <h5 className="mb-1">
                                <FontAwesomeIcon
                                    icon={faBullseye}
                                    className={`icon icon-xs text-${color} w-20 me-1`}
                                />
                                <small className="text-muted">
                                    Highest Accuracy{" "}
                                </small>
                                {accMax}
                            </h5>
                            <h5 className="mb-1">
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    className={`icon icon-xs text-${color} w-20 me-1`}
                                />
                                <small className="text-muted">
                                    Lowest Loss{" "}
                                </small>
                                {lossMin}
                            </h5>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};