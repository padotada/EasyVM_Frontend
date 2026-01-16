import React from "react";
import Textbox from "../components/textbox";

const NewAllocation: React.FC = () => {
	const placement = [
		{
			title: "Target Node Name",
			placeholder: "e.g. cuci-r730-pve01",
			type: "text",
		},
		{ title: "Network Bridge", placeholder: "e.g. vmbr0", type: "text" },
	];

	const cpuram = [
		{ title: "Sockets", placeholder: "1", type: "number" },
		{ title: "RAM (MB)", placeholder: "e.g. 2048", type: "number" },
		{ title: "Cores per Socket", placeholder: "1", type: "number" },
	];

	const cloud = [
		{ title: "Cloud-Init Username", placeholder: "Username", type: "text" },
		{
			title: "Static IP Address",
			placeholder: "e.g, 192.168.0.0/24",
			type: "text",
		},
		{ title: "Gateway", placeholder: "e.g., 192.168.1.1", type: "text" },
		{ title: "Cloud-Init Password", placeholder: "Password", type: "text" },
		{
			title: "MAC Address",
			placeholder: "e.g.,  C0:DD:4F:80:AA:A6",
			type: "text",
		},
	];

	const tagsDescriptions = [
		{
			title: "VM Tags",
			placeholder: "e.g., terraform, testing, unix",
			type: "text",
		},
		{ title: "VM Description", placeholder: "Description", type: "text" },
	];

	return (
		<div className="bg-[#0D1117] ml-65">
			<div>
				<h1 className="text-white text-[48px] font-bold mb-5 mt-5">
					Allocate New Network
				</h1>

				<h2 className="text-[28px] font-bold mb-4 pt-5">Placement</h2>
				<div className="flex gap-5">
					{placement.map(({ title, placeholder, type }) => (
						<Textbox
							key={title}
							title={title}
							placeholder={placeholder}
							type={type}
						/>
					))}
				</div>

				<h2 className="text-[28px] font-bold mb-4 pt-5 mt-7">CPU & RAM</h2>
				<div className="flex grid grid-rows-2 grid-flow-col gap-5">
					{cpuram.map(({ title, placeholder, type }) => (
						<Textbox
							key={title}
							title={title}
							placeholder={placeholder}
							type={type}
						/>
					))}
				</div>

				<h2 className="text-[28px] font-bold mb-4 pt-5 mt-7">
					Cloud-Init Settings
				</h2>
				<div className="flex grid grid-rows-3 grid-flow-col gap-5">
					{cloud.map(({ title, placeholder, type }) => (
						<Textbox
							key={title}
							title={title}
							placeholder={placeholder}
							type={type}
						/>
					))}
				</div>

				<h2 className="text-[28px] font-bold mb-4 pt-5 mt-7">
					Tags and Descriptions
				</h2>
				<div className="flex gap-5">
					{tagsDescriptions.map(({ title, placeholder, type }) => (
						<Textbox
							key={title}
							title={title}
							placeholder={placeholder}
							type={type}
						/>
					))}
				</div>

				<button className="w-[268px] h-[82px] rounded-[10px] bg-[#A53D1E] shadow-5xl text-white text-[28px] font-bold font-sans mt-10 mb-5">
					{" "}
					Create VM{" "}
				</button>
			</div>
		</div>
	);
};

export default NewAllocation;
