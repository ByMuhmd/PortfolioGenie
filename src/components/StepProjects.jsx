import { useState } from "react";

function StepProjects({ repos, selectedProjects, onToggleProject, onUpdateDescription, onNext, onBack }) {
  const [loadingId, setLoadingId] = useState(null);

  function isSelected(project) {
    return selectedProjects.some((p) => p.id === project.id);
  }

  function handleImprove(project) {
    setLoadingId(project.id);

    // محاكاة تحسين الوصف تلقائيًا
    setTimeout(() => {
      const improvedText = `مشروع ${project.name} تم تطويره باستخدام ${project.language}، وبيقدم تجربة استخدام سريعة وسهلة.`;
      onUpdateDescription(project.id, improvedText);

      if (!isSelected(project)) {
        onToggleProject(project);
      }

      setLoadingId(null);
    }, 900);
  }

  return (
    <div className="card">
      <h2>اختر أفضل المشاريع</h2>
      <p className="subtitle">حدد المشاريع اللي عايز تظهر في البورتفوليو</p>

      <div className="projects-grid">
        {repos.map((project) => {
          const selectedProject = selectedProjects.find((p) => p.id === project.id);
          const descriptionToShow = selectedProject ? selectedProject.description : project.description;

          return (
            <div key={project.id} className={isSelected(project) ? "project-item selected" : "project-item"}>
              <div className="project-header">
                <h3>{project.name}</h3>
                <span>{project.language}</span>
              </div>

              <p>{descriptionToShow}</p>

              <div className="project-footer">
                <label>
                  <input
                    type="checkbox"
                    checked={isSelected(project)}
                    onChange={() => onToggleProject(project)}
                  />
                  إضافة للبورتفوليو
                </label>

                <button
                  type="button"
                  className="btn btn-small"
                  onClick={() => handleImprove(project)}
                  disabled={loadingId === project.id}
                >
                  {loadingId === project.id ? "جاري التحسين..." : "تحسين الوصف"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="actions">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          رجوع
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onNext}
          disabled={selectedProjects.length === 0}
        >
          التالي
        </button>
      </div>
    </div>
  );
}

export default StepProjects;
