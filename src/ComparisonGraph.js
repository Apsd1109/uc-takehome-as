import { constructComparisonData } from "./util";
import { Bar } from "react-chartjs-2";
import "./Graphs.css";

let options = {
	responsive: true,
	plugins: {
		legend: {
			labels: {
				font: {
					size: 14,
				},
			},
		},
	},
	scales: {
		y: {
			type: "logarithmic",
			// TODO: feature to toggle the scale type
			// type: "linear",
			ticks: {
				font: {
					size: 14,
				},
			},
		},
		x: {
			ticks: {
				font: {
					size: 14,
				},
			},
		},
	},
};

function ComparisonGraph(props) {
	return (
		<div className="Centered">
			<Bar
				data={constructComparisonData(props.selectedExperiments)}
				options={options}
			/>
		</div>
	);
}

export default ComparisonGraph;
