import LoginPage from "./components/pages/loginPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectionRouter from "./ProtectionRouter";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";
import AdminPage from "./components/pages/adminPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" replace />} />

				<Route
					path="/login"
					element={
						<RedirectIfAuthenticated>
							<LoginPage />
						</RedirectIfAuthenticated>
					}
				/>

				<Route
					path="/dashboard"
					element={
						<ProtectionRouter>
							<AdminPage />
						</ProtectionRouter>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
