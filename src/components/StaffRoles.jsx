function RoleCard({ index, role, tone }) {
  return (
    <article
      className={`role-card role-card-${tone}`}
      data-reveal="up"
      style={{ '--role-index': index, '--reveal-delay': `${index * 80}ms` }}
    >
      <div className="role-card-header">
        <span className="role-icon" aria-hidden="true">
          {role.icon ?? 'STAFF'}
        </span>
        <div>
          <h3>{role.name}</h3>
          <p>{role.role}</p>
        </div>
      </div>
      <p className="role-description">{role.description}</p>
      {role.stats ? (
        <dl className="role-stats">
          {role.stats.map((stat) => (
            <div key={`${role.name}-${stat.label}`}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </article>
  )
}

export default function StaffRoles({ featuredRoles, pastRoles }) {
  return (
    <>
      <section className="section-band section-band-muted roles-section" id="staff-experience">
        <div className="section-inner">
          <div className="section-heading section-heading-centered" data-reveal="up">
            <p className="eyebrow">Experience highlights</p>
            <h2>SERVER LEADERSHIP</h2>
          </div>
          <div className="featured-role-grid">
            {featuredRoles.map((role, index) => (
              <RoleCard index={index} key={role.name} role={role} tone="featured" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-band roles-section" id="past-roles">
        <div className="section-inner">
          <div className="section-heading section-heading-centered" data-reveal="up">
            <p className="eyebrow">More communities</p>
            <h2>OTHER ROLES I HAVE HELD</h2>
          </div>
          <div className="past-role-grid">
            {pastRoles.map((role, index) => (
              <RoleCard index={index} key={role.name} role={role} tone="past" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
