import { getSinglePost, getPosts } from '../../lib/posts';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Image from 'next/image';

// PostPage page component
const PostPage = (props) => {
	// Render post title and content in the page from props
	return (
		<Layout>
			<Container>
				<main className='single-post-wrapper'>
					<article className='post-main'>
						<header className='post-header'>
							<div className='header-image'>
								<Image
									style={{ objectFit: 'contain' }}
									layout='fill'
									src={`${props.post.feature_image}`}
								/>
							</div>
							<h1>{props.post.title}</h1>
							{/* <div className='floating-socials'>social icons</div> */}
						</header>
						<div className='post-meta'></div>
						<div className='post-body'>
							<div
								dangerouslySetInnerHTML={{
									__html: props.post.html,
								}}
							/>
						</div>
					</article>
				</main>
			</Container>
		</Layout>
	);
};

export async function getStaticPaths() {
	const posts = await getPosts();

	// Get the paths we want to create based on posts
	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}));

	// { fallback: false } means posts not found should 404.
	return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
	const post = await getSinglePost(context.params.slug);

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: { post },
	};
}

export default PostPage;
