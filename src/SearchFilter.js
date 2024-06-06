import { useEffect, useState } from "react";
import "./SearchFilter.css";

function SearchFilter(props) {
	const [searchedExperiment, setSearchedExperiment] = useState("");

	useEffect(() => {
		props.onSearch(searchedExperiment);
	}, [searchedExperiment]);

	return (
		<div>
			<input
				type="search"
				placeholder={props.description}
				onChange={(e) => setSearchedExperiment(e.target.value)}
				className="SearchField"
			/>
		</div>
	);
}

export default SearchFilter;
