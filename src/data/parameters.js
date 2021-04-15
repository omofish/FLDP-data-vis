export default {
    dataset: {
        display: "Dataset",
        states: ["MNIST-Writers", "MNIST-Labels"],
    },
    DP: {
        display: "Privacy",
        states: ["Differential Privacy", "Standard"],
    },
    lr: {
        display: "Learning Rate",
        states: ["0.1", "0.05", "0.01", "0.005", "0.001"],
    },
    sigma: {
        display: "Noise Sigma",
        states: ["1", "1.1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
    n_per: { display: "Personalization Layers", states: ["0", "2", "4"] },
    sel_k: {
        display: "Selection Percentage",
        states: ["1", "0.8", "0.5", "0.3", "0.1"],
    },
};
