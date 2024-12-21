import styles from "./page.module.css";
import connectDB from "@/database/db"; // Import your database connection function
import ProjectModel from "@/database/projectSchema"; // Import your Project model

// Fetch projects server-side
async function getProjects() {
  try {
    await connectDB(); // Ensure the database connection is established
    const projects = await ProjectModel.find().sort({ date: -1 }).exec(); // Fetch projects sorted by date
    return projects;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null; // Return null if there's an error
  }
}

export default async function Portfolio() {
  const projects = await getProjects(); 
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Portfolio</h1>
        <div className={styles.projectContainer}>
          <section className={styles.projectSection}>
            <h2 className={styles.sectionTitle}>My Projects</h2>

            {/* Render projects or show a fallback message */}
            {projects && projects.length > 0 ? (
              <ul className={styles.projectList}>
                {projects.map((project) => (
                  <li key={project._id} className={styles.projectItem}>
                    <div className={styles.projectImage}>
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <img
                            src={project.image || "/placeholder.png"}
                            alt={project.title || "Project Image"}
                            className={styles.image}
                          />
                        </a>
                      ) : (
                        <img
                          src={project.image || "/placeholder.png"}
                          alt={project.title || "Project Image"}
                          className={styles.image}
                        />
                      )}
                    </div>
                    <div className={styles.projectDetails}>
                      <h3 className={styles.projectName}>{project.title}</h3>
                      <p className={styles.projectDescription}>{project.description}</p>
                      <p className={styles.projectRole}>
                        <strong>Role:</strong> {project.role}
                      </p>
                      <p className={styles.projectTechnologies}>
                        <strong>Technologies:</strong> {project.technologies.join(", ")}
                      </p>
                      <ul className={styles.projectHighlights}>
                        <strong>Highlights:</strong>
                        {project.highlights.map((highlight: string, index: number) => (
                        <li key={index} className={styles.projectHighlightItem}>
                            {highlight}
                        </li>
                        ))}
                      </ul>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.learnMore}>
                          Learn More
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.noProjectsMessage}>
                No projects found or an error occurred. Please check back later.
              </p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
