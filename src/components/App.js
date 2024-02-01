// src/components/App.js
import React from "react";
import blogData from "../data/blog";

// Header component
function Header({ blogName }) {
  return (
    <header>
      <h1>{blogName}</h1>
    </header>
  );
}

// About component
function About({ imageSrc, aboutText }) {
  const defaultImageSrc = "https://via.placeholder.com/215";

  return (
    <aside>
      <img src={imageSrc || defaultImageSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

// Article component
function Article({ title, date, preview }) {
  const defaultDate = "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
    </article>
  );
}

// ArticleList component
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

// App component
function App() {
  return (
    <div className="App">
      <Header blogName="My Blog" />
      <About
        imageSrc="path_to_your_image" // Replace with the actual image source or leave as is for the placeholder
        aboutText="This is the about section of the blog."
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;


