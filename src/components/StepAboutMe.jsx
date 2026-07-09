import { useState } from "react";

const tones = ["احترافي", "ودود", "واثق", "بسيط"];

function StepAboutMe({ fullName, aboutMe, tone, onChangeAboutMe, onChangeTone, onNext, onBack }) {
  const [isLoading, setIsLoading] = useState(false);

  function handleGenerate() {
    setIsLoading(true);

    setTimeout(() => {
      const text = `أنا ${fullName || "مطور"}، بشتغل على بناء واجهات مستخدم نظيفة وسريعة باستخدام React. بحب أتعلم تقنيات جديدة وأطور من نفسي باستمرار، وبدور دلوقتي على فرصة أقدر أساهم فيها بشكل حقيقي.`;
      onChangeAboutMe(text);
      setIsLoading(false);
    }, 900);
  }

  return (
    <div className="card">
      <h2>نبذة عني</h2>
      <p className="subtitle">اختر أسلوب الكتابة واكتب نبذة تعبر عنك</p>

      <div className="form-group">
        <label>الأسلوب</label>
        <select value={tone} onChange={(e) => onChangeTone(e.target.value)}>
          {tones.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <button type="button" className="btn btn-secondary" onClick={handleGenerate} disabled={isLoading}>
        {isLoading ? "جاري الكتابة..." : "اقترح لي نص"}
      </button>

      <div className="form-group" style={{ marginTop: "1.6rem" }}>
        <label>النبذة</label>
        <textarea
          rows={6}
          value={aboutMe}
          onChange={(e) => onChangeAboutMe(e.target.value)}
          placeholder="اكتب نبذة عنك هنا..."
        ></textarea>
      </div>

      <div className="actions">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          رجوع
        </button>
        <button type="button" className="btn btn-primary" onClick={onNext} disabled={!aboutMe.trim()}>
          التالي
        </button>
      </div>
    </div>
  );
}

export default StepAboutMe;
