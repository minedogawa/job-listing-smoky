import { useLocation, Link, useNavigate } from "react-router-dom"

export default function Description() {
	const location = useLocation()
	const navigate = useNavigate()

	function handleApplyClick() {
		alert("Thank You for your application")
		navigate("/jobs")
	}

	return (
		<div className="min-h-[80vh] relative">
			<div className="min-h-[80vh] bg-white rounded-lg shadow-lg p-10">
				<Link to="/jobs" className="absolute top-0 left-0 mt-4 ml-4 bg-cyan-dark hover:bg-cyan-very-dark text-white py-2 px-6 rounded-md">
					Back
				</Link>
				<div className="flex items-center mb-4 mt-8">
					<img src={location.state.job.logo} className="w-12 h-12 mr-4" alt="Company Logo" />
					<div>
						<h1 className="text-xl font-semibold text-gray-800">{location.state.job.position}</h1>
						<p className="text-[#787878]">{location.state.job.company}</p>
					</div>
				</div>
				<div className="flex items-center">
					{location.state.job.new ? <span className="bg-cyan-dark text-white py-1 px-2 rounded-full mr-2">NEW!</span> : ""}
					{location.state.job.featured ? <span className="bg-[#111111] text-white py-1 px-2 rounded-full">FEATURED</span> : ""}
				</div>
				<hr className="my-6" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h2 className="text-lg font-semibold mb-2">Job Description</h2>
						<p className="text-[#787878]">{location.state.job.description}</p>
					</div>
					<div>
						<h2 className="text-lg font-semibold mb-2">Requirements</h2>
						<div className="flex flex-wrap">
							<span className="bg-[#0f1e32] text-white py-1 px-2 rounded-full mr-2 mb-2">{location.state.job.level}</span>
							{location.state.job.languages.map((language, index) => (
								<span key={index} className="bg-[#eac77d] text-white py-1 px-2 rounded-full mr-2 mb-2">
									{language}
								</span>
							))}

							{location.state.job.tools.map((tool, index) => (
								<span key={index} className="bg-[#b47b44] text-white py-1 px-2 rounded-full mr-2 mb-2">
									{tool}
								</span>
							))}
						</div>
					</div>
				</div>
				<hr className="my-6" />
				<div className="flex items-center text-gray-600">
					<p className="mr-4">{location.state.job.postedAt}</p>
					<p className="mr-4">{location.state.job.contract}</p>
					<p>{location.state.job.location}</p>
				</div>
				<div className="flex justify-center mt-8">
					<button onClick={handleApplyClick} className="bg-cyan-dark hover:bg-cyan-very-dark text-white py-2 px-6 rounded-md">
						Apply Now
					</button>
				</div>
			</div>
		</div>
	)
}
