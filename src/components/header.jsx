const Header = () => {
	return (
		<header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
			<img src="logo.png" alt="logo" className="h-10 w-14 cursor-pointer" />
			<h1 className="text-lg font-semibold">Book Managment</h1>
		</header>
	);
};

export default Header;
