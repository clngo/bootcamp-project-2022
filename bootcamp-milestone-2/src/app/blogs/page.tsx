import styles from "./page.module.css";
import connectDB from "../../database/db"; // Import your database connection function
import BlogModel from "../../database/blogSchema"; // Import your Blog model

// Fetch blogs server-side
async function getBlogs() {
  try {
    await connectDB(); // Ensure the database connection is established
    const blogs = await BlogModel.find().sort({ date: -1 }).exec(); // Fetch blogs sorted by date
    return blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null; // Return null if there's an error
  }
}

export default async function Blog() {
  const blogs = await getBlogs(); // Fetch blogs data

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.blogTitle}>Colin's Blogs</h1>
        <div className={styles.blogContainer}>
          <section className={styles.blogSection}>
            <h2 className={styles.sectionTitle}>Latest Posts</h2>

            {/* Render blogs or show a fallback message */}
            {blogs && blogs.length > 0 ? (
              <ul className={styles.blogList}>
                {blogs.map((blog) => (
                  <li key={blog._id} className={styles.blogItem}>
                    <h3 className={styles.blogPostTitle}>{blog.title}</h3>
                    <p className={styles.blogPostDate}>
                      {new Date(blog.date).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noBlogsMessage}>
                No blogs found or an error occurred. Please check back later.
              </p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
