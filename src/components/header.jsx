import { Button } from "./ui/button";
import axios from "axios";

const Header = () => {
	const handleLogOut = async () => {
		try {
			await axios.post(`${import.meta.env.VITE_API_BE}/logout`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			});
			localStorage.removeItem("token");
			window.location.href = "/login";
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

	return (
		<header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
			<span className="flex items-center gap-2">
				<img src="logo.png" alt="logo" className="h-10 w-14 cursor-pointer" />
				<h1 className="text-lg font-semibold">Book Management</h1>
			</span>

			{window.location.pathname !== "/login" && (
				<Button variant="outline" onClick={handleLogOut}>
					Sign Out
				</Button>
			)}
		</header>
	);
};

export default Header;
