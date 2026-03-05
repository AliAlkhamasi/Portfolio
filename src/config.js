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
        { name: 'SQL' },
        { name: 'HTML / CSS' },
        { name: 'C#' },
        { name: 'JavaScript' },
      ],
    },
    {
      label: 'AI & Machine Learning',
      items: [
        { name: 'Scikit-learn' },
        { name: 'Pandas' },
        { name: 'NumPy' },
        { name: 'XGBoost' },
        { name: 'KNN' },
        { name: 'Matplotlib' }
      ],
    },
    {
      label: 'LLMs',
      items: [
        { name: 'Claude' },
        { name: 'GPT-4o-mini' },
        { name: 'Gemini' },
      ],
    },
    {
      label: 'VLMs',
      items: [
        { name: 'GPT-4o' },
        { name: 'Qwen-VL' },
        { name: 'Gemini 2.5 Flash' },
        { name: 'Moondream3' },
      ],
    },
    {
      label: 'Computer Vision',
      items: [
        { name: 'YOLO' },
        { name: 'OpenCV' },
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
        { name: 'Github/Git' },
      ],
    },
  ],

  pinnedProjects: [
    {
      id: 1,
      title: 'Grants Agent',
      subtitle: 'RAG System',
      description:
        'AI-powered RAG agent for Swedish research funding, ask natural questions and get source grounded answers across 3,400+ grants from Vinnova, Formas, Horizon Europe and more. Built during internship at RISE Research Institutes of Sweden.',
      bullets: [
        'Semantic search over 3,400+ real grant listings using pgvector + OpenAI embeddings',
        'Conversation memory with Redis for multi-turn dialogue',
        'Real-time streaming responses via FastAPI + SSE',
      ],
      tags: ['Python', 'FastAPI','AI Agent', 'RAG', 'pgvector'],
      private: false,
      repoUrl: 'https://github.com/AliAlkhamasi/GrantsAgent', 
    },
    {
      id: 2,
      title: 'TARS',
      subtitle: 'Vision Agent',
      description: 'Real-time AI vision agent that combines YOLOv8 object detection and GPT-4o VLM to understand and describe the world through your webcam with voice control and dynamic personality. Inspired by TARS from Interstellar',
      bullets: [
        'YOLOv8 object detection pipeline feeding context to VLM',
        'Voice activated via wake word detection + Whisper speech recognition',
        'Dynamic personality system — adjust humor, honesty, and sarcasm in real-time',
        'Conversational memory across interactions'
      ],
      tags: ['Python', 'Ai Agent', 'VLM', 'Computer Vision',],
      private: false,
      repoUrl: 'https://github.com/AliAlkhamasi/TARS',
    },
    {
      id: 3,
      title: 'Autonomous VLM Agent',
      subtitle: 'Automation',
      description: 'Autonomous desktop AI agent that sees, understands, and acts using Moondream3 for pixel perfect UI grounding and Gemini 2.5 Flash for visual reasoning',
      bullets: [
        'Moondream3 running locally for precise UI element localization',
        'Gemini 2.5 Flash for visual understanding, text extraction and summarization',
        'Autonomously navigates Outlook, Chrome, and desktop applications'
      ],
      tags: ['Python','Automation','Computer Vision','VLM'],
      private: false,
      repoUrl: 'https://github.com/AliAlkhamasi/VLMAgent',
    },
  ],
}
