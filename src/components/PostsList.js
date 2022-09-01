import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article
      key={post.id}
      className="m-5 p-5 w-96 rounded-lg border border-gray-600"
    >
      <h3 className="text-xl font-bold mb-4">{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <div>
      <section className="flex flex-col justify-between items-center">
        <h2 className="text-3xl text-center font-bold">Posts</h2>
        <div>{renderedPosts}</div>
      </section>
    </div>
  );
};

export default PostsList;
