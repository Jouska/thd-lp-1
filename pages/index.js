import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export default function Home() {
	const [skillPos, setSkillPos] = useState(0);

	const skillList = ['websites', 'music', 'digital art', 'apps', 'services'];
	const skillColor = ['#d95763', '#265d97', '#1d9a71', '#3930a2', '#e89c2b'];

	function increaseSkillPos() {
		if (skillPos < skillList.length - 1) {
			setSkillPos(skillPos + 1);
		} else {
			setSkillPos(0);
		}
	}

	useEffect(() => {
		setTimeout(() => {
			increaseSkillPos();
		}, 2000);
	}, [skillPos]);

	return (
		<>
			<Head>
				<title>TomHalliwell.dev</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<main className='lp-main'>
				<div className='lp-main--container'>
					<div className='intro-gif'>
						{/* <Image
							src='/../public/tom_fullbody_iso_32_2021_ripped_COLOR_update_BIGGERCANVAS.gif'
							alt='Bouncing Tom Sprite'
							width='96'
							height='192'
							layout='responsive'
						></Image> */}
						<img
							src='/bouncing_tom.gif'
							alt='Bouncing Tom Sprite'
						></img>
					</div>
					<div className='intro-text'>
						<h1>Tom Halliwell</h1>
						<p className='lead'>
							makes{' '}
							<AnimatePresence exitBeforeEnter>
								{/* <span>{skillList[skillPos]}</span> */}
								<motion.span
									key={skillPos}
									style={{ color: `${skillColor[skillPos]}` }}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{
										x: {
											type: 'spring',
											stiffness: 300,
											damping: 30,
										},
										opacity: { duration: 0.2 },
									}}
								>
									{`{${skillList[skillPos]}}`}
								</motion.span>
							</AnimatePresence>
						</p>
						<p>
							Soon this will probably be a blog.
							<br />
							If you’re interested in web design or development,
							head to{' '}
							<a href='https://keeper.studio/' target='_blank'>
								keeper.studio
							</a>
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
