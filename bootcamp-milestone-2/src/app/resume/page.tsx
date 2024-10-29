import Image from "next/image";
import styles from "./page.module.css";

export default function Resume() {
  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <a href="/">Ngo Archives</a>
        </h1>
        <ul className={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.resumeTitle}>Resume</h1>
        <a href="ColinNgo_Resume.pdf" download>Download Resume</a>
        <div className={styles.resume}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>BA Computer Science 2022-2026</h3>
              <h4>California Polytechnic State University, San Luis Obispo</h4>
            </div>

            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>Eagle Scout Service Project Community Garden</h3>
              <p className={styles.entryDescription}>
                Revitalized an underutilized Boys and Girls Club community garden by implementing a comprehensive refurbishment plan
                <br />
                Mobilized and coordinated a team of 12 dedicated volunteers, assigning tasks such as cleaning, topsoil replacement, watering, and
                proper plant installation using appropriate equipment and techniques while orchestrating meticulous refurbishment efforts
                <br />
                Demonstrated personal commitment by contributing approximately $500 of personal funds to the project budget, ensuring the
                successful execution of the garden refurbishment initiative with responsibility for managing project expenses, safety measures,
                logistics, and securing necessary permissions; coordinating efforts between the Boy Scout Troop and the Boys and Girls Club.
              </p>
              <h3 className={styles.entryTitle}>Boys and Girls Club</h3>
              <p className={styles.entryDescription}>
                Enabled 50+ children ages 5-13 years old in English, Math, Social Science, and daily homework; improved homework completion.
                <br />
                Co-led various sporting events and hosted tournaments such as flag football, basketball, dodgeball, and other outdoor activities.
                <br />
                Responsible for transportation of sport equipment, snacks, water, safety, and well-being of all students involved.
              </p>
            </div>

            <h2 className={styles.sectionTitle}>Skills</h2>
            <h3 className={styles.entryTitle}>Programming Languages</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>Scratch</li>
              <li>C</li>
              <li>Assembly</li>
            </ul>
            <h3 className={styles.entryTitle}>Technical Skills</h3>
            <ul>
              <li>145 WPM</li>
              <li>Canva</li>
              <li>Zoom</li>
              <li>Microsoft Office (Powerpoint, Excel, Outlook, Word)</li>
              <li>Google Suite</li>
              <li>Slack</li>
              <li>Design (Photoshop, Filmora, Adobe Illustrator)</li>
            </ul>

            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.entry}>
              <h3 className={styles.entryTitle}>Hand Landmarks Detection</h3>
              <div className={styles.aboutImage}>
                <img src="handlandmarks.png" width="15%" height="15%" alt="Hand Landmarks" />
              </div>
              <p className={styles.entryDescription}>
                Using the MediaPipe Hand Landmarker, enabling accurate landmark detection of hands, ensuring robust and efficient performance.
                Successfully integrated the hand detection device with image data, both as static data and in real-time continuous streams.
                Utilized image coordinates to design and implement a visual effects rendering system overlaying effects for detected landmarks.
                Accommodated multiple hand detection and provided accurate handedness identification (left/right hand) for each detected hand.
              </p>

              <h3 className={styles.entryTitle}>Object-Oriented Program and Design World</h3>
              <div className={styles.aboutImage}>
                <img src="javaworld.png" width="15%" height="15%" alt="Java World" />
              </div>
              <p className={styles.entryDescription}>
                Developed a custom Java class incorporating object-oriented concepts such as type casting, access modifiers, polymorphism,
                method overloading, single responsibility principle, coupling, cohesion, information hiding, abstract inheritance, and generics.
                Design an inheritance hierarchy with an abstract superclass and multiple concrete subclasses which incorporates method overriding.
                Created comprehensive unit tests to achieve full code coverage, ensuring the accuracy and reliability of the class's functionality.
              </p>
            </div>

            <h2 className={styles.sectionTitle}>Coursework</h2>
            <h3 className={styles.entryTitle}>California Polytechnic State University, San Luis Obispo</h3>
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>Object Oriented Development and Designs</li>
              <li>Computer Organization</li>
              <li>Discrete Structures</li>
              <li>Systems Programming</li>
              <li>Calculus 3</li>
              <li>Physics 2</li>
            </ul>

            <h2 className={styles.sectionTitle}>Awards</h2>
            <ul>
              <li>National Qualifier for National Speech and Debate Association, June 2021</li>
              <li>Academic All American, March 2022</li>
              <li>Boy Scout Eagle Rank, May 2022</li>
              <li>Music Teachers’ Association of California Certificate of Merit Advanced Level 10</li>
            </ul>

            <h2 className={styles.sectionTitle}>Interests</h2>
            <p>
              Investing, Swimming, Game Development, Duolingo, Leetcode, Codeforces, Video Editing, Running
            </p>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        © 2024 Ngo Archives | All Rights Reserved
      </footer>
    </div>
  );
}
