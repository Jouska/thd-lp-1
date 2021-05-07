import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogRoll({ posts }) {
	const RenderPosts = () => {
		console.log(posts);

		console.log(process.env.NEXT_PUBLIC_HOST);
		return (
			// posts &&

			posts.map((post) => (
				<motion.article
					// whileHover={{
					// 	scale: 1.01,
					// }}
					// transition={{
					// 	scale: {
					// 		type: 'spring',
					// 		stiffness: 300,
					// 		damping: 30,
					// 		duration: 0.2,
					// 	},
					// }}
					className='blog-card'
					key={post.id}
				>
					<Link href={`/posts/${post.slug}`}>
						<a
							href={`/posts/${post.slug}`}
							className='card-link-wrapper'
						>
							<img
								className='blog-card--image'
								src={post.feature_image}
								alt=''
							/>
							<div className='card-body'>
								<header className='blog-card--header'>
									<motion.h2>{post.title}</motion.h2>
									<div className='blog-card--tag'></div>
								</header>
								<section className='blog-card--body'>
									{post.custom_excerpt}
								</section>
							</div>
						</a>
					</Link>
				</motion.article>
			))
		);
	};
	return (
		<div className='blog-container'>
			<div className='blog-wrapper'>
				<div className='blog-roll'>{RenderPosts()}</div>
			</div>
		</div>
	);
}
