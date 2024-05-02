import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchBlogPostById = async () => {
      
        const response = await fetch(`http://127.0.0.1:8000/api/update/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setAuthor(data.author);
        setContent(data.content);
     
    };

    fetchBlogPostById(); 
  }, [id]); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      const response = await fetch(`http://127.0.0.1:8000/api/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author, content }),
      });
      if (response.ok) {
        console.log("Blog post updated successfully");
      } else {
        console.error("Failed to update blog post");
      }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;

