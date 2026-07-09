function HomePage({ onStart }) {
  return (
    <section className="home">
      <h2>حوّل حسابك على GitHub إلى بورتفوليو احترافي</h2>
      <p>
        PortfolioGenie بيساعد المطورين الجدد يعملوا بورتفوليو منظم يعرض مشاريعهم بشكل
        احترافي بخطوات بسيطة.
      </p>
      <button className="btn btn-primary" onClick={onStart}>
        ابدأ الآن
      </button>
    </section>
  );
}

export default HomePage;
