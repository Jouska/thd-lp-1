import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
	url: 'https://tomhalliwell.dev/blog',
	key: '2827290ab5b63b45327ed96a0b',
	version: 'v3',
});

export async function getPosts() {
	return await api.posts
		.browse({
			limit: 'all',
			includes: 'tags',
		})
		.catch((err) => {
			console.error(err);
		});
}

export async function getSinglePost(postSlug) {
	return await api.posts
		.read({
			slug: postSlug,
		})
		.catch((err) => {
			console.error(err);
		});
}
