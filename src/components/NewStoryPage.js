import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PostManipulation from './PostManipulation/PostManipulation';
import { createNewPost } from '../API/API_service';

export default function NewStoryPage() {
	const [title, setTitle] = useState('');
	const [coverUrl, setCoverUrl] = useState('');
	const [content, setContent] = useState('');
	const [isSaveButtonDisabled, setSaveButtonDisable] = useState(false);
	const history = useHistory();

	function onPostSaveButtonClick() {
		if (!title || !coverUrl || !content) return;

		createNewPost({ title, coverUrl, content })
			.then(response => {
				setTitle('');
				setCoverUrl('');
				setContent('');
			})
			.catch(error => console.error(error));
	}

	return (
		<PostManipulation
			title={title}
			onTitleChange={newTitle => setTitle(newTitle)}
			coverUrl={coverUrl}
			onCoverUrlChange={newCoverUrl => setCoverUrl(newCoverUrl)}
			content={content}
			onContentChange={newContent => setContent(newContent)}
			onPostSaveButtonClick={onPostSaveButtonClick}
			isSaveButtonDisabled={isSaveButtonDisabled}
		/>
	);
}
