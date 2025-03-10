import React, { useState } from "react";
import Header from "../header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${import.meta.env.VITE_API_BE}/login`, {
				username,
				password,
			});

			localStorage.setItem("token", response.data.token);
			Swal.fire({
				title: "Sign in Berhasil!",
				text: "Selamat Datang Kembali!",
				icon: "success",
			});
			navigate("/dashboard");
		} catch (error) {
			console.error("Login gagal:", error);
			Swal.fire({
				title: "Sign in Gagal!",
				text: "periksa kembali username dan passwordmu.",
				icon: "error",
			});
		}
	};

	return (
		<>
			<Header />
			<div className="flex justify-center items-center h-[55rem]">
				<form
					onSubmit={handleLogin}
					className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
					<h1 className="text-center text-3xl font-bold my-3">Welcome!</h1>
					<div className="mb-4">
						<Label htmlFor="username" className="font-semibold">
							Username
						</Label>
						<Input
							id="username"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<Label htmlFor="password" className="font-semibold">
							Password
						</Label>
						<Input
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="flex items-center justify-between w-full">
						<Button type="submit" className="flex-grow">
							Sign In
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default LoginPage;
