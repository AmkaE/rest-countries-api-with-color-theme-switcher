const Spinner = () => {
	return (
		<div className='absolute top-1/4 left-2/4 border-4 rounded-3xl w-12 h-12 p-1 animate-spin duration-100 border-green-500'>
			<div className='border-5 border-yellow-500 rounded-xl w-full h-full animate-spin duration-75'></div>
		</div>
	);
};

export default Spinner;
