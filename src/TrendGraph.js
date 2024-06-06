import { Scatter } from "react-chartjs-2";
import { constructTrendData } from "./util";
import "./Graphs.css";

let options = {
	responsive: true,
	plugins: {
		tooltip: {
			callbacks: {
				label: (context) => {
					return `${context.raw.experiment}: (${context.raw.x}, ${context.raw.y})`;
				},
			},
		},
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

function TrendGraph(props) {
	return (
		<div className="Centered">
			<Scatter
				data={constructTrendData(props.inputParams, props.outputParams)}
				options={options}
			/>
		</div>
	);
}

export default TrendGraph;
