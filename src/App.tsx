import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Footer } from "./components/layout/Footer";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<div className="flex flex-col min-h-screen text-white bg-black select-none">
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
}
