import { motion } from 'framer-motion';

export default function BlogRoll({ posts }) {
	const RenderPosts = () => {
		return (
			// posts &&
			posts.map((post) => (
				<motion.article
					whileHover={{
						scale: 1.01,
					}}
					transition={{
						scale: {
							type: 'spring',
							stiffness: 300,
							damping: 30,
							duration: 0.2,
						},
					}}
					className='blog-card'
					key={post.id}
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
				</motion.article>
			))
		);
	};
	console.log(posts);
	return <div className='blog-roll'>{RenderPosts()}</div>;
}
