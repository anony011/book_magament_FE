import { Navigate } from "react-router-dom";

function ProtectionRouter({ children }) {
	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to="/login" />;
	}

	return children;
}

export default ProtectionRouter;
