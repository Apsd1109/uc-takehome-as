import { useEffect, useState } from "react";
import "./Selector.css";

function Selector(props) {
	const [checkedState, setCheckedState] = useState(
		new Array(props.items.length).fill(false)
	);
	const [searchedIndices, setSearchedIndices] = useState([]);

	const handleOnCheck = (position) => {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);

		setCheckedState(updatedCheckedState);
	};

	useEffect(() => {
		let updatedSelectedItems = [];

		for (let i = 0; i < props.items.length; i++) {
			if (checkedState[i]) {
				updatedSelectedItems.push(props.items[i]);
			}
		}

		props.onSelectItems(updatedSelectedItems);
	}, [checkedState]);

	useEffect(() => {
		if (props.searchedItem !== undefined) {
			let matchedIndices = props.items
				.filter((e) =>
					e.toLowerCase().includes(props.searchedItem.toString().toLowerCase())
				)
				.map((e) => props.items.indexOf(e));
			setSearchedIndices(matchedIndices);
		}
	}, [props.searchedItem]);

	return (
		<div className="Centered">
			<p className="Description">{props.description}</p>
			{props.items.map((item, index) => {
				return (
					<div key={index} className="Checkboxes">
						{(searchedIndices.includes(index) ||
							searchedIndices.length === 0) && (
							<div key={index + "-search"}>
								<input
									type="checkbox"
									id={item + "-" + index}
									checked={checkedState[index]}
									onChange={() => handleOnCheck(index)}
								/>
								<label htmlFor={item + "-" + index}>{item}</label>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default Selector;
