import React from "react";
import Chartist from "react-chartist";
import ChartistTooltip from "chartist-plugin-tooltips-updated";

export const SentimentChart = (props) => {
    const { data } = props;

    const options = {
        low: 0,
        showArea: false,
        fullWidth: true,
        chartPadding: {
            right: 50,
        },
        axisX: {
            position: "end",
            showGrid: true,
        },
        axisY: {
            // On the y-axis start means left and end means right
            showGrid: true,
            showLabel: true,
            labelInterpolationFnc: (value) => `${value / 1}`,
        },
    };

    const plugins = [ChartistTooltip()];

    return (
        <>
            <Chartist
                data={data}
                options={{ ...options, plugins }}
                type="Line"
                className="ct-double-octave"
            />
        </>
    );
};

export const TrainingChart = (props) => {
    const { runData, lossMode, size } = props;

    const data = {
        labels: [...Array(75).keys()],
        series: lossMode ? [runData.loss_test, runData.loss_train] : [runData.acc_test, runData.acc_train],
    };

    const options = {
        low: 0,
        high: lossMode ? 2.5 : 1,
        showArea: false,
        fullWidth: true,
        showPoint: true,
        axisX: {
            position: "end",
            showGrid: true,
            labelInterpolationFnc: function skipLabels(value, index) {
                return index % 5 === 0 ? value : null;
            },
        },
        axisY: {
            // On the y-axis start means left and end means right
            showGrid: false,
            showLabel: true,
        },
    };

    const plugins = [ChartistTooltip()];

    return (
        <Chartist
            data={data}
            options={{ ...options, plugins }}
            type="Line"
            className={size}
        />
    );
};

export const ComparisonChart = (props) => {
    const { runData1, runData2, metric, size } = props;

    const data = {
        labels: [...Array(75).keys()],
        series: [runData1[metric], runData2[metric]]
    };

    const options = {
        low: 0,
        high: metric.substring(0,4) == "loss" ? 2.5 : 1,
        showArea: false,
        fullWidth: true,
        showPoint: true,
        axisX: {
            position: "end",
            showGrid: true,
            labelInterpolationFnc: function skipLabels(value, index) {
                return index % 5 === 0 ? value : null;
            },
        },
        axisY: {
            // On the y-axis start means left and end means right
            showGrid: false,
            showLabel: true,
        },
    };

    const plugins = [ChartistTooltip()];

    return (
        <Chartist
            data={data}
            options={{ ...options, plugins }}
            type="Line"
            className={size}
        />
    );
};