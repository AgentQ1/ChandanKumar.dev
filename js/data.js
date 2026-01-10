// ===========================
// Portfolio Projects Data
// ===========================
const projects = [
    {
        id: 1,
        title: "41Dayta",
        category: ["ai-ml", "cloud", "web"],
        icon: "🚀",
        date: "Jan 2025 - Present",
        description: "Privacy-first CRM platform for solopreneurs and small teams. Built multilingual chat platform, AI-powered word/PPT editors, and AI-curated news portal. Achieved 200+ beta sign-ups with 30% faster load times.",
        technologies: ["Python", "JavaScript", "React", "AWS", "AI/ML"],
        highlights: [
            "200+ beta sign-ups with secure data storage",
            "30% faster load times, 50% database cost reduction",
            "AI-powered content generation and multilingual support"
        ],
        links: {
            live: "#",
            github: "https://github.com/AgentQ1"
        }
    },
    {
        id: 2,
        title: "On-Device LLM Inference Engine",
        category: ["ai-ml", "cloud"],
        icon: "🤖",
        date: "Nov 2025 - Present",
        description: "Hardware-agnostic framework supporting Rust, C++, Go, and Python for deploying large language models on edge devices. Built CPU, GPU, NPU, and TPU acceleration with optimized inference pipelines.",
        technologies: ["Rust", "C++", "Go", "Python", "Edge Computing"],
        highlights: [
            "Multi-language support with hardware abstraction layer",
            "Reduced latency and cloud dependency for enterprise LLM workloads",
            "CI/CD pipelines and commercial licensing"
        ],
        links: {
            github: "https://github.com/AgentQ1"
        }
    },
    {
        id: 3,
        title: "Movo - Contact Database & File Storage",
        category: ["cloud", "web"],
        icon: "☁️",
        date: "Dec 2025 - Present",
        description: "Globally accessible serverless application for contact management using Cloudflare Workers and R2 storage. Implemented REST APIs with D1 database and KV namespace for sub-millisecond lookups.",
        technologies: ["Cloudflare Workers", "R2", "D1 Database", "REST API"],
        highlights: [
            "50% multipart upload optimization",
            "60-80% API expense reduction",
            "Zero-maintenance serverless architecture"
        ],
        links: {
            live: "#",
            github: "https://github.com/AgentQ1"
        }
    },
    {
        id: 4,
        title: "CampusLive - iOS App",
        category: ["mobile"],
        icon: "📱",
        date: "Dec 2025 - Present",
        description: "Native iOS application for real-time campus engagement using Swift and modern UIKit/SwiftUI architecture. Integrated JavaScript bridge for cross-platform functionality with live updates and push notifications.",
        technologies: ["Swift", "UIKit", "SwiftUI", "JavaScript Bridge"],
        highlights: [
            "Real-time campus engagement features",
            "Cross-platform JavaScript bridge",
            "Live updates and push notifications"
        ],
        links: {
            github: "https://github.com/AgentQ1"
        }
    },
    {
        id: 5,
        title: "AI Debater - Game Theory System",
        category: ["ai-ml"],
        icon: "🎮",
        date: "Nov 2020",
        description: "AI system applying game-theory and mechanism-design principles to strategic debating scenarios. Implemented algorithms to maximize utility in competitive debate with Neo4j graph database for relationship mapping.",
        technologies: ["Python", "Game Theory", "Neo4j", "AI"],
        highlights: [
            "Nash equilibrium and strategic decision-making integration",
            "Argumentation frameworks using graph database",
            "Research-grade debate strategies"
        ],
        links: {
            github: "https://github.com/AgentQ1"
        }
    },
    {
        id: 6,
        title: "Polls - Voting & Survey Platform",
        category: ["web"],
        icon: "📊",
        date: "Sep 2020",
        description: "JavaScript-based polling application with intuitive UI and responsive design. Deployed on GitHub Pages under MIT License with real-time results and accessible polling workflows.",
        technologies: ["JavaScript", "HTML/CSS", "GitHub Pages"],
        highlights: [
            "Real-time polling results",
            "Responsive and accessible design",
            "Open-source under MIT License"
        ],
        links: {
            live: "#",
            github: "https://github.com/AgentQ1"
        }
    },
    {
        id: 7,
        title: "Airlines Customer Clustering",
        category: ["ai-ml"],
        icon: "✈️",
        date: "Research Project",
        description: "Customer segmentation for East West Airlines using hierarchical and k-means clustering on 3,999 passenger records. Delivered targeted marketing strategies for four distinct customer segments.",
        technologies: ["Python", "scikit-learn", "pandas", "Machine Learning"],
        highlights: [
            "Analyzed 3,999 passenger records",
            "Identified 4 distinct customer segments",
            "Targeted marketing strategy recommendations"
        ],
        links: {
            github: "https://github.com/AgentQ1"
        }
    },
    {
        id: 8,
        title: "Moomoo AI Assistant",
        category: ["ai-ml", "web"],
        icon: "💬",
        date: "Project",
        description: "Multiple iterations of voice-enabled AI assistants and chat interfaces using OpenAI and Firebase. Achieved 50-80% performance improvements through optimized API usage, multilingual support, and authentication.",
        technologies: ["JavaScript", "OpenAI API", "Firebase", "Speech-to-Text"],
        highlights: [
            "Voice-enabled AI chat interfaces",
            "50-80% performance improvements",
            "Multilingual support and robust authentication"
        ],
        links: {
            live: "#"
        }
    },
    {
        id: 9,
        title: "Tech Tribe SEO Optimization",
        category: ["web"],
        icon: "🔍",
        date: "Project",
        description: "Comprehensive SEO and paid search analysis for large e-commerce platform. Analyzed 167K monthly clicks and $755K ad spend, identifying 77% keyword cannibalization with 94% cost reduction strategies.",
        technologies: ["SEO", "Google Analytics", "Data Analysis"],
        highlights: [
            "Analyzed 167K monthly clicks and $755K spend",
            "Identified 77% keyword cannibalization",
            "Proposed 94% cost reduction strategies"
        ],
        links: {}
    }
];

// ===========================
// Resume Timeline Data
// ===========================
const resumeData = [
    {
        type: "experience",
        title: "Founder & Product Lead",
        organization: "41Dayta",
        location: "London, UK",
        date: "Jan 2025 - Present",
        description: "Launched privacy-first CRM platform for solopreneurs and small teams with 200+ beta sign-ups. Built Moomo.dev multilingual chat, AI-powered Word/PPT editors, and Moomo.News AI-curated portal.",
        highlights: [
            "Achieved 30% faster load times and 50% database cost reduction",
            "Led end-to-end product strategy and UI/UX design",
            "Managed cross-functional team and delivered MVP quickly"
        ]
    },
    {
        type: "experience",
        title: "On-Device LLM Inference Engine Developer",
        organization: "InSystem-Compute | Enterprise AI Infrastructure",
        location: "Remote",
        date: "Nov 2025 - Present",
        description: "Designed hardware-agnostic framework supporting Rust, C++, Go, and Python for edge LLM deployment. Built hardware abstraction layer for CPU, GPU, NPU, and TPU acceleration.",
        highlights: [
            "Reduced latency and cloud dependency for enterprise workloads",
            "Architected multi-language support with optimized pipelines",
            "Integrated CI/CD and commercial licensing"
        ]
    },
    {
        type: "experience",
        title: "Cloud-Native Application Developer",
        organization: "Movo - Contact Database & File Storage",
        location: "Remote",
        date: "Dec 2025 - Present",
        description: "Built globally accessible serverless application using Cloudflare Workers and R2 storage. Implemented REST APIs with D1 database and KV namespace for sub-millisecond alias lookups.",
        highlights: [
            "Optimized multipart uploads reducing duplicate writes by 50%",
            "Cut API expenses by 60-80%",
            "Zero-maintenance serverless architecture"
        ]
    },
    {
        type: "experience",
        title: "iOS Developer",
        organization: "CampusLive",
        location: "Remote",
        date: "Dec 2025 - Present",
        description: "Developed native iOS application for real-time campus engagement using Swift and modern UIKit/SwiftUI architecture. Integrated JavaScript bridge for cross-platform functionality.",
        highlights: [
            "Live update features and push notifications",
            "Enhanced user engagement with intuitive UI/UX",
            "Continuous integration and deployment automation"
        ]
    },
    {
        type: "education",
        title: "Master of Business Administration (MBA)",
        organization: "Illinois Institute of Technology",
        location: "Chicago, IL",
        date: "Expected Dec 2025",
        description: "Specialization in Business Analytics",
        highlights: [
            "GPA: 3.3",
            "Alpha Sigma Phi (ΑΣΦ) Member",
            "Focus on data analytics and digital strategy"
        ]
    },
    {
        type: "education",
        title: "Bachelor of Business Administration",
        organization: "Amity University",
        location: "Noida, India",
        date: "Jun 2024",
        description: "International Business",
        highlights: [
            "GPA: 3.8",
            "Gold Medal in Marathon - Amity Education Group Championship",
            "Exchange programs: Adelphi University (NY), Birkbeck University (London)"
        ]
    },
    {
        type: "award",
        title: "Best Student Award",
        organization: "Birkbeck University, London",
        date: "Mar 2023",
        description: "Presented by Graham Bolton for outstanding academic performance and contribution during exchange program."
    },
    {
        type: "award",
        title: "Gold Medal in Marathon",
        organization: "Amity Education Group Championship",
        date: "May 2023",
        description: "First place in marathon competition demonstrating dedication and endurance."
    },
    {
        type: "award",
        title: "Alpha Sigma Phi (ΑΣΦ) Member",
        organization: "Illinois Institute of Technology",
        date: "Jun 2025",
        description: "Member of prestigious fraternity participating in campus technology initiatives and leadership development."
    }
];

// ===========================
// Blog Posts Data
// ===========================
const blogPosts = [
    {
        id: 1,
        title: "Building Scalable LLM Inference on Edge Devices",
        date: "Jan 15, 2026",
        readTime: "8 min",
        category: "AI/ML",
        icon: "🤖",
        excerpt: "Exploring hardware abstraction layers and optimization strategies for deploying large language models on resource-constrained edge devices.",
        slug: "llm-inference-edge-devices"
    },
    {
        id: 2,
        title: "Serverless Architecture: A Deep Dive into Cloudflare Workers",
        date: "Jan 10, 2026",
        readTime: "6 min",
        category: "Cloud",
        icon: "☁️",
        excerpt: "How to build globally distributed, zero-maintenance applications using Cloudflare's edge computing platform with practical examples.",
        slug: "cloudflare-workers-deep-dive"
    },
    {
        id: 3,
        title: "The Future of Privacy-First CRM Platforms",
        date: "Dec 28, 2025",
        readTime: "5 min",
        category: "Product",
        icon: "🔒",
        excerpt: "Why privacy matters in modern CRM systems and how to build platforms that respect user data while delivering powerful features.",
        slug: "privacy-first-crm"
    },
    {
        id: 4,
        title: "Modern iOS Development: SwiftUI vs UIKit in 2026",
        date: "Dec 20, 2025",
        readTime: "7 min",
        category: "Mobile",
        icon: "📱",
        excerpt: "Comparing SwiftUI and UIKit for production iOS apps, with real-world examples from building CampusLive.",
        slug: "swiftui-vs-uikit-2026"
    },
    {
        id: 5,
        title: "Game Theory in AI: Strategic Decision Making",
        date: "Dec 15, 2025",
        readTime: "10 min",
        category: "AI/ML",
        icon: "🎮",
        excerpt: "Applying Nash equilibrium and mechanism design principles to build AI systems that make strategic decisions in competitive environments.",
        slug: "game-theory-ai"
    },
    {
        id: 6,
        title: "Optimizing Database Performance: A Case Study",
        date: "Dec 5, 2025",
        readTime: "6 min",
        category: "Database",
        icon: "💾",
        excerpt: "How I reduced database costs by 50% and improved query performance for 41Dayta using smart indexing and caching strategies.",
        slug: "database-optimization-case-study"
    }
];
