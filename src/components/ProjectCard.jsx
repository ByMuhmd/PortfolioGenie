function ProjectCard({ project }) {
  return (
    <div className="preview-project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="preview-project-meta">
        <span>{project.language}</span>
        <span>⭐ {project.stars}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
