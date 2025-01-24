import LoginPage from "./components/pages/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectionRouter from "./ProtectionRouter";
import AdminPage from "./components/pages/adminPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
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
