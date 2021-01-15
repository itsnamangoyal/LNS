import React from "react"
import { motion } from "framer-motion"

const headervariants = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeInOut",
			staggerChildren: 0.4,
			when: "beforeChildren",
		},
	},
}

const textVariants = {
	hidden: {
		y: -20,
		opacity: 0,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 1,
			duration: 0.4,
			ease: "easeInOut",
		},
	},
}
export default function Header() {
	return (
		<motion.div
			className='header'
			variants={headervariants}
			initial='hidden'
			animate='visible'>
			<motion.div
				variants={textVariants}
				initial='hidden'
				animate='visible'
				className='brand-name'>
				LNS
			</motion.div>
		</motion.div>
	)
}
