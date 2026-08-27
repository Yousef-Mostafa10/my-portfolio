export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  images: string[];
  github: string;
  featured: boolean;
  order?: number;
}

// To add images for a project, place them in:
//   public/images/projects/<project-id>/
// and list the filenames below, e.g.:
//   images: ["/images/projects/finance-management/1.png", ...]
//
// Leave images: [] if no screenshots are available yet.

export const projects: ProjectData[] = [
  {
    id: "finance-management",
    title: "Finance Management System",
    subtitle: "Role-Based University Finance App",
    description:
      "Solved manual, error-prone financial workflows for a university department by building a comprehensive role-based financial management application. Serves as the sole developer, delivering a bilingual system handling all administrative and financial processes.",
    problem:
      "University finance department relied on manual, error-prone workflows with no digital system for tracking financial operations.",
    solution:
      "Built a Flutter application with role-based access control, real-time notifications, and full Arabic/English localization — completely digitizing the department's financial workflows.",
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
    images: [
      "/my-portfolio/images/projects/finance-management/1.jpeg",
      "/my-portfolio/images/projects/finance-management/2.jpeg",
      "/my-portfolio/images/projects/finance-management/3.jpeg",
      "/my-portfolio/images/projects/finance-management/4.jpeg",
      "/my-portfolio/images/projects/finance-management/5.jpeg",
      "/my-portfolio/images/projects/finance-management/6.jpeg",
      "/my-portfolio/images/projects/finance-management/7.jpeg",
      "/my-portfolio/images/projects/finance-management/8.jpeg",
      "/my-portfolio/images/projects/finance-management/9.jpeg",
      "/my-portfolio/images/projects/finance-management/10.jpeg",
      "/my-portfolio/images/projects/finance-management/11.jpeg",
      "/my-portfolio/images/projects/finance-management/12.jpeg",
    ],
  },
  {
    id: "vantage-movie",
    title: "Vantage",
    subtitle: "Movie & Streaming Discovery App",
    description:
      "A premium movie discovery application powered by the TMDB API. Features infinite scroll pagination, global search, offline favorites caching with SQLite, and a stunning Dark Mode UI built with Clean Architecture and Bloc.",
    problem:
      "Users needed a fast, offline-capable movie discovery app with a premium UI experience.",
    solution:
      "Integrated TMDB API with Bloc state management, implemented offline caching with SQLite, and designed a visually stunning Dark Mode interface.",
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
    images: [],
  },
  {
    id: "smart-attendance",
    title: "Smart Attendance System",
    subtitle: "QR-Based Automated Attendance",
    description:
      "Replaced manual attendance tracking with an automated QR-based system. Generates and scans QR codes to record attendance in real time, with Firebase as the backend for instant cloud updates.",
    problem:
      "Manual attendance tracking was time-consuming and prone to errors and fraud.",
    solution:
      "Automated attendance via QR code generation and scanning, backed by Firebase Firestore for real-time updates and tamper-resistant records.",
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
    images: [],
  },
  {
    id: "student-grades",
    title: "Student Grades Manager",
    subtitle: "GPA Calculator & Ranking App",
    description:
      "A mobile application that automates GPA calculation and student ranking. Integrates with a REST API for data fetching and provides a responsive, easy-to-read grading display.",
    problem:
      "Students needed an easy way to view grades, calculate GPA, and see class rankings.",
    solution:
      "Built a clean, responsive mobile app with REST API integration and an intuitive UI that makes grade management effortless.",
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
    images: [
      "/my-portfolio/images/projects/student-grades/1.jpeg",
      "/my-portfolio/images/projects/student-grades/2.jpeg",
      "/my-portfolio/images/projects/student-grades/3.jpeg",
      "/my-portfolio/images/projects/student-grades/4.jpeg",
      "/my-portfolio/images/projects/student-grades/5.jpeg",
      "/my-portfolio/images/projects/student-grades/6.jpeg",
      "/my-portfolio/images/projects/student-grades/7.jpeg",
    ],
  },
  {
    id: "image-processing",
    title: "Image Processing App",
    subtitle: "Real-Time Filters with ML Kit",
    description:
      "A mobile application for digital image processing using Google ML Kit. Applies real-time filters and image enhancements leveraging Google's machine learning capabilities.",
    problem:
      "Needed a mobile solution for applying real-time image processing filters with ML capabilities.",
    solution:
      "Leveraged Google ML Kit and Flutter's Image package to deliver real-time filter and enhancement capabilities on-device.",
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
    images: [],
  },
];
