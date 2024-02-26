import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { jsonData } from "../data/data"

import JobList from "./JobList"
import Pagination from "./Pagination"

const App = () => {
	const [jobs, setJobs] = useState([])
	const [showedJobs, setShowedJobs] = useState([])
	const [itemPerPage, setItemPerPage] = useState(5)
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		let jobs = []

		jsonData.forEach((job) => {
			if (job.featured == true) {
				jobs.unshift(job)
			} else {
				jobs.push(job)
			}
		})

		setJobs(jobs)
		setShowedJobs(jobs.slice(currentPage * itemPerPage - itemPerPage, currentPage * itemPerPage))
	}, [itemPerPage, currentPage])

	function changeCurrentPage(page) {
		setCurrentPage(page)
	}

	return (
		<>
			<header class="flex justify-center items-center bg-no-repeat bg-cover max-h-[20vh]">
				<Link to="/">
					<img class="max-h-[20vh]" src="https://assets-global.website-files.com/622b063e1c5d763e016af5ee/64806bb59d2c2cbcf0cf376c_Lister.png" alt="logo" />
				</Link>
			</header>
			<main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
				<div className="max-w-5xl m-auto relative -top-8 ">
					<div className="w-full max-w-5xl min-h-[4rem] mb-10"></div>

					<div>
						<JobList jobs={showedJobs} />
					</div>

					<Pagination totalData={jobs.length} itemPerPage={itemPerPage} currentPage={currentPage} changeCurrentPage={changeCurrentPage} />
				</div>
			</main>
		</>
	)
}

export default App
