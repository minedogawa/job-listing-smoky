/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom"

const App = () => {
	return (
		<>
			<div className="min-h-screen bg-cyan-light relative overflow-hidden">
				<div className="absolute inset-0 bg-[#0f1e32] z-0"></div>
				<main className="flex flex-col items-center px-6 relative z-10 min-h-screen justify-center">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 shadow-xl border p-4">
						Explore Programming <br /> Opportunities Worldwide
					</h1>
					<p className="max-w-prose text-lg md:text-xl lg:text-2xl text-white mb-8 text-center leading-relaxed">Unlock a world of programming opportunities with our developer jobs landing page. Whether you're a seasoned developer or just starting out, discover exciting roles in tech hubs across the globe</p>
					<div className="flex justify-center">
						{/* <Link to="/jobs" className="bg-cyan-dark hover:bg-[#eac77d] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
							Start Your Journey Now!
						</Link> */}
						<Link to="/authentication/login" className="bg-cyan-dark hover:bg-[#eac77d] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Start Your Journey Now!
                        </Link>
					</div>
				</main>
				<img
					src="https://miro.medium.com/v2/resize:fit:1200/1*ZJBkfG3WN83TLlr7ESYrLA.jpeg" 
					alt="Developer working on code"
					className="absolute inset-0 h-full w-full object-cover opacity-25"
				/>
			</div>
			<header className="flex justify-center items-center bg-no-repeat bg-cover max-h-[20vh]">
				<img className="max-h-[20vh]" src="https://assets-global.website-files.com/622b063e1c5d763e016af5ee/64806bb59d2c2cbcf0cf376c_Lister.png" alt="logo" />
			</header>
			
		</>
	)
}

export default App
