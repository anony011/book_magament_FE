const Header = () => {
	return (
		<header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
			{/* LOGO */}
			<div className="flex gap-2">
				<img src="/images/logo.png" alt="logo" />
				<h1 className="text-lg font-bold">Book Managment</h1>
			</div>
		</header>
	);
};

export default Header;
