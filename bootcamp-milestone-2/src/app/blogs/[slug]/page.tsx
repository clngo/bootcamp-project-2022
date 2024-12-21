import React from "react";
import ReactMarkdown from "react-markdown";

// Define the Props type for the component
type Props = {
    params: Promise<{slug : string}>;
};

// A helper function to fetch blog content
async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store", // Prevent caching for dynamic data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err) {
    console.error(`Error fetching blog: ${err}`);
    return null;
  }
}

// The Blog component
export default async function Blog({params }: Props) {
    const slug = (await params).slug
    const blog = await getBlog(slug);
  // Handle case where the blog post is not found
  if (!blog) {
    return (
      <div>
        <h1>Blog Not Found</h1>
        <p>We couldn't find the blog you're looking for. Please try again later.</p>
      </div>
    );
  }

  // Render the blog content (assuming markdown format)
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <div>
        {/* If content is in markdown, render it using react-markdown */}
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );
}
