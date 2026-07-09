function StepReview({ formData, selectedProjects, tone, onPublish, onBack }) {
  return (
    <div className="card">
      <h2>مراجعة البورتفوليو</h2>
      <p className="subtitle">تأكد إن كل البيانات صحيحة قبل النشر</p>

      <ul className="review-list">
        <li>
          <strong>الاسم:</strong> {formData.fullName}
        </li>
        <li>
          <strong>المسمى الوظيفي:</strong> {formData.role}
        </li>
        <li>
          <strong>عدد المشاريع المختارة:</strong> {selectedProjects.length}
        </li>
        <li>
          <strong>أسلوب الكتابة:</strong> {tone}
        </li>
      </ul>

      <div className="actions">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          رجوع
        </button>
        <button type="button" className="btn btn-primary" onClick={onPublish}>
          نشر البورتفوليو
        </button>
      </div>
    </div>
  );
}

export default StepReview;
