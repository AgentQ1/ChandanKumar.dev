// ===========================
// Portfolio Projects Data
// ===========================
const projects = [
    {
        id: 1,
        title: "41Dayta — Privacy-First CRM Platform",
        category: ["web", "cloud"],
        icon: "🔒",
        date: "Jan 2025 - Present",
        description: "Founded and launched a privacy-first CRM platform focused on customer data, workflow automation, and business operations.",
        technologies: ["CRM", "Privacy", "Product Strategy", "Analytics", "UI/UX"],
        highlights: [
            "Reached 20,000+ beta sign-ups",
            "Built early product positioning, user flows, and growth strategy",
            "Designed privacy-first workflows for customer and business data"
        ],
        links: {
            github: "https://github.com/AgentQ1"
        }
    },
    {
        id: 2,
        title: "moomo.dev — Multilingual LLM Productivity Platform",
        category: ["ai-ml", "web", "cloud"],
        icon: "🧠",
        date: "2025 - Present",
        description: "Built a multilingual LLM platform with AI-powered Word/PPT editing, dynamic news tools, and productivity workflows.",
        technologies: ["LLM", "Swift", "Firebase", "Node.js", "UI/UX", "i18n"],
        highlights: [
            "Created AI-powered document and presentation editing workflows",
            "Built multilingual chat and content generation experiences",
            "Applied Firebase, Swift, Node.js, and product design to scalable AI features"
        ],
        links: {
            github: "https://github.com/AgentQ1/moomoios"
        }
    },
    {
        id: 3,
        title: "Quant Finance & Market Analytics",
        category: ["ai-ml", "web"],
        icon: "📈",
        date: "Project",
        description: "Built analytics workflows for trading strategy research, portfolio analysis, and market-risk evaluation.",
        technologies: ["Python", "SQL", "Tableau", "Portfolio Analytics", "Risk Analysis"],
        highlights: [
            "Backtested 200+ trading strategies",
            "Applied S&P 500 tail-hedge strategy analysis",
            "Used Python, SQL, and Tableau to study volatility, risk, and market behavior"
        ],
        links: {
            github: "https://github.com/AgentQ1/TFA-Predictive-Analytics"
        }
    },
    {
        id: 4,
        title: "InSystem Compute — Edge LLM Infrastructure",
        category: ["ai-ml", "cloud"],
        icon: "⚡",
        date: "2025 - Present",
        description: "Designed an on-device LLM inference framework for local AI workloads and edge computing environments.",
        technologies: ["Rust", "C++", "Go", "Python", "Edge AI"],
        highlights: [
            "Explored hardware-aware AI inference for edge devices",
            "Reduced reliance on cloud-only model serving",
            "Built cross-language infrastructure concepts for AI deployment"
        ],
        links: {
            github: "https://github.com/AgentQ1/insystem-compute"
        }
    },
    {
        id: 5,
        title: "FitCheckAI — AI Style & Outfit Analysis App",
        category: ["ai-ml", "mobile"],
        icon: "📱",
        date: "2026",
        description: "Built an iOS AI fashion assistant that analyzes outfit photos, gives feedback, and supports premium AI-powered image upgrades.",
        technologies: ["SwiftUI", "Firebase", "Gemini", "StoreKit", "Product Design"],
        highlights: [
            "Created photo-based outfit scoring and recommendation flows",
            "Integrated Firebase backend, authentication, and premium subscription logic",
            "Designed privacy, reporting, and account-management flows for App Store review"
        ],
        links: {
            github: "https://github.com/AgentQ1/FitCheckAI"
        }
    },
    {
        id: 6,
        title: "Movo — Contact Database & File Storage",
        category: ["cloud", "web"],
        icon: "☁️",
        date: "2025 - Present",
        description: "Built a serverless contact and file-management system using edge infrastructure and scalable storage workflows.",
        technologies: ["Cloudflare Workers", "R2", "D1", "REST APIs", "Serverless"],
        highlights: [
            "Designed globally accessible serverless architecture",
            "Built APIs for contact lookup and file workflows",
            "Focused on low-maintenance, scalable backend infrastructure"
        ],
        links: {
            github: "https://github.com/AgentQ1/movo"
        }
    },
    {
        id: 7,
        title: "CampusLive — iOS Campus Engagement App",
        category: ["mobile", "web"],
        icon: "🎓",
        date: "2025 - Present",
        description: "Built a campus engagement app concept for events, communication, and student community interaction.",
        technologies: ["Swift", "SwiftUI", "Firebase", "JavaScript", "Mobile UX"],
        highlights: [
            "Created mobile-first event and student engagement flows",
            "Explored live updates and campus communication features",
            "Applied product thinking to community-focused app design"
        ],
        links: {
            github: "https://github.com/AgentQ1/CampusLive-Project"
        }
    }
];

// ===========================
// Resume Timeline Data
// ===========================
const resumeData = [
    {
        type: "experience",
        title: "Market Research & Sales Analyst",
        organization: "Keller Williams",
        location: "Chicago, IL",
        date: "May 2026 - Present",
        description: "Research Chicago real estate trends, pricing, and buyer behavior to support sales strategy and client decision-making.",
        highlights: [
            "Analyze market data, pricing patterns, and buyer behavior",
            "Prepare CMA reports, property insights, and recommendations",
            "Support data-driven real estate sales and client strategy"
        ]
    },
    {
        type: "experience",
        title: "Human Resources Executive",
        organization: "moomo.dev",
        location: "Chicago, IL",
        date: "Jan 2025 - May 2026",
        description: "Supported recruitment, onboarding, internal operations, and people analytics for a growing AI product environment.",
        highlights: [
            "Used data tools to improve hiring and people-operations workflows",
            "Coordinated teams, internal communication, and operating processes",
            "Connected HR operations with product, analytics, and execution needs"
        ]
    },
    {
        type: "experience",
        title: "Social Policy and Planning Associate",
        organization: "UNICEF India",
        location: "New York, NY",
        date: "May 2026 - Present",
        description: "Support policy research, planning, program analysis, documentation, and stakeholder communication for development initiatives.",
        highlights: [
            "Review reports and data for development programs",
            "Assist with policy documentation and planning materials",
            "Support research-driven communication across stakeholders"
        ]
    },
    {
        type: "experience",
        title: "Finance Specialist Intern",
        organization: "J.P. Morgan Asset Management",
        location: "New York, NY",
        date: "May 2023 - Dec 2023",
        description: "Supported financial analysis, reporting, and investment research using market data and business fundamentals.",
        highlights: [
            "Prepared reports using financial data and market insights",
            "Applied economics and accounting concepts to business decisions",
            "Supported investment research and financial reporting workflows"
        ]
    },
    {
        type: "education",
        title: "Master of Laws (LL.M.), AI, Legal Innovation and Technology",
        organization: "Chicago-Kent College of Law",
        location: "Chicago, IL",
        date: "Jan 2026",
        description: "Legal-tech training focused on AI for law, legal analytics, legal innovation, and technology-driven legal systems.",
        highlights: [
            "GPA: 4.0",
            "Focus: AI for Law, legal analytics, legal project management, and legal innovation"
        ]
    },
    {
        type: "education",
        title: "Master of Business Administration (MBA), Business Analytics",
        organization: "Illinois Institute of Technology",
        location: "Chicago, IL",
        date: "Jan 2026",
        description: "Business analytics graduate training focused on data, strategy, visualization, and decision-making.",
        highlights: [
            "GPA: 3.3",
            "Skills: SQL, Python, Tableau, KPI tracking, dashboards, and data visualization"
        ]
    },
    {
        type: "education",
        title: "Bachelor of Business Administration, International Business",
        organization: "Amity University",
        location: "India",
        date: "Jun 2024",
        description: "International business degree with exchange programs at Adelphi University in New York and Birkbeck University in London.",
        highlights: [
            "GPA: 3.8",
            "Exchange: Adelphi University, New York — May 2023",
            "Exchange: Birkbeck University, London — Dec 2022"
        ]
    },
    {
        type: "award",
        title: "Alpha Sigma Phi (ΑΣΦ), Member",
        organization: "Illinois Institute of Technology",
        date: "Jun 2025",
        description: "Member of Alpha Sigma Phi at Illinois Institute of Technology."
    },
    {
        type: "award",
        title: "Best Student Award",
        organization: "Birkbeck University, London",
        date: "Mar 2023",
        description: "Best Student Award presented by Graham Bolton during the Birkbeck University exchange program."
    },
    {
        type: "award",
        title: "Gold Medal in Marathon",
        organization: "Amity Education Group Championship, New York",
        date: "May 2023",
        description: "Gold medal in marathon at Amity Education Group Championship."
    }
];

// ===========================
// Blog Posts Data
// ===========================
const blogPosts = [
    {
        id: 1,
        title: "Building AI Products That Recruiters Understand",
        date: "Jan 15, 2026",
        readTime: "6 min",
        category: "Product",
        icon: "🧠",
        excerpt: "How to communicate AI, analytics, law, and finance experience in a clear product-builder narrative.",
        slug: "ai-product-builder-narrative"
    },
    {
        id: 2,
        title: "Edge AI and Serverless Product Architecture",
        date: "Jan 10, 2026",
        readTime: "7 min",
        category: "Cloud",
        icon: "⚡",
        excerpt: "A practical look at building scalable AI workflows using edge computing, serverless systems, and privacy-first design.",
        slug: "edge-ai-serverless-architecture"
    },
    {
        id: 3,
        title: "Privacy-First CRM and Customer Data Workflows",
        date: "Dec 28, 2025",
        readTime: "5 min",
        category: "Product",
        icon: "🔒",
        excerpt: "Why privacy-first customer systems matter and how CRM platforms can balance growth, usability, and data trust.",
        slug: "privacy-first-crm"
    }
];
