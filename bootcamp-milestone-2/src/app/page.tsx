import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Colin Ngo</h1>
        <div className={styles.about}>
          <div className={styles.aboutImage}>
            <Image
              src="/colin.png"
              alt="A video of an image of the sky and clouds being too big"
              width={180}
              height={180}
              priority
            />
          </div>
          <div className={styles.aboutText}>
            <p>
              This website is for the <strong>Hack4Impact</strong> Starter pack. Hack4Impact is a <em>non-profit
              organization</em>.
            </p>
            <p>
              An energetic collaborator in solving real-world problems through computer vision.
              Hello! I am currently a rising 3rd-year student with a major in computer science at Cal Poly San Luis Obispo.
              I’m passionate about helping others through technology and discovering opportunities to grow personally.
              The interaction of computers and humans drives me to create personal projects, honing my problem-solving skills and coding expertise.
              My career interests lie in computer vision, machine learning, and AI.
            </p>
          </div>
        </div>

        {/* Placeholder for future sections */}
        <section className={styles.section}></section>
        <section className={styles.section}></section>
        <section className={styles.section}></section>
      </main>
    </div>
  );
}
