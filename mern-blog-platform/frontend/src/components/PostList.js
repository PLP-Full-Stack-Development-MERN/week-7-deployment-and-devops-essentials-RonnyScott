import React from 'react';

const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => (
      <div key={post._id} className="post-card">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    ))}
  </div>
);

export default PostList;