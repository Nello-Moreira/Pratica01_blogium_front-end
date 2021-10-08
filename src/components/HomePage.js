import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import { getAllPosts } from '../API/API_service';

export default function HomePage() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getAllPosts()
			.then(response => {
				setPosts(response.data);
			})
			.catch(error => console.log(error));
	}, []);

	return <PostList name='Daily stories' posts={posts} />;
}
