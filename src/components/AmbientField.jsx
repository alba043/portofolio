const particles = Array.from({ length: 46 }, (_, index) => {
  const x = (index * 23 + 11) % 100
  const y = (index * 41 + 7) % 100
  const driftX = ((index % 7) - 3) * 8
  const driftY = 18 + (index % 6) * 9
  const duration = 8 + (index % 8) * 0.9

  return {
    id: index + 1,
    style: {
      '--ambient-x': `${x}%`,
      '--ambient-y': `${y}%`,
      '--ambient-drift-x': `${driftX}px`,
      '--ambient-drift-y': `${driftY * -1}px`,
      '--ambient-size': `${index % 5 === 0 ? 4 : 3}px`,
      '--ambient-duration': `${duration}s`,
      '--ambient-delay': `${index * -0.31}s`,
    },
  }
})

export default function AmbientField() {
  return (
    <div className="ambient-field" aria-hidden="true">
      <span className="ambient-scan ambient-scan-one" />
      <span className="ambient-scan ambient-scan-two" />
      {particles.map((particle) => (
        <span className="ambient-particle" key={particle.id} style={particle.style} />
      ))}
    </div>
  )
}
