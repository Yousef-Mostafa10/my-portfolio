// src/lib/data.ts
// Static portfolio data — seed for Firebase & fallback

export const portfolioData = {
  personal: {
    name: "Yousef Mostafa Ahmed",
    headline: "Flutter Developer",
    roles: ["Flutter Developer", "Mobile App Developer", "UI/UX Builder", "Clean Architecture Enthusiast"],
    bio: "A passionate Flutter Developer who turns ideas into elegant, high-performance mobile experiences. I bring a deep love for clean architecture, SOLID principles, and beautiful UI to every project I build — turning complex problems into simple, maintainable solutions.",
    vision: "My mission is to build mobile experiences that are fast, beautiful, and maintainable — and to land a senior Flutter Developer role at a world-class tech company.",
    location: "Alexandria, Egypt 🇪🇬",
    availability: "Available for Freelance & Full-time",
    email: "ym5780497@gmail.com",
    phone: "+201155474660",
    github: "https://github.com/Yousef-Mostafa10",
    linkedin: "https://www.linkedin.com/in/yousef-mostafa-flutter-developer",
    cvUrl: "/cv/yousef-cv.pdf",
    profileImage: "/images/profile.jpg",
  },

  stats: [
    { label: "Years Experience", value: 1, suffix: "+" },
    { label: "Projects Built", value: 5, suffix: "+" },
    { label: "Class Rank", value: 2, prefix: "#" },
    { label: "GPA Score", value: 4.43, suffix: "/5" },
    { label: "Award Won", value: 1, suffix: "🏆" },
    { label: "Certificates", value: 1, suffix: "+" },
  ],

  funFacts: [
    { icon: "🧩", text: "I love problem solving and competitive thinking" },
    { icon: "🏗️", text: "Clean Architecture is not optional for me — it's a standard" },
    { icon: "📱", text: "Built 5+ apps before graduating" },
    { icon: "🥇", text: "1st Place Winner — Science Students' Innovation Forum" },
    { icon: "🎓", text: "Ranked 2nd in Computer Science at Tanta University" },
  ],

  skills: [
    {
      category: "Languages",
      icon: "💻",
      items: ["Dart", "Java", "C++", "SQL"],
    },
    {
      category: "Frameworks",
      icon: "📱",
      items: ["Flutter"],
    },
    {
      category: "State Management",
      icon: "⚡",
      items: ["Bloc", "Provider", "GetX", "Riverpod"],
    },
    {
      category: "Databases",
      icon: "🗄️",
      items: ["Firebase Firestore", "Firebase Auth", "Firebase FCM", "SQLite", "Hive"],
    },
    {
      category: "APIs & Networking",
      icon: "🌐",
      items: ["REST API", "JSON", "HTTP", "Postman"],
    },
    {
      category: "Version Control",
      icon: "🔀",
      items: ["Git", "GitHub", "Git Flow"],
    },
    {
      category: "Tools & IDEs",
      icon: "🛠️",
      items: ["Android Studio", "VS Code"],
    },
    {
      category: "Architecture & Concepts",
      icon: "🏛️",
      items: ["Clean Architecture", "SOLID", "OOP", "MVVM", "MVC", "Dependency Injection", "Localization"],
    },
  ],

  experience: [
    {
      id: "iti",
      role: "Mobile Development Trainee",
      company: "Information Technology Institute (ITI)",
      type: "Training",
      period: "Aug 2025 – Sep 2025",
      location: "Egypt",
      description: "Completed an intensive Flutter & Dart training track covering mobile app architecture, clean code practices, and SOLID principles.",
      highlights: [
        "Built a movie streaming app as capstone project using Clean Architecture + Bloc pattern",
        "Integrated REST APIs, Firebase services (Auth, Firestore), and Git-based workflows",
        "Earned ITI Certificate of Completion in Flutter & Dart",
      ],
      tech: ["Flutter", "Dart", "Bloc", "Firebase", "Clean Architecture", "REST APIs", "Git"],
    },
  ],

  education: [
    {
      id: "tanta",
      degree: "B.Sc. in Computer Science",
      institution: "Faculty of Science, Tanta University",
      period: "Sep 2022 – Jul 2026",
      location: "Tanta, Egypt",
      gpa: "4.43/5 (94.3%)",
      rank: "Ranked 2nd in Specialization",
      honor: "Excellent with Honors",
    },
  ],

  awards: [
    {
      id: "innovation-forum",
      title: "1st Place Winner",
      event: "Science Students' Innovation Forum",
      organization: "Delta Region Universities Alliance",
      icon: "🥇",
    },
  ],

  projects: [
    {
      id: "finance-management",
      title: "Finance Management System",
      subtitle: "Role-Based University Finance App",
      description: "Solved manual, error-prone financial workflows for a university department by building a comprehensive role-based financial management application. Serves as the sole developer, delivering a bilingual system handling all administrative and financial processes.",
      problem: "University finance department relied on manual, error-prone workflows with no digital system for tracking financial operations.",
      solution: "Built a Flutter application with role-based access control, real-time notifications, and full Arabic/English localization — completely digitizing the department's financial workflows.",
      tech: ["Flutter", "Dart", "REST APIs", "Provider", "Shared Preferences", "Localization"],
      features: [
        "Role-based authentication and access control",
        "Real-time financial transaction tracking",
        "Full Arabic / English localization",
        "Secure data management with REST API integration",
        "Automated reporting and administrative processes",
      ],
      github: "https://github.com/Yousef-Mostafa10/college-project-Tanta-financial",
      featured: true,
      order: 1,
      imageUrl: "",
      images: [],
    },
    {
      id: "vantage-movie",
      title: "Vantage",
      subtitle: "Movie & Streaming Discovery App",
      description: "A premium movie discovery application powered by the TMDB API. Features infinite scroll pagination, global search, offline favorites caching with SQLite, and a stunning Dark Mode UI built with Clean Architecture and Bloc.",
      problem: "Users needed a fast, offline-capable movie discovery app with a premium UI experience.",
      solution: "Integrated TMDB API with Bloc state management, implemented offline caching with SQLite, and designed a visually stunning Dark Mode interface.",
      tech: ["Flutter", "Dart", "TMDB API", "SQLite", "Bloc", "Clean Architecture"],
      features: [
        "TMDB API integration with pagination",
        "Global movie search functionality",
        "Offline favorites caching with SQLite",
        "Dark Mode support",
        "Clean Architecture implementation",
        "Bloc for state management",
      ],
      github: "https://github.com/Yousef-Mostafa10/Movie-App",
      featured: false,
      order: 2,
      imageUrl: "",
      images: [],
    },
    {
      id: "smart-attendance",
      title: "Smart Attendance System",
      subtitle: "QR-Based Automated Attendance",
      description: "Replaced manual attendance tracking with an automated QR-based system. Generates and scans QR codes to record attendance in real time, with Firebase as the backend for instant cloud updates.",
      problem: "Manual attendance tracking was time-consuming and prone to errors and fraud.",
      solution: "Automated attendance via QR code generation and scanning, backed by Firebase Firestore for real-time updates and tamper-resistant records.",
      tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "QR Scanner"],
      features: [
        "QR code generation and scanning",
        "Real-time attendance recording",
        "Firebase authentication",
        "Tamper-resistant cloud records",
        "Instant Firestore sync",
      ],
      github: "https://github.com/Yousef-Mostafa10/registering_attendance",
      featured: false,
      order: 3,
      imageUrl: "",
      images: [],
    },
    {
      id: "student-grades",
      title: "Student Grades Manager",
      subtitle: "GPA Calculator & Ranking App",
      description: "A mobile application that automates GPA calculation and student ranking. Integrates with a REST API for data fetching and provides a responsive, easy-to-read grading display.",
      problem: "Students needed an easy way to view grades, calculate GPA, and see class rankings.",
      solution: "Built a clean, responsive mobile app with REST API integration and an intuitive UI that makes grade management effortless.",
      tech: ["Flutter", "Dart", "REST APIs", "Responsive UI"],
      features: [
        "Automated GPA calculation",
        "Student ranking display",
        "REST API data integration",
        "Responsive UI across all screen sizes",
      ],
      github: "https://github.com/Yousef-Mostafa10/Student-grades-APP",
      featured: false,
      order: 4,
      imageUrl: "",
      images: [],
    },
    {
      id: "image-processing",
      title: "Image Processing App",
      subtitle: "Real-Time Filters with ML Kit",
      description: "A mobile application for digital image processing using Google ML Kit. Applies real-time filters and image enhancements leveraging Google's machine learning capabilities.",
      problem: "Needed a mobile solution for applying real-time image processing filters with ML capabilities.",
      solution: "Leveraged Google ML Kit and Flutter's Image package to deliver real-time filter and enhancement capabilities on-device.",
      tech: ["Flutter", "Dart", "Google ML Kit", "Image Package"],
      features: [
        "Real-time image filter application",
        "Google ML Kit integration",
        "On-device ML processing",
        "Multiple enhancement modes",
      ],
      github: "https://github.com/Yousef-Mostafa10/image-processing-App",
      featured: false,
      order: 5,
      imageUrl: "",
      images: [],
    },
  ],

  certificates: [
    {
      id: "iti-flutter",
      title: "Mobile Development — Flutter & Dart",
      issuer: "Information Technology Institute (ITI)",
      date: "Sep 2025",
      description: "Intensive Flutter & Dart training covering Clean Architecture, SOLID principles, state management (Bloc), Firebase integration, and REST API development.",
      imageUrl: "",
      downloadUrl: "",
    },
  ],

  services: [
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Cross-platform Flutter apps for iOS and Android — pixel-perfect, high-performance, and production-ready.",
    },
    {
      icon: "🎨",
      title: "UI/UX Implementation",
      description: "Translating Figma designs into flawless Flutter UI with smooth animations and responsive layouts.",
    },
    {
      icon: "🌐",
      title: "REST API Integration",
      description: "Connecting your Flutter app to any backend — REST APIs, JSON handling, authentication flows.",
    },
    {
      icon: "🔥",
      title: "Firebase Integration",
      description: "Full Firebase setup — Auth, Firestore, Storage, FCM push notifications, and real-time data.",
    },
    {
      icon: "🏛️",
      title: "Architecture Consulting",
      description: "Refactoring spaghetti code into Clean Architecture with SOLID principles and proper state management.",
    },
    {
      icon: "🔍",
      title: "Code Review & Refactoring",
      description: "Reviewing your Flutter codebase for quality, performance, and maintainability improvements.",
    },
  ],

  languages: [
    { name: "Arabic", level: "Native", proficiency: 100 },
    { name: "English", level: "Intermediate (B1)", proficiency: 60 },
  ],

  social: {
    github: "https://github.com/Yousef-Mostafa10",
    linkedin: "https://www.linkedin.com/in/yousef-mostafa-flutter-developer",
    email: "mailto:ym5780497@gmail.com",
    whatsapp: "https://wa.me/201155474660",
  },
};
