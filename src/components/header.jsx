import { Button } from "./ui/button";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const handleLogOut = async () => {
		try {
			// Menampilkan SweetAlert untuk konfirmasi logout
			const result = await Swal.fire({
				title: "Sign Out",
				text: "Apakah kamu yakin mau keluar dari halaman ini?",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, logout!",
			});

			if (result.isConfirmed) {
				// Jika konfirmasi, lakukan logout
				await axios.post(
					`${import.meta.env.VITE_API_BE}/logout`,
					{},
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem("token")}`,
						},
					}
				);

				// Hapus token dari localStorage dan redirect ke halaman login
				localStorage.removeItem("token");

				// Menampilkan SweetAlert setelah logout sukses
				Swal.fire({
					title: "Logged out!",
					text: "Anda telah berhasil logout.",
					icon: "success",
				});

				navigate("/login");
			}
		} catch (error) {
			console.error("Error logging out:", error);
			// Tampilkan error jika gagal logout
			Swal.fire({
				title: "Error",
				text: "Terjadi kesalahan saat logout. Coba lagi nanti.",
				icon: "error",
			});
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
