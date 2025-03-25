import { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Blog Platform</h1>
      <PostForm setPosts={setPosts} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;