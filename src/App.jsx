import Header from "./components/header";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react";

export default function App() {
	const [loading, setLoading] = useState(false);

	return (
		<>
			<Header />
			<div className="hero h-screen flex items-center justify-center relative"></div>
		</>
	);
}
