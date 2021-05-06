import Head from 'next/head';

export default function Header() {
	return (
		<Head>
			<title>
				TomHalliwell.dev - Developing Web solutions, games and music
			</title>
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
	);
}
