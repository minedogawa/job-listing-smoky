import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout.jsx"
import Landing from "./Landing.jsx"
import Jobs from "./pages/Jobs.jsx"
import Description from "./pages/Description.jsx"
import Login from "./pages/Login.jsx"
import RequireAuth from "./components/RequireAuth.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Landing />} />

					<Route path="authentication">
						<Route path="login" element={<Login />} />
					</Route>

					<Route
						path="jobs"
						element={
							<RequireAuth>
								<Jobs />
							</RequireAuth>
						}
					/>

					<Route
						path="description"
						element={
							<RequireAuth>
								<Description />
							</RequireAuth>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
