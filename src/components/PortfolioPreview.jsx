import ProjectCard from "./ProjectCard";

function PortfolioPreview({ formData, aboutMe, selectedProjects, onBackToBuilder }) {
  return (
    <div className="preview">
      <div className="preview-hero">
        <h1>{formData.fullName}</h1>
        <p className="preview-role">{formData.role}</p>
        <a href={`mailto:${formData.email}`}>{formData.email}</a>
      </div>

      {aboutMe && (
        <div className="preview-section">
          <h2>نبذة عني</h2>
          <p>{aboutMe}</p>
        </div>
      )}

      <div className="preview-section">
        <h2>المشاريع</h2>
        <div className="preview-projects-grid">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <button type="button" className="btn btn-secondary" onClick={onBackToBuilder}>
        تعديل البورتفوليو
      </button>
    </div>
  );
}

export default PortfolioPreview;
