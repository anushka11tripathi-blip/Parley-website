const stages = [
  {
    id: '01',
    title: 'Moderated Circles',
    text: 'Structured round-table moderation ensuring equal voice for every participant.',
  },
  {
    id: '02',
    title: 'Cross-Domain Inquiry',
    text: 'Curated discussion prompts spanning technology, society, and everything between.',
  },
  {
    id: '03',
    title: 'Synthesis & Output',
    text: 'Transforming insights into actionable outcomes the room can carry forward.',
  },
];

export default function Experience() {
  return (
    <div className="page experience-page">
      <header className="page-header">
        <span className="page-number">03 / EXPERIENCE</span>
        <span className="page-tagline">THE FORMAT</span>
      </header>

      <h1 className="page-headline">Enter the Conversation.</h1>
      <p className="page-description">
        A carefully structured environment designed to turn conversation into insight,
        and insight into action.
      </p>

      <div className="stages-grid">
        {stages.map((stage) => (
          <div className="stage-card" key={stage.id}>
            <span className="stage-id">{stage.id}</span>
            <h3 className="stage-title">{stage.title}</h3>
            <p className="stage-text">{stage.text}</p>
          </div>
        ))}
      </div>

      <section className="cta-banner">
        <h2>Bring your perspective.</h2>
        <a href="mailto:saturangle@gla.ac.in" className="btn btn-primary">
          Connect with Saturangle ↗
        </a>
      </section>
    </div>
  );
}