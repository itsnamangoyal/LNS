import React, { useEffect, useState } from "react"

import "./app.scss"
import { About, Contact, Header, Hero } from "./components"

function App() {
	//variable to store if page is on hero
	const [onHero, setOnHero] = useState(true)
	const [noScroll, setNoScroll] = useState(true)
	//when window resizes update css variale '--vh' and '--vw'
	useEffect(() => {
		window.addEventListener("resize", () => {
			const vh = window.innerHeight * 0.01
			const vw = window.innerWidth * 0.01
			document.documentElement.style.setProperty("--vh", `${vh}px`)
			document.documentElement.style.setProperty("--vw", `${vw}px`)
		})

		//cleanup
		return function () {
			window.removeEventListener("resize", null)
		}
	}, [])

	//if initially page is scrolled to top then disable scroll
	useEffect(() => {
		const isPageOnTop = window.scrollY === 0
		document.body.classList.toggle("no-scroll", isPageOnTop)
		setNoScroll(isPageOnTop)
	}, [])

	return (
		<>
			{!onHero && <Header />}
			<Hero
				noScroll={noScroll}
				setNoScroll={setNoScroll}
				onHero={onHero}
				setOnHero={setOnHero}
			/>
			<About />
			<Contact />
		</>
	)
}

export default App
