import React from 'react';

const BlogPost = ({ title, date, tags, imageUrl, imageAlt, content }) => {
  return (
    <div className="blog-post">
      <h1 className="title">{title}</h1>
      <div className="meta-info">
        <p className="date">{date}</p>
        <p className="tags">{tags}</p>
      </div>
      <hr className="divider" />
      <div className="content">
        <img src='https://tipi.com/wp-content/uploads/2020/09/Divi-Handmade-Child-Theme-90.jpg' alt={imageAlt} className="post-image" />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
