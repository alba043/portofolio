import QuantumOrb from './QuantumOrb'

export default function Hero({ hero }) {
  const nameLetters = hero.name.split('')

  return (
    <section className="hero-section section-band" id="home">
      <QuantumOrb />
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <div className="profile-frame" data-reveal="zoom" style={{ '--reveal-delay': '40ms' }}>
            <img alt={hero.profileImage.alt} src={hero.profileImage.src} />
            <span className="online-dot" aria-label="Online" />
          </div>
          <p className="eyebrow" data-reveal="up" style={{ '--reveal-delay': '120ms' }}>
            {hero.badge}
          </p>
          <h1 className="hero-name" data-reveal="up" aria-label={hero.name} style={{ '--reveal-delay': '170ms' }}>
            {nameLetters.map((letter, index) => (
              <span
                className="hero-name-letter"
                aria-hidden="true"
                key={`${letter}-${index}`}
                style={{ '--letter-delay': `${index * 56 + 120}ms` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="hero-title" data-reveal="up" style={{ '--reveal-delay': '260ms' }}>
            {hero.title}
          </p>
          <p className="hero-subtitle" data-reveal="up" style={{ '--reveal-delay': '330ms' }}>
            {hero.subtitle}
          </p>
          <p className="hero-support" data-reveal="up" style={{ '--reveal-delay': '400ms' }}>
            {hero.support}
          </p>
          <div className="hero-actions" aria-label="Portfolio shortcuts" data-reveal="up" style={{ '--reveal-delay': '470ms' }}>
            <a className="button button-primary button-with-icon" href={hero.primaryAction.href}>
              <span className="button-icon" aria-hidden="true">
                D
              </span>
              {hero.primaryAction.label}
            </a>
            <a className="button button-secondary" href={hero.secondaryAction.href}>
              {hero.secondaryAction.label}
            </a>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Skip to about section">
        <span />
      </a>
    </section>
  )
}
