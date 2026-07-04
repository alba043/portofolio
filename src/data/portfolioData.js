const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`

export const portfolioData = {
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#staff-experience' },
    { label: 'Communities', href: '#past-roles' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact Me', href: '#contact' },
  ],
  hero: {
    badge: 'Discord Staff Portfolio',
    name: 'Cixp',
    title: 'Discord Staff, Server Leadership & Community Management',
    profileImage: {
      src: assetPath('profile/cixp-pfp.png'),
      alt: 'Cixp profile avatar',
    },
    subtitle: 'Moderation, administration, development, and staff leadership across active communities',
    support:
      'Experienced Discord staff member with a strong background in moderation, administration, and community management. I have helped grow and maintain multiple servers while improving engagement, safety, and professionalism.',
    primaryAction: { label: 'Contact Me', href: '#contact' },
    secondaryAction: { label: 'Staff Experience', href: '#staff-experience' },
  },
  about: {
    heading: 'ABOUT ME',
    text:
      "Hi, I'm Cixp. I have experience helping Discord and Minecraft communities through moderation, administration, staff management, development work, community operations, player support, and server organization. I focus on keeping communities active, safe, professional, and clear for members.",
    stats: [
      { value: '6K+', label: 'Largest Community' },
      { value: '7+', label: 'Communities Led' },
      { value: 'Staff', label: 'Management Focus' },
    ],
  },
  featuredRoles: [
    {
      name: 'UNSTABLE SMP',
      role: 'Retired Owner',
      description:
        'Led a large SMP community with staff oversight, community safety, member engagement, and day-to-day operations.',
      icon: '6K+',
      stats: [
        { label: 'Members', value: '6K+' },
        { label: 'Status', value: 'Retired' },
      ],
    },
    {
      name: 'PrismMC SMP',
      role: 'Owner + Lead Developer',
      description:
        'Owned and developed server systems while managing staff, operations, community structure, and player experience.',
      icon: '800+',
      stats: [
        { label: 'Members', value: '800+' },
        { label: 'Status', value: 'Retired' },
      ],
    },
    {
      name: 'UnstablePVP',
      role: 'Director (Co-Owner) + Lead Developer',
      description:
        'Directed operations and development for a PvP community, supporting leadership decisions, staff structure, and technical improvements.',
      icon: '400+',
      stats: [
        { label: 'Members', value: '400+' },
        { label: 'Status', value: 'Retired' },
      ],
    },
  ],
  pastRoles: [
    {
      name: 'Cixp Development Group',
      role: 'Founder + Lead Developer | 50+ Members (Retired)',
      description: 'Founded and led a development-focused community with project direction, staff structure, and technical support.',
    },
    {
      name: 'TrueHearth Network',
      role: 'Founder + Director | 50+ Members (Retired)',
      description: 'Directed a community network with leadership, staff oversight, member support, and server operations.',
    },
    {
      name: 'Shield Development',
      role: 'Founder + Developer | 50 Members',
      description: 'Built and supported a development group focused on practical server and community work.',
    },
    {
      name: 'SMP Lounge',
      role: 'Manager + Staff Manager | 350+ Members',
      description: 'Managed staff workflows, moderation quality, community support, and member-facing operations.',
    },
  ],
  specializedSkills: [
    {
      title: 'Community Moderation',
      description: 'Rule enforcement, conflict handling, player reports, and fair staff decisions.',
      label: 'MOD',
    },
    {
      title: 'Staff Management',
      description: 'Coordinating teams, setting expectations, reviewing decisions, and keeping staff work organized.',
      label: 'TEAM',
    },
    {
      title: 'Server Administration',
      description: 'Channels, roles, permissions, onboarding flows, server organization, and routine checks.',
      label: 'OPS',
    },
    {
      title: 'Discord Management',
      description: 'Moderation channels, announcements, report workflows, and community structure.',
      label: 'DISC',
    },
    {
      title: 'Community Growth',
      description: 'Improving engagement, professionalism, member retention, and community presentation.',
      label: 'GROW',
    },
    {
      title: 'Player Support',
      description: 'Answering questions, handling issues, and helping members understand expectations.',
      label: 'HELP',
    },
    {
      title: 'Lead Development',
      description: 'Planning technical work, testing changes, supporting server features, and leading development tasks.',
      label: 'DEV',
    },
    {
      title: 'Safety & Professionalism',
      description: 'Building clearer rules, safer spaces, consistent moderation standards, and cleaner staff processes.',
      label: 'SAFE',
    },
  ],
  contact: {
    heading: 'REACH OUT ON DISCORD',
    text: 'Reach out for Discord staff work, moderation, administration, community management, development projects, or questions about past server experience.',
    discordUsername: 'Cixp_',
    discordServer: {
      label: 'Join Discord Server',
      href: 'https://discord.gg/huHf3pTpsG',
    },
  },
}
