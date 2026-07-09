const steps = ["البيانات الشخصية", "ربط GitHub", "المشاريع", "نبذة عني", "المراجعة"];

function StepIndicator({ currentStep }) {
  return (
    <ul className="step-indicator">
      {steps.map((label, index) => (
        <li
          key={label}
          className={
            index === currentStep ? "step active" : index < currentStep ? "step done" : "step"
          }
        >
          <span className="step-number">{index < currentStep ? "✓" : index + 1}</span>
          {label}
        </li>
      ))}
    </ul>
  );
}

export default StepIndicator;
