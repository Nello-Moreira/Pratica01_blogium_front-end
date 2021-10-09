import axios from 'axios';

const axiosBase = axios.create({
	baseURL: 'http://localhost:4000',
});

const getAllPosts = () => axiosBase.get('/posts');

const getPost = postId => axiosBase.get(`/posts/${postId}`);

const getPostComments = postId => axiosBase.get(`/posts/${postId}/comments`);

const createNewComment = (postId, commentInformations) =>
	axiosBase.post(`/posts/${postId}/comments`, commentInformations);

const createNewPost = postData => axiosBase.post(`/posts`, postData);

export {
	getAllPosts,
	getPost,
	getPostComments,
	createNewComment,
	createNewPost,
};
