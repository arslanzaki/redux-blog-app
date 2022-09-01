import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "../features/posts/postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onAddPostClick = () => {
    if (title && content) {
      dispatch(addPost({ id: nanoid(), title, content }));

      setTitle("");
      setContent("");
    }
  };
  return (
    <div>
      <section className="border border-gray-500 rounded-lg w-96 mx-auto flex flex-col justify-center items-center my-8 py-8">
        <h2 className="text-3xl font-bold mb-4">Add New Post</h2>
        <form>
          <div className="w-72">
            <div className="mb-4 flex flex-col">
              <label htmlFor="postTitle" className="text-xl font-semibold">
                Post Title:{" "}
              </label>
              <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChange}
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="postContent" className="text-xl font-semibold">
                Content:{" "}
              </label>
              <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChange}
              />
            </div>
          </div>

          <button onClick={onAddPostClick} type="button" className="py-2 px-4 bg-red-600 text-white font-bold rounded-lg">
            Add Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPostForm;
