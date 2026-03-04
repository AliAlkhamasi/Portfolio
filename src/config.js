export const CONFIG = {
  name:      'Ali',
  fullName:  'Ali Alkhamasi',
  role:      'AI Engineer',
  location:  'Västerås, Sweden',
  available: true,

  tagline:
    'Hi, I\'m Ali. I build AI agents, computer vision systems, and RAG pipelines. I care about making things that actually work.',

  email:    'ali@example.com',
  github:   'YOURUSERNAME',
  linkedin: 'https://linkedin.com/in/YOURUSERNAME',
  twitter:  null,

  aboutSection: {
    intro: 'AI Engineer who enjoys building AI agents, computer vision systems, and RAG pipelines.',

    paragraphs: [
      'Currently interning at PreventAI, building a multi-agent computer vision system for real-time threat detection in retail environments — combining VLMs, specialist agents, and a custom pipeline architecture.',
      'Background in Python and AI engineering, with hands-on experience building AI agents, computer vision systems, RAG pipelines, and automation tools.',
    ],

    photo: '/photo.jpg',

    highlights: [
      { label: 'Applied AI',      desc: 'LLMs, agents, RAG pipelines, and embeddings in production.' },
      { label: 'Computer Vision', desc: 'YOLO, VLMs, Moondream, and GUI automation.' },
      { label: 'Backend',         desc: 'FastAPI, PostgreSQL, pgvector, Redis.' },
    ],
  },

  skillGroups: [
    {
      label: 'Languages',
      items: [
        { name: 'Python' },
        { name: 'C#' },
        { name: 'HTML / CSS' },
        { name: 'SQL' },
      ],
    },
    {
      label: 'AI & Machine Learning',
      items: [
        { name: 'TensorFlow' },
        { name: 'Scikit-learn' },
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'XGBoost' },
        { name: 'KNN' },
      ],
    },
    {
      label: 'LLMs & VLMs',
      items: [
        { name: 'Claude (Anthropic)' },
        { name: 'ChatGPT (OpenAI)' },
        { name: 'Gemini' },
        { name: 'Qwen' },
        { name: 'Moondream' },
      ],
    },
    {
      label: 'Computer Vision',
      items: [
        { name: 'YOLO' },
        { name: 'OpenAI Vision' },
        { name: 'PyAutoGUI' },
      ],
    },
    {
      label: 'Backend & Infrastructure',
      items: [
        { name: 'FastAPI' },
        { name: 'PostgreSQL' },
        { name: 'pgvector' },
        { name: 'Redis' },
        { name: 'Docker' },
        { name: 'Playwright' },
        { name: 'BeautifulSoup4' },
        { name: 'Streamlit' },
      ],
    },
  ],

  pinnedProjects: [
    {
      id: 1,
      title: 'AI Document Assistant',
      subtitle: 'RAG System',
      description:
        'Document intelligence assistant that answers questions across internal PDFs and notes using retrieval-augmented generation.',
      bullets: [
        'Semantic chunking, embeddings & vector retrieval',
        'Source-grounded answers with citations',
        'Upload → query → feedback workflow',
      ],
      tags: ['Python', 'FastAPI', 'pgvector', 'OpenAI'],
      private: true,
      repoUrl: null,
    },
    {
      id: 2,
      title: 'Your Project',
      subtitle: 'Category',
      description: 'Describe what this project does and what problem it solves.',
      bullets: [
        'Key feature or technical detail',
        'Another highlight',
      ],
      tags: ['Python'],
      private: true,
      repoUrl: null,
    },
    {
      id: 3,
      title: 'Your Project',
      subtitle: 'Category',
      description: 'Describe what this project does and what problem it solves.',
      bullets: [
        'Key feature or technical detail',
        'Another highlight',
      ],
      tags: ['Python'],
      private: false,
      repoUrl: null,
    },
  ],
}
