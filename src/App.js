import "./App.css";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Colors,
	LogarithmicScale,
	PointElement,
} from "chart.js";
import ComparisonGraph from "./ComparisonGraph.js";
import { useState } from "react";
import {
	listExperimentInputParams,
	listExperimentOutputParams,
	listExperiments,
} from "./util.js";
import Selector from "./Selector.js";
import TrendGraph from "./TrendGraph.js";
import SearchFilter from "./SearchFilter.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	LogarithmicScale,
	PointElement,
	Title,
	Tooltip,
	Legend,
	Colors
);

function App() {
	const [selectedExperiments, setSelectedExperiments] = useState([]);
	const [selectedInputParams, setSelectedInputParams] = useState([]);
	const [selectedOutputParams, setSelectedOutputParams] = useState([]);
	const [searchedExperiment, setSearchedExperiment] = useState("");

	const getSelectedExperiments = (experiments) => {
		setSelectedExperiments(experiments);
	};
	const getSelectedInputParams = (inputParams) => {
		setSelectedInputParams(inputParams);
	};
	const getSelectedOutputParams = (outputParams) => {
		setSelectedOutputParams(outputParams);
	};
	const getSearchedExperiment = (experiment) => {
		setSearchedExperiment(experiment);
	};

	return (
		<div className="App">
			<h1>Correlations</h1>
			<Selector
				onSelectItems={getSelectedInputParams}
				items={listExperimentInputParams()}
				description="Select Inputs"
				key="inputParams"
			/>
			<Selector
				onSelectItems={getSelectedOutputParams}
				items={listExperimentOutputParams()}
				description="Select Outputs"
				key="outputParams"
			/>
			<TrendGraph
				inputParams={selectedInputParams}
				outputParams={selectedOutputParams}
			/>

			<h1>Comparison</h1>
			<SearchFilter
				onSearch={getSearchedExperiment}
				description="Search by experiment name"
			/>
			<Selector
				onSelectItems={getSelectedExperiments}
				items={listExperiments()}
				description="Select Experiments"
				key="experiments"
				searchedItem={searchedExperiment}
			/>
			<ComparisonGraph selectedExperiments={selectedExperiments} />
		</div>
	);
}

export default App;
