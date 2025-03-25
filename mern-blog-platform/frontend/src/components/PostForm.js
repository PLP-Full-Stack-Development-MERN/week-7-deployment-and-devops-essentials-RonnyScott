import { useState } from 'react';
import axios from 'axios';

const PostForm = ({ setPosts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/posts', { title, content });
      setPosts(prev => [...prev, res.data]);
      setTitle('');
      setContent('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post content"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;