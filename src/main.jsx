import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout.jsx"
import App from "./App.jsx"
import Jobs from "./pages/Jobs.jsx"
import Description from "./pages/Description.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<App />} />
					<Route path="jobs" element={<Jobs />} />
					<Route path="description" element={<Description />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
