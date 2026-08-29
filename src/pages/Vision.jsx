const pillars = [
  {
    id: '01',
    title: 'CONSTRUCTIVE DIALOGUE',
    text: 'Moving past polarizing arguments toward nuanced, considered conversations.',
  },
  {
    id: '02',
    title: 'DIVERSE PERSPECTIVES',
    text: 'Multidisciplinary thinkers challenging status-quo assumptions.',
  },
  {
    id: '03',
    title: 'IDEA INCUBATION',
    text: 'Refining raw thoughts through shared intellect and honest scrutiny.',
  },
  {
    id: '04',
    title: 'YOUTH LEADERSHIP',
    text: 'Empowering future decision-makers with critical judgment.',
  },
];

export default function Vision() {
  return (
    <div className="page vision-page">
      <header className="page-header">
        <span className="page-number">02 / VISION</span>
        <span className="page-tagline">THE PURPOSE</span>
      </header>

      <h1 className="page-headline">Why Parley Exists.</h1>
      <p className="page-description">
        Because meaningful progress rarely begins with an answer. It begins with a
        better question — and a room willing to discuss it.
      </p>

      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <div className="pillar-card" key={pillar.id}>
            <span className="pillar-id">{pillar.id}</span>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-text">{pillar.text}</p>
          </div>
        ))}
      </div>

      <section className="statement-section">
        <p>
          PARLEY IS NOT ABOUT WINNING AN ARGUMENT.
          <br />
          <span className="statement-accent">It is about leaving the room with a better idea.</span>
        </p>
      </section>
    </div>
  );
}