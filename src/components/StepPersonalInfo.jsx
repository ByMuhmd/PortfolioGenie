import { useState } from "react";

function StepPersonalInfo({ formData, onChange, onNext }) {
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    onChange(name, value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "الاسم مطلوب";
    if (!formData.role.trim()) newErrors.role = "المسمى الوظيفي مطلوب";
    if (!formData.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!formData.githubUsername.trim()) newErrors.githubUsername = "اسم المستخدم في GitHub مطلوب";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>البيانات الشخصية</h2>

      <div className="form-group">
        <label>الاسم بالكامل</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="محمد مبروك"
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}
      </div>

      <div className="form-group">
        <label>المسمى الوظيفي</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Front-End Developer"
        />
        {errors.role && <span className="error">{errors.role}</span>}
      </div>

      <div className="form-group">
        <label>البريد الإلكتروني</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@mail.com"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>اسم المستخدم في GitHub</label>
        <input
          type="text"
          name="githubUsername"
          value={formData.githubUsername}
          onChange={handleChange}
          placeholder="mohamed-dev"
        />
        {errors.githubUsername && <span className="error">{errors.githubUsername}</span>}
      </div>

      <div className="actions">
        <button type="submit" className="btn btn-primary">
          التالي
        </button>
      </div>
    </form>
  );
}

export default StepPersonalInfo;
