import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Cloud,
  Database,
  Code,
  Zap,
  Terminal,
  Globe,
  Lock,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function ServerlessPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const skills = [
    {
      category: "Serverless Architecture",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        "Event-Driven Design",
        "Microservices",
        "Auto-scaling",
        "Cost Optimization",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      category: "Cloud Functions",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "HTTP Triggers",
        "Background Functions",
        "Pub/Sub Integration",
        "Cloud Tasks",
      ],
      color: "from-purple-400 to-pink-400",
    },
    {
      category: "Firebase Ecosystem",
      icon: <Database className="w-6 h-6" />,
      items: [
        "Firestore Queries",
        "Real-time Database",
        "Cloud Storage",
        "Security Rules",
      ],
      color: "from-orange-400 to-red-400",
    },
    {
      category: "API Development",
      icon: <Server className="w-6 h-6" />,
      items: [
        "RESTful Design",
        "API Versioning",
        "Rate Limiting",
        "Error Handling",
      ],
      color: "from-green-400 to-emerald-400",
    },
    {
      category: "Database Design",
      icon: <Database className="w-6 h-6" />,
      items: [
        "NoSQL Modeling",
        "Data Normalization",
        "Index Optimization",
        "Query Performance",
      ],
      color: "from-yellow-400 to-amber-400",
    },
  ];

  const projects = [
    {
      title: "Serverless E-commerce API",
      description:
        "Architected a fully serverless e-commerce backend handling product catalog, shopping cart, and order management. Implemented using GCP Cloud Functions with Firestore for data persistence.",
      details:
        "Built REST endpoints for product CRUD operations, cart management, and checkout flow. Integrated Stripe payment processing with webhook handlers for order fulfillment. Achieved sub-200ms response times with global CDN caching.",
      tech: [
        "Cloud Functions",
        "Firestore",
        "TypeScript",
        "Stripe API",
        "Cloud CDN",
      ],
      metrics: ["10K+ daily requests", "99.9% uptime", "<200ms latency"],
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Firebase Auth System",
      description:
        "Developed a comprehensive authentication solution supporting multiple OAuth providers, custom claims for role-based access control, and secure session management.",
      details:
        "Implemented email/password authentication, Google and GitHub OAuth integration, and custom JWT claims for granular permissions. Built middleware for token verification and refresh logic. Created admin dashboard for user management.",
      tech: ["Firebase Auth", "Cloud Functions", "JWT", "OAuth 2.0", "Node.js"],
      metrics: ["5K+ active users", "Multi-provider auth", "Zero breaches"],
      icon: <Lock className="w-8 h-8" />,
    },
    {
      title: "Real-time Chat Backend",
      description:
        "Created a scalable WebSocket-based messaging system with Firestore for data persistence, real-time synchronization, and push notification support.",
      details:
        "Designed message queuing system using Cloud Functions and Pub/Sub. Implemented read receipts, typing indicators, and message search. Built content moderation pipeline with automatic profanity filtering and spam detection.",
      tech: ["Firestore", "Cloud Functions", "Pub/Sub", "FCM", "WebSocket"],
      metrics: ["Real-time sync", "1M+ messages/day", "Push notifications"],
      icon: <Terminal className="w-8 h-8" />,
    },
    {
      title: "Payment Webhook Handler",
      description:
        "Engineered a robust event processing system for payment webhooks with idempotency guarantees, automatic retries, and comprehensive error logging.",
      details:
        "Built webhook receiver with signature verification and replay attack prevention. Implemented dead-letter queue for failed events and exponential backoff retry logic. Created monitoring dashboard for event tracking and alerting.",
      tech: [
        "Cloud Functions",
        "Pub/Sub",
        "Cloud Tasks",
        "Stripe",
        "Cloud Monitoring",
      ],
      metrics: [
        "100% reliability",
        "Auto-retry logic",
        "Idempotent processing",
      ],
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  const experience = [
    {
      period: "Jan 2024 - Present",
      role: "Serverless Backend Developer",
      company: "CloudNative Tech",
      type: "Serverless Focus",
      description:
        "Leading the development of event-driven microservices architecture on Google Cloud Platform. Building scalable APIs that serve 50,000+ monthly active users.",
      achievements: [
        "Reduced infrastructure costs by 40% through serverless optimization and intelligent resource allocation",
        "Designed and implemented 15+ Cloud Functions with automated CI/CD pipelines using Cloud Build",
        "Architected database schemas in Firestore achieving 5x query performance improvement",
        "Established monitoring and alerting infrastructure with 99.9% uptime SLA",
      ],
      technologies: [
        "GCP",
        "Cloud Functions",
        "Firestore",
        "TypeScript",
        "Pub/Sub",
      ],
    },
    {
      period: "Jul 2023 - Dec 2023",
      role: "Backend Engineer",
      company: "TechFlow Solutions",
      type: "Traditional Backend",
      description:
        "Developed and maintained REST APIs using Node.js and Express. Managed PostgreSQL databases and deployed applications on containerized infrastructure.",
      achievements: [
        "Built RESTful APIs handling 100,000+ requests daily with 99.5% uptime",
        "Optimized complex database queries reducing average response time by 60%",
        "Implemented comprehensive API documentation using OpenAPI/Swagger specifications",
        "Mentored 2 junior developers on backend best practices and code review processes",
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "Redis"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0B0E14]/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                DevCloud
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors relative ${
                      activeSection === item.toLowerCase()
                        ? "text-cyan-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
                    )}
                  </button>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0E14] border-t border-white/5">
            <div className="px-6 py-4 space-y-3">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-gray-400 hover:text-cyan-400 py-2"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 pt-16"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-blue-400 font-medium">
              Available for Opportunities
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Backend Engineer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
            Serverless Backend Engineer
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building scalable, event-driven systems in the cloud. Specializing
            in serverless architecture with Google Cloud Platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-white/10 rounded-xl font-semibold hover:bg-white/5 transition-all"
            >
              Get in Touch
            </button>
          </div>

          {/* Tech Stack Preview */}
          <div className="mt-20 flex flex-wrap justify-center gap-4">
            {[
              "TypeScript",
              "Node.js",
              "GCP",
              "Cloud Functions",
              "Firebase",
              "Firestore",
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p className="text-xl text-cyan-400 font-semibold">
                  From Traditional to Serverless
                </p>
                <p>
                  My journey into backend engineering began with a fascination
                  for building robust APIs and managing complex databases. After
                  six months of working with traditional server-based
                  architectures, I discovered the power of serverless computing.
                </p>
                <p>
                  The shift to{" "}
                  <span className="text-cyan-400 font-semibold">
                    serverless architecture
                  </span>{" "}
                  transformed how I approach backend development. No more
                  worrying about server provisioning, scaling, or infrastructure
                  management—just pure focus on writing clean, efficient code
                  that scales automatically.
                </p>
                <p>
                  Now specializing in{" "}
                  <span className="text-cyan-400 font-semibold">
                    Google Cloud Platform
                  </span>
                  , I architect event-driven systems using Cloud Functions and
                  Firebase. I build APIs that handle thousands of requests with
                  sub-200ms latency, all while optimizing costs through
                  intelligent resource allocation.
                </p>
                <p>
                  My passion lies in creating invisible infrastructure—backends
                  that just work, scale effortlessly, and empower frontend teams
                  to build amazing user experiences without worrying about
                  what's happening behind the scenes.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    1+
                  </div>
                  <div className="text-sm text-gray-400">Year Experience</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-400">Cloud Functions</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-400">Uptime SLA</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    40%
                  </div>
                  <div className="text-sm text-gray-400">Cost Reduction</div>
                </div>
              </div>

              {/* Specializations */}
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">
                  Core Specializations
                </h3>
                <div className="space-y-3">
                  {[
                    "Event-Driven Architecture",
                    "Serverless API Design",
                    "Real-time Data Synchronization",
                    "Cloud-Native Development",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expertise across the serverless stack, from cloud infrastructure
              to API development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${skill.color} bg-opacity-10 rounded-xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {skill.category}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-400 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tech Stack Details */}
          <div className="mt-16 p-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">
              Complete Tech Stack
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Languages
                </h4>
                <div className="space-y-2">
                  {["TypeScript", "Node.js", "JavaScript"].map((tech) => (
                    <div key={tech} className="text-white">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Cloud Platform
                </h4>
                <div className="space-y-2">
                  {[
                    "Google Cloud Platform",
                    "Cloud Functions",
                    "Cloud Build",
                    "Cloud Monitoring",
                  ].map((tech) => (
                    <div key={tech} className="text-white">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Backend Services
                </h4>
                <div className="space-y-2">
                  {[
                    "Firebase",
                    "Firestore",
                    "Firebase Auth",
                    "Cloud Storage",
                  ].map((tech) => (
                    <div key={tech} className="text-white">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Tools & APIs
                </h4>
                <div className="space-y-2">
                  {["REST APIs", "Git", "Postman", "Pub/Sub"].map((tech) => (
                    <div key={tech} className="text-white">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-world serverless solutions built with GCP and Firebase
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      {project.details}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-gray-400">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building production systems from traditional to serverless
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 hidden md:block" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="relative md:pl-24">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-5 h-5 bg-cyan-500 rounded-full border-4 border-[#0B0E14] hidden md:block" />

                  <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-sm text-cyan-400 font-mono font-semibold">
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-gray-400 mb-4">{exp.company}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Interested in serverless architecture or looking for a backend
            engineer? Let's discuss how we can work together.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <Github className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-lg font-semibold mb-2 text-white">GitHub</h3>
              <p className="text-sm text-gray-500">Check out my code</p>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                LinkedIn
              </h3>
              <p className="text-sm text-gray-500">
                Let's connect professionally
              </p>
            </a>

            <a
              href="mailto:your.email@example.com"
              className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <Mail className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
              <p className="text-sm text-gray-500">Drop me a message</p>
            </a>
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Currently Available
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Open to full-time backend engineering positions, serverless
              consulting opportunities, or exciting contract work. Let's build
              something amazing together.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p className="mb-2">© 2026 Serverless Backend Engineer Portfolio</p>
          <p>
            Built with React, Tailwind CSS, and deployed on serverless
            infrastructure ⚡
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
