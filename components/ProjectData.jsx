// ProjectData.jsx — All project information

const PROJECTS = {
  mylokai: {
    title: 'Mylokai',
    tagline: 'Privacy-first on-device AI chat',
    description: 'Most AI chat apps ship your data to the cloud. Mylokai runs entirely on your device — no accounts, no network calls for inference, no one else seeing your conversations.',
    status: 'Shipped',
    platform: 'iOS',
    year: '2025',
    category: 'shipped',
    color: 'oklch(0.70 0.12 170)',
    tech: ['Swift 6', 'SwiftUI', 'Apple Foundation Models', 'MLX Swift', 'SwiftData'],
    story: 'Built to prove the privacy-first thesis in a consumer app. Device-aware model tiering (4B on 8GB devices, up to 7B on 12GB) means the experience degrades gracefully instead of crashing. Apple Foundation Models is the default so new users never wait for a download.',
    links: { appstore: '#' },
    features: [
      'Fully on-device inference — no cloud, no accounts',
      'Device-aware model tiering across Apple Silicon',
      'Curated Hugging Face model catalog',
      'Warm minimal design inspired by Things 3',
    ],
  },
  orttaai: {
    title: 'orttaai',
    tagline: 'Offline speech-to-text, no subscription',
    description: 'Like Wispr Flow but with no cloud and no subscription. Runs Whisper locally and injects text into any focused app via the Accessibility API.',
    status: 'Shipped',
    platform: 'macOS / Ubuntu',
    year: '2025',
    category: 'shipped',
    color: 'oklch(0.55 0.14 280)',
    tech: ['Swift', 'SwiftUI', 'Whisper.cpp', 'Accessibility API', 'Electron/Tauri'],
    story: 'Wispr Flow charges monthly for something your machine can do locally. orttaai runs Whisper on your hardware and injects text directly into whatever app has focus. The Ubuntu port extends this to Linux creators who need the same freedom.',
    links: { github: '#' },
    features: [
      'Local Whisper inference — zero cloud dependency',
      'Text injection via Accessibility API',
      'Cross-platform: macOS shipped, Ubuntu in progress',
      'No accounts, no subscriptions',
    ],
  },
  gopakd: {
    title: 'GoPakd',
    tagline: 'Group trip planning for real life',
    description: 'Trip planning and coordination for families, couples, and friend groups — with dual on-device + cloud AI. One shared workspace for packing, itineraries, meals, and calendar coordination.',
    status: 'In Development',
    platform: 'iOS',
    year: '2026',
    category: 'building',
    color: 'oklch(0.60 0.15 60)',
    tech: ['SwiftUI', 'Convex', 'Clerk', 'Vercel AI SDK', 'Claude/GPT/Gemini', 'EventKit'],
    story: 'Group trip planning lives across group texts, shared docs, and someone\'s notes app. GoPakd is one shared workspace that coordinates packing lists, itineraries, meals, and calendars — with AI that actually understands the chaos of planning with other people.',
    links: { website: 'https://gopakd.com' },
    features: [
      'Shared packing lists with smart suggestions',
      'Itinerary builder with calendar sync',
      'Dual AI: on-device for privacy, cloud for power',
      'Real-time collaboration via Convex',
    ],
  },
  soundar: {
    title: 'soundAr',
    tagline: 'Local speech model workbench',
    description: 'Browse, download, test, and benchmark open-source STT and TTS models on your own GPU. A proper desktop UI for the speech model ecosystem.',
    status: 'In Development',
    platform: 'Ubuntu Linux',
    year: '2026',
    category: 'building',
    color: 'oklch(0.55 0.12 250)',
    tech: ['Python', 'PyQt6', 'PyTorch', 'Hugging Face', 'Silero VAD'],
    story: 'Testing open-source speech models usually means a rat\'s nest of Python scripts and CUDA configs. soundAr gives you a PyQt6 UI that talks to Hugging Face directly, loads models into your GPU, and runs real-time mic transcription and benchmarks.',
    links: {},
    features: [
      'Browse and download models from Hugging Face',
      'Real-time mic transcription testing',
      'Side-by-side model comparison',
      'GPU benchmark suite',
    ],
  },
};

const FEATURED_PROJECTS = ['mylokai', 'orttaai', 'gopakd'];

const CATEGORIES = {
  shipped: { label: 'Shipped', description: 'Live products you can use today' },
  building: { label: 'Building', description: 'Active development, shipping soon' },
};

Object.assign(window, { PROJECTS, FEATURED_PROJECTS, CATEGORIES });
