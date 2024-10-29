import styles from "./page.module.css";

export default function Blog() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.blogTitle}>Colin's Blogs</h1>
                <div className={styles.blogContainer}>
                    {/* Blog content could be dynamically inserted here */}
                    <section className={styles.blogSection}>
                        <h2 className={styles.sectionTitle}>Latest Posts</h2>
                        {/* Add blog preview components or blog content here */}
                    </section>
                </div>
            </main>
        </div>
    );
}
