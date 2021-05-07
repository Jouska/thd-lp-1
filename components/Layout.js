import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Layout(props) {
	const router = useRouter();

	const modeButton = useRef();
	const [currentTheme, setCurrentTheme] = useState({
		mode: 'light',
		body: '#cef1e6',
		text: '#335b4f',
		titleText: '#1d9a71',
		leadText: '#00271a',
		blogBg: '#f8fffd',
		toggleSide: 'flex-start',
		switchBg: '#53b897',
		postHeader: 'snow',
		postHeaderBg: '#1d9a71',
	});

	const modeClick = () => {
		currentTheme.mode === 'light'
			? setCurrentTheme(darkTheme)
			: setCurrentTheme(lightTheme);
	};

	const lightTheme = {
		mode: 'light',
		body: '#cef1e6',
		text: '#335b4f',
		titleText: '#1d9a71',
		leadText: '#00271a',
		blogBg: '#f8fffd',
		toggleSide: 'translateX(0%)',
		switchToggle: '#cef1e6',
		switchBg: '#53b897',
		postHeader: 'snow',
		postHeaderBg: '#1d9a71',
	};

	const darkTheme = {
		mode: 'dark',
		body: '#050228',
		text: '#d0e0f0',
		titleText: '#5986b5',
		leadText: '#d0e0f0',
		blogBg: '#050228',
		toggleSide: 'translateX(140%)',
		switchToggle: '#050228',
		switchBg: '#0a396a',
		postHeader: 'snow',
		postHeaderBg: '#0a396a',
	};

	return (
		<>
			<Header />
			<div className='top-wrapper'>
				{router.asPath !== '/' ? (
					<nav>
						<Link href='/'>
							<a href='/'>
								<Image
									src='/tom_wave_still_32.png'
									width='32px'
									height='32px'
								/>
							</a>
						</Link>
					</nav>
				) : (
					<div></div>
				)}

				<div
					ref={modeButton}
					onClick={modeClick}
					className='mode-wrapper'
				>
					<span
						style={{
							color:
								currentTheme.mode === 'light'
									? '#53b897'
									: '#5986b5',
						}}
					>
						<svg
							style={{
								width: '60%',
								stroke:
									currentTheme.mode == 'light'
										? '#1d9a71'
										: '#265d97',
								transform:
									currentTheme.mode == 'light'
										? 'rotate(180deg)'
										: 'rotate(0deg)',
							}}
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 32 32'
							className='icon'
						>
							<title>brightness-contrast</title>
							<path d='M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM16 21v-10c2.757 0 5 2.243 5 5s-2.243 5-5 5zM16 26c1.105 0 2 0.895 2 2v2c0 1.105-0.895 2-2 2s-2-0.895-2-2v-2c0-1.105 0.895-2 2-2zM16 6c-1.105 0-2-0.895-2-2v-2c0-1.105 0.895-2 2-2s2 0.895 2 2v2c0 1.105-0.895 2-2 2zM30 14c1.105 0 2 0.895 2 2s-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2h2zM6 16c0 1.105-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2h2c1.105 0 2 0.895 2 2zM25.899 23.071l1.414 1.414c0.781 0.781 0.781 2.047 0 2.828s-2.047 0.781-2.828 0l-1.414-1.414c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0zM6.101 8.929l-1.414-1.414c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0l1.414 1.414c0.781 0.781 0.781 2.047 0 2.828s-2.047 0.781-2.828 0zM25.899 8.929c-0.781 0.781-2.047 0.781-2.828 0s-0.781-2.047 0-2.828l1.414-1.414c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-1.414 1.414zM6.101 23.071c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-1.414 1.414c-0.781 0.781-2.047 0.781-2.828 0s-0.781-2.047 0-2.828l1.414-1.414z'></path>
						</svg>
						{/* {currentTheme.mode === 'light'
							? 'Dark mode'
							: 'Light mode'} */}
					</span>
					<button
						className='mode-toggle'
						style={{
							backgroundColor: currentTheme.switchBg,
						}}
					>
						<div
							className='mode-toggle-switch'
							style={{
								backgroundColor: currentTheme.switchToggle,
								transform: currentTheme.toggleSide,
							}}
						></div>
					</button>
				</div>
			</div>

			{props.children}
			<style jsx global>{`
				body {
					background-color: ${currentTheme.body};
					color: ${currentTheme.text};
				}
				.blog-card {
					background-color: ${currentTheme.blogBg};
				}
				.header h1 {
					color: ${currentTheme.titleText};
				}
				.post-header {
					color: ${currentTheme.postHeader};
				}
				.lead {
					color: ${currentTheme.text};
				}
				.blog-roll {
					background-color: ${currentTheme.blogBg};
				}
				.blog-wrapper {
					background-color: ${currentTheme.blogBg};
				}
				.blog-container {
					background-color: ${currentTheme.blogBg};
				}
				.post-header {
					background-color: ${currentTheme.postHeaderBg};
					z-index: 15;
				}
			`}</style>
		</>
	);
}

export default Layout;
