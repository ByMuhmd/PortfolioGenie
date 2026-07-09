import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import StepIndicator from "./components/StepIndicator";
import StepPersonalInfo from "./components/StepPersonalInfo";
import StepGithubImport from "./components/StepGithubImport";
import StepProjects from "./components/StepProjects";
import StepAboutMe from "./components/StepAboutMe";
import StepReview from "./components/StepReview";
import PortfolioPreview from "./components/PortfolioPreview";
import "./index.css";

function App() {
  // page: home - builder - preview
  const [page, setPage] = useState("home");
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    email: "",
    githubUsername: "",
  });

  const [repos, setRepos] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [aboutMe, setAboutMe] = useState("");
  const [tone, setTone] = useState("احترافي");

  function handleFormChange(name, value) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleImportDone(profile, importedRepos) {
    setRepos(importedRepos);
  }

  function handleToggleProject(project) {
    const alreadySelected = selectedProjects.some((p) => p.id === project.id);

    if (alreadySelected) {
      setSelectedProjects(selectedProjects.filter((p) => p.id !== project.id));
    } else {
      setSelectedProjects([...selectedProjects, project]);
    }
  }

  function handleUpdateDescription(projectId, newDescription) {
    const projectInList = repos.find((p) => p.id === projectId);
    const alreadySelected = selectedProjects.some((p) => p.id === projectId);

    if (alreadySelected) {
      setSelectedProjects(
        selectedProjects.map((p) => (p.id === projectId ? { ...p, description: newDescription } : p))
      );
    } else if (projectInList) {
      setSelectedProjects([...selectedProjects, { ...projectInList, description: newDescription }]);
    }
  }

  function goNext() {
    setStep(step + 1);
  }

  function goBack() {
    setStep(step - 1);
  }

  function handleStart() {
    setPage("builder");
    setStep(0);
  }

  function handleGoHome() {
    setPage("home");
    setStep(0);
  }

  function handlePublish() {
    setPage("preview");
  }

  function handleBackToBuilder() {
    setPage("builder");
    setStep(4);
  }

  return (
    <div className="app">
      <Header onGoHome={handleGoHome} />

      <main className="main">
        {page === "home" && <HomePage onStart={handleStart} />}

        {page === "builder" && (
          <>
            <StepIndicator currentStep={step} />

            {step === 0 && (
              <StepPersonalInfo formData={formData} onChange={handleFormChange} onNext={goNext} />
            )}

            {step === 1 && (
              <StepGithubImport
                githubUsername={formData.githubUsername}
                onImportDone={handleImportDone}
                onNext={goNext}
                onBack={goBack}
              />
            )}

            {step === 2 && (
              <StepProjects
                repos={repos}
                selectedProjects={selectedProjects}
                onToggleProject={handleToggleProject}
                onUpdateDescription={handleUpdateDescription}
                onNext={goNext}
                onBack={goBack}
              />
            )}

            {step === 3 && (
              <StepAboutMe
                fullName={formData.fullName}
                aboutMe={aboutMe}
                tone={tone}
                onChangeAboutMe={setAboutMe}
                onChangeTone={setTone}
                onNext={goNext}
                onBack={goBack}
              />
            )}

            {step === 4 && (
              <StepReview
                formData={formData}
                selectedProjects={selectedProjects}
                tone={tone}
                onPublish={handlePublish}
                onBack={goBack}
              />
            )}
          </>
        )}

        {page === "preview" && (
          <PortfolioPreview
            formData={formData}
            aboutMe={aboutMe}
            selectedProjects={selectedProjects}
            onBackToBuilder={handleBackToBuilder}
          />
        )}
      </main>
    </div>
  );
}

export default App;
