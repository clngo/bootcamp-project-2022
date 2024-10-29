import styles from "./page.module.css";

export default function Contact() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.contactTitle}>Contact</h1>
                <form className={styles.contactForm}>
                    <label htmlFor="name" className={styles.label}>Name:</label>
                    <input type="text" id="name" name="Name" className={styles.input} required />
                    
                    <label htmlFor="email" className={styles.label}>Email:</label>
                    <input type="email" id="email" name="Email" className={styles.input} required />
                    
                    <label htmlFor="message" className={styles.label}>Message:</label>
                    <textarea id="message" name="Message" className={styles.textarea} required></textarea>
                    
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
            </main>
        </div>
    );
}
