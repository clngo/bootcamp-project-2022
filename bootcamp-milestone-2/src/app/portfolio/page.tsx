import styles from "./page.module.css";

export default function Portfolio() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.pageTitle}>Portfolio</h1>
                
                <div className={styles.project}>
                    <div className={styles.projectImage}>
                        <a href="resume.html">
                            <img src="/handlandmarks.png" alt="Hand Landmarks Detection Project" className={styles.image} />
                        </a>
                    </div>
                    
                    <div className={styles.projectDetails}>
                        <h2 className={styles.projectName}>Project: Hand Landmarks Detection</h2>
                        <p className={styles.projectDescription}>
                            Using the MediaPipe Hand Landmarker, enabling accurate landmark detection of hands, ensuring robust and efficient performance.
                            Successfully integrated the hand detection device with image data, both as static data and in real-time continuous streams.
                            Utilized image coordinates to design and implement a visual effects rendering system overlaying effects for detected landmarks.
                            Accommodated multiple hand detection and provided accurate handedness identification (left/right hand) for each detected hand.
                        </p>
                        <a href="resume.html" className={styles.learnMore}>Learn More</a>
                    </div>
                </div>
            </main>
        </div>
    );
}
