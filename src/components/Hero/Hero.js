import React, { useEffect } from "react"
import {
	AnimatePresence,
	motion,
	useTransform,
	useViewportScroll,
} from "framer-motion"

import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg"

const pageHeroVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 1,
			staggerChildren: 1,
			duration: 2,
			when: "beforeChildren",
		},
	},
}

const textVariants = {
	hidden: { y: 100, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, ease: "easeIn" },
	},
}

const arrowVariants = {
	hidden: {
		y: 20,
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
	visible: {
		opacity: [1, 1],
		y: [0, 10],
		transition: {
			repeat: Infinity,
			delay: 1,
			repeatType: "reverse",
			duration: 1,
			ease: "easeInOut",
		},
	},
	hover: {
		scale: 1.1,
	},
	tap: {
		scale: 0.9,
	},
}

export default function Hero({ setOnHero, onHero, noScroll, setNoScroll }) {
	const { scrollY } = useViewportScroll()
	// dynamic scale value that will change with increase in scroll
	const scale = useTransform(scrollY, [window.innerHeight / 5, 0], [1.1, 1])
	// dynamic opacity value that will change with increase in scroll
	const opacity = useTransform(scrollY, [window.innerHeight / 5, 0], [0, 1])

	const onDownArrowClick = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
	}

	useEffect(() => {
		scrollY.onChange(y => {
			const isPageOnTop = y === 0
			document.body.classList.toggle("no-scroll", isPageOnTop)
			setNoScroll(isPageOnTop)
			setOnHero(y < window.innerHeight / 3)
		})
	}, [scrollY, setOnHero, setNoScroll])

	return (
		<motion.div
			className='page-hero'
			variants={pageHeroVariants}
			initial='hidden'
			animate='visible'>
			<motion.div
				className='brand-name'
				variants={textVariants}
				initial='hidden'
				animate='visible'
				style={{ scale, opacity }}>
				Laxmi Narayan & Sons
			</motion.div>
			<motion.div
				className='punchline'
				variants={textVariants}
				initial='hidden'
				animate='visible'
				style={{ scale, opacity }}>
				we are leaders in importing and trading minor metals since 1980.
			</motion.div>
			<motion.div className='spacer' />
			<AnimatePresence exitBeforeEnter>
				{noScroll && (
					<motion.div
						className='next'
						variants={arrowVariants}
						initial='hidden'
						animate='visible'
						exit='hidden'
						whileHover='hover'
						whileTap='tap'
						onClick={onDownArrowClick}>
						<ArrowDown />
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}
