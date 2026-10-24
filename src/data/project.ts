/**
 * GECRIS — central project information
 * ------------------------------------
 * Edit this file to update project-wide facts shown across the website
 * (header, footer, home page, About page, Contact page, SEO metadata).
 *
 * Anything wrapped in [square brackets] or marked `placeholder: true` is
 * PLACEHOLDER content. Replace it with verified information from the Grant
 * Agreement before publishing. Do not invent official figures or dates.
 */

export const project = {
  acronym: 'GECRIS',
  title: 'Green, Ethical and Sustainable Computing',
  // Full official project title as written in the Grant Agreement.
  fullTitle: '[Full official project title — to be confirmed from the Grant Agreement]',
  tagline: 'Building capacity in green, ethical and sustainable computing across higher education.',
  number: '101325094',
  programme: 'Erasmus+',
  action: 'Capacity Building in Higher Education (CBHE)',
  // Fill in once confirmed, using ISO dates (YYYY-MM-DD). Leave null to show "To be confirmed".
  startDate: null as string | null,
  endDate: null as string | null,
  durationMonths: null as number | null,

  description:
    'GECRIS is an Erasmus+ Capacity Building in Higher Education project that brings together universities and partners to modernise computing curricula and strengthen institutional capacity in green, ethical and sustainable computing.',

  background: [
    'Computing technologies are central to economic and social development, but their environmental footprint and ethical implications are growing. Data centres, AI training, and short device lifecycles consume significant energy and resources, while automated decision-making raises questions of fairness, transparency and accountability.',
    'Higher education institutions play a key role in preparing graduates who can design, deploy and govern technology responsibly. Many computing programmes, however, still treat sustainability and ethics as optional topics rather than core competences.',
    '[Placeholder — insert the project-specific background and needs analysis from the approved proposal.]',
  ],

  overview:
    'Through international collaboration, GECRIS supports partner higher education institutions to integrate green, ethical and sustainable computing into teaching, learning and institutional practice. The project combines curriculum modernisation, staff training, shared learning resources and dissemination activities.',

  objectives: [
    {
      icon: 'GraduationCap',
      title: 'Modernise curricula',
      text: 'Develop or update courses and modules that embed green, ethical and sustainable computing in higher education programmes.',
    },
    {
      icon: 'Users',
      title: 'Build staff capacity',
      text: 'Train academic and technical staff in sustainable and responsible computing practices and modern teaching methods.',
    },
    {
      icon: 'Leaf',
      title: 'Promote green computing',
      text: 'Raise awareness of the environmental impact of computing and promote energy- and resource-efficient practices.',
    },
    {
      icon: 'Scale',
      title: 'Advance ethical technology',
      text: 'Foster responsible approaches to AI, data and digital systems grounded in fairness, transparency and accountability.',
    },
    {
      icon: 'Network',
      title: 'Strengthen cooperation',
      text: 'Build lasting networks between European and partner-country institutions for teaching, research and knowledge exchange.',
    },
    {
      icon: 'BookOpen',
      title: 'Share open resources',
      text: 'Produce publicly available learning materials and guidelines that institutions beyond the consortium can reuse.',
    },
  ],

  scope: [
    'Curriculum development and modernisation in computing-related study programmes',
    'Training of academic and technical staff',
    'Development of open educational resources',
    'Institutional strategies for sustainable and responsible digital practice',
    'Dissemination, exploitation and sustainability of project results',
  ],

  targetGroups: [
    { title: 'Students', text: 'Undergraduate and postgraduate students in computing and related disciplines.' },
    { title: 'Academic staff', text: 'Lecturers and researchers who design and deliver computing curricula.' },
    { title: 'Technical & administrative staff', text: 'Staff responsible for IT infrastructure, procurement and institutional strategy.' },
    { title: 'Institutional leadership', text: 'University management who shape policies on sustainability and digital transformation.' },
    { title: 'Industry & society', text: 'Employers, policy makers and civil society interested in responsible technology.' },
  ],

  expectedOutcomes: [
    'New or updated course modules on green, ethical and sustainable computing',
    'Trained academic and technical staff at partner institutions',
    'Openly available teaching and learning materials',
    'Guidelines and recommendations for sustainable computing practice',
    '[Placeholder — add quantified outcomes from the approved proposal]',
  ],

  expectedImpact: [
    {
      title: 'Students',
      text: 'Graduates equipped with the knowledge and skills to build and manage technology responsibly.',
    },
    {
      title: 'Institutions',
      text: 'Modernised programmes and stronger institutional capacity for sustainable digital practice.',
    },
    {
      title: 'Region & society',
      text: 'A wider culture of responsible innovation supporting green and digital transitions.',
    },
  ],

  highlights: [
    { icon: 'Handshake', label: 'International consortium', value: 'EU & partner countries' },
    { icon: 'GraduationCap', label: 'Focus', value: 'Higher education' },
    { icon: 'Leaf', label: 'Theme', value: 'Green & ethical computing' },
    { icon: 'Award', label: 'Programme', value: 'Erasmus+ CBHE' },
  ],

  coordinator: {
    institution: '[Coordinating institution — to be confirmed]',
    contactPerson: '[Project coordinator name]',
    role: 'Project Coordinator',
    address: '[Institution address]',
    website: '',
  },

  contact: {
    // Replace with the official project mailbox.
    email: 'info@gecris-project.example',
    phone: '',
  },

  /**
   * Feedback form
   * The site is fully static. Feedback is sent to an EXTERNAL form service you
   * configure here (e.g. Formspree, Getform, Basin, or a script on your own
   * server). The service stores submissions in its database and notifies you.
   * If `endpoint` is empty, the form falls back to opening the visitor's email
   * client addressed to `contact.email`.
   */
  feedback: {
    endpoint: '',
    successUrl: '',
  },

  social: [
    // { label: 'LinkedIn', url: 'https://www.linkedin.com/...' },
  ] as { label: string; url: string }[],

  links: [
    { label: 'Erasmus+ Programme', url: 'https://erasmus-plus.ec.europa.eu/' },
    { label: 'European Education and Culture Executive Agency (EACEA)', url: 'https://www.eacea.ec.europa.eu/' },
    { label: 'Erasmus+ Project Results Platform', url: 'https://erasmus-plus.ec.europa.eu/projects' },
  ],
} as const;

/**
 * Funding acknowledgement & disclaimer
 * ------------------------------------
 * IMPORTANT: The official disclaimer wording and the "Co-funded by the European
 * Union" emblem must be taken from the EU visibility rules referenced in the
 * Grant Agreement (Article 17 and Annex 5) and from the official logo download
 * page of the European Commission / EACEA. Paste the verified text below and set
 * `verified: true`. Until then the site displays a clearly labelled placeholder.
 */
export const funding = {
  verified: false,
  acknowledgement: '[PLACEHOLDER — insert the official EU funding acknowledgement wording here]',
  disclaimer:
    '[PLACEHOLDER — insert the verified EU funding disclaimer text required by the Grant Agreement here. Do not publish the site without replacing this text.]',
  // Path (inside /public) to the official emblem file once supplied, e.g. 'logos/co-funded-by-the-eu.svg'
  emblem: 'logos/eu-emblem-placeholder.svg',
  emblemAlt: 'EU emblem placeholder — replace with the official "Co-funded by the European Union" logo',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Consortium', href: '/consortium' },
  { label: 'Work Packages', href: '/work-packages' },
  { label: 'Deliverables', href: '/deliverables' },
  { label: 'News & Events', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

