import React from "react";
import Textbox from "../components/textbox";

const NewAllocation: React.FC = () => {
	return (
		<div>
			<h1>Allocate New Network</h1>
			<Textbox
				title="Target node name"
				placeholder="e.g. cuci-r730-pve01"
			/>
		</div>
	);
};

export default NewAllocation;
