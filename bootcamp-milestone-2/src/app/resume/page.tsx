// src/app/page.tsx
import Image from "next/image";
import styles from "./page.module.css";
// import BlogPreview from '@/components/blogPreview'; // Ensure this path is correct
// import blogs from '@/app/blogData'; // Ensure this path is correct

export default function Resume() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.resumeTitle}>Resume</h1>
                <a href="ColinNgo_Resume.pdf" download>Download Resume</a>
                <div className={styles.resume}>
                    <section className="section">
                        <h2 className="section-title">Education</h2>
                        <div className="entry">
                            <h3 className="entry-title">BA Computer Science 2022-2026</h3>
                            <h4>California Polytechnic State University, San Luis Obispo</h4>
                        </div>

                        <h2 className="section-title">Experience</h2>
                        <div className="entry">
                            <h3 className="entry-title">Eagle Scout Service Project Community Garden</h3>
                            <p className="entry-description">
                                Revitalized an underutilized Boys and Girls Club community garden by implementing a comprehensive refurbishment plan.
                                Mobilized a team of 12 volunteers for tasks like cleaning, topsoil replacement, and proper plant installation.
                            </p>
                            <h3 className="entry-title">Boys and Girls Club</h3>
                            <p className="entry-description">
                                Enabled 50+ children in English, Math, Social Science, and daily homework; improved homework completion.
                                Co-led various sporting events and hosted tournaments.
                            </p>
                        </div>

                        <h2 className="section-title">Skills</h2>
                        <h3 className="entry-title">Programming Languages</h3>
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                            <li>Scratch</li>
                            <li>C</li>
                            <li>Assembly</li>
                        </ul>
                        <h3 className="entry-title">Technical Skills</h3>
                        <ul>
                            <li>145 WPM</li>
                            <li>Canva</li>
                            <li>Zoom</li>
                            <li>Microsoft Office</li>
                            <li>Google Suite</li>
                            <li>Slack</li>
                            <li>Adobe Photoshop, Filmora, Adobe Illustrator</li>
                        </ul>

                        <h2 className="section-title">Projects</h2>
                        <div className="entry">
                            <h3 className="entry-title">Hand Landmarks Detection</h3>
                            <div className="about-image">
                                <Image src="/handlandmarks.png" width={150} height={150} alt="Hand Landmarks" />
                            </div>
                            <p className="entry-description">
                                Used MediaPipe for hand landmark detection in both static and real-time data streams.
                                Implemented visual effects based on detected landmarks, supporting multi-hand detection.
                            </p>

                            <h3 className="entry-title">Object-Oriented Program and Design World</h3>
                            <div className="about-image">
                                <Image src="/javaworld.png" width={300} height={250} alt="Java World Project" />
                            </div>
                            <p className="entry-description">
                                Developed a custom Java class with object-oriented principles like inheritance, polymorphism, and unit testing.
                            </p>
                        </div>

                        <h2 className="section-title">Coursework</h2>
                        <h3 className="entry-title">California Polytechnic State University, San Luis Obispo</h3>
                        <ul>
                            <li>Data Structures and Algorithms</li>
                            <li>Object Oriented Development and Designs</li>
                            <li>Computer Organization</li>
                            <li>Discrete Structures</li>
                            <li>Systems Programming</li>
                            <li>Calculus 3</li>
                            <li>Physics 2</li>
                        </ul>

                        <h2 className="section-title">Awards</h2>
                        <ul>
                            <li>National Qualifier for National Speech and Debate Association, June 2021</li>
                            <li>Academic All American, March 2022</li>
                            <li>Boy Scout Eagle Rank, May 2022</li>
                            <li>Music Teachers’ Association of California Certificate of Merit Advanced Level 10</li>
                        </ul>

                        <h2 className="section-title">Interests</h2>
                        <p>Investing, Swimming, Game Development, Duolingo, Leetcode, Codeforces, Video Editing, Running</p>
                    </section>
                </div>
            </main>
        </div>
    );
}
