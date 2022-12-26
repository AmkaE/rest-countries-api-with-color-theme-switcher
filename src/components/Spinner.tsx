const Spinner = () => {
	return (
		<div className='absolute top-1/4 left-2/4 border-8 rounded-3xl w-20 h-20 animate-spin duration-100 border-green-500'>
			<div className='border-8 border-yellow-500 rounded-lg w-full h-full animate-spin duration-75'></div>
		</div>
	);
};

export default Spinner;
