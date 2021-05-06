import { motion, AnimatePresence } from 'framer-motion';
import BouncingTom from './BouncingTom';
import { useState, useEffect } from 'react';

export default function IntroText() {
	const [skillPos, setSkillPos] = useState(0);

	const skillList = ['websites', 'music', 'digital art', 'apps', 'services'];
	const skillColor = ['#d95763', '#5986b5', '#1d9a71', '#6b65be', '#e89c2b'];

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
		<div className='intro-text'>
			<div className='header-wrapper'>
				<BouncingTom />
				<div className='header'>
					<h1>Tom Halliwell</h1>
					<p className='lead'>
						makes{' '}
						<AnimatePresence exitBeforeEnter>
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
				</div>
				<div className='intro-body-text'>
					<p>
						By day I craft shiny, unique web things with JavaScript.
					</p>
					<p>
						When I'm not doing the exact same thing by night, you
						can find me developing games, or producing (usually
						moody) music.
					</p>
					<p>
						I'm also the nerdier half of{' '}
						<a href='https://keeper.studio/' target='_blank'>
							keeper.studio
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
