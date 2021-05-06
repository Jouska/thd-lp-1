import React, { useState, useEffect } from 'react';
import { getPosts } from '../lib/posts';
import IntroText from '../components/landingPage/IntroText';
import BlogRoll from '../components/blog/BlogRoll';
import Layout from '../components/Layout';

export default function Home(props) {
	return (
		<Layout>
			<main className='lp-main'>
				<div className='lp-main--wrapper container'>
					<IntroText />
				</div>
				{/* <button className='btn-strip' href='/blog'>
					<span>Stuff I wrote</span>
				</button> */}
				<BlogRoll posts={props.posts} />
			</main>
		</Layout>
	);
}

export async function getStaticProps(context) {
	const posts = await getPosts();

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: { posts },
	};
}
