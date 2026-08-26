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
}

export const projects: ProjectData[] = [
  {
    id: "1",
    title: "مشروع متجر إلكتروني",
    subtitle: "تطبيق تجارة إلكترونية شامل",
    description: "متجر إلكتروني متكامل لبيع الملابس مبني باستخدام React و Tailwind CSS. يدعم سلة المشتريات والدفع الإلكتروني.",
    problem: "كانت هناك حاجة لمتجر إلكتروني سريع ومتجاوب يوفر تجربة مستخدم سلسة.",
    solution: "تم بناء التطبيق باستخدام Next.js لضمان السرعة وتحسين محركات البحث، مع Tailwind لتصميم متجاوب.",
    features: [
      "إدارة سلة المشتريات",
      "بوابة دفع آمنة",
      "لوحة تحكم للمنتجات"
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    images: ["/placeholder.png"],
    github: "https://github.com/yourusername/ecommerce",
    featured: true
  },
  {
    id: "2",
    title: "تطبيق إدارة المهام",
    subtitle: "تطبيق إنتاجية شخصي",
    description: "تطبيق ويب بسيط وسريع لإدارة المهام اليومية مع إمكانية تصنيف المهام وتحديد أولوياتها.",
    problem: "صعوبة تتبع المهام اليومية بشكل منظم.",
    solution: "تطبيق سريع يعتمد على التخزين المحلي وقاعدة بيانات سحابية لمزامنة المهام.",
    features: [
      "إضافة وحذف المهام",
      "تصنيف المهام حسب الأولوية",
      "مزامنة سحابية"
    ],
    tech: ["React", "CSS Modules", "Firebase"],
    images: ["/placeholder.png"],
    github: "https://github.com/yourusername/todo-app",
    featured: false
  }
];
