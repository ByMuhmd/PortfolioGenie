import { useState, useEffect } from "react";
import mockRepos from "../data/mockRepos";

function StepGithubImport({ githubUsername, onImportDone, onNext, onBack }) {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // محاكاة طلب بيانات من GitHub API
    // هنا هيتم استبدال الكود ده بطلب fetch حقيقي لما نربط الباك اند
    const timer = setTimeout(() => {
      const fakeProfile = {
        username: githubUsername,
        bio: "مطور ويب شغوف ببناء تطبيقات نظيفة وسهلة الاستخدام",
        reposCount: mockRepos.length,
      };

      setProfile(fakeProfile);
      onImportDone(fakeProfile, mockRepos);
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [githubUsername, onImportDone]);

  return (
    <div className="card">
      <h2>ربط حساب GitHub</h2>
      <p className="subtitle">جاري تحليل حساب @{githubUsername} وجلب المشاريع...</p>

      {isLoading && <div className="spinner"></div>}

      {!isLoading && profile && (
        <div className="profile-box">
          <strong>@{profile.username}</strong>
          <p>{profile.bio}</p>
          <span>{profile.reposCount} مشروع تم العثور عليهم</span>
        </div>
      )}

      <div className="actions">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          رجوع
        </button>
        <button type="button" className="btn btn-primary" onClick={onNext} disabled={isLoading}>
          التالي
        </button>
      </div>
    </div>
  );
}

export default StepGithubImport;
