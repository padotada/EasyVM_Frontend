interface textbox {
	title: string;
	placeholder: string;
}

function textbox({ title, placeholder }: textbox) {
	return (
		<>
			<h3 className="text-white font-sans text-[24px] font-bold tracking-wide mb-2">
				{title}
			</h3>
			<input
				type="text"
				placeholder={placeholder}
				className="w-[506px] h-[73px] rounded-[10px] bg-[#2E2B3E] shadow-xl placeholder:text-[20px] placeholder:tracking-wide"
			/>
		</>
	);
}

export default textbox;
