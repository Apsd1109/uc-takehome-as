import data from "./data.json";

export function listExperiments() {
	return Object.keys(data);
}

// Assumes input params are the same across all experiments
export function listExperimentInputParams() {
	const experiment = listExperiments()[0];
	return Object.keys(data[experiment]["inputs"]);
}

// Assumes output params are the same across all experiments
export function listExperimentOutputParams() {
	const experiment = listExperiments()[0];
	return Object.keys(data[experiment]["outputs"]);
}

export function constructComparisonData(experiments) {
	let result = {};
	result.labels = experiments;

	let inputParams = [];
	let outputParams = [];
	let params = [];

	if (experiments.length > 0) {
		inputParams = listExperimentInputParams();
		outputParams = listExperimentOutputParams();
		params = inputParams.concat(outputParams);
	}

	result.datasets = [];
	for (let param of params) {
		result.datasets.push({
			label: param,
			borderWidth: 3,
			data: [],
			hidden: true,
		});
	}

	let i = 0;
	for (let experiment of experiments) {
		i = 0;
		for (let param of inputParams) {
			result.datasets[i].data.push(data[experiment]["inputs"][param]);
			i++;
		}
		for (let param of outputParams) {
			result.datasets[i].data.push(data[experiment]["outputs"][param]);
			i++;
		}
	}

	return result;
}

function getInputOutputPairData(input, output) {
	let result = [];
	let experiments = listExperiments();

	for (let experiment of experiments) {
		result.push({
			x: data[experiment]["inputs"][input],
			y: data[experiment]["outputs"][output],
			experiment: experiment,
		});
	}

	return result;
}

export function constructTrendData(inputParams, outputParams) {
	let result = {};
	result.datasets = [];

	for (let input of inputParams) {
		for (let output of outputParams) {
			result.datasets.push({
				label: input + "/" + output,
				data: getInputOutputPairData(input, output),
			});
		}
	}

	return result;
}
