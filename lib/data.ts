export type Locale = "en" | "ko";

type LocalizedString = {
  en: string;
  ko: string;
};

export type StackCategory = {
  title: LocalizedString;
  items: string[];
};

export type Project = {
  id: string;
  title: LocalizedString;
  summary: LocalizedString;
  challenge: LocalizedString;
  solution: LocalizedString;
  architecture: string[];
  technologies: string[];
  role: LocalizedString[];
  features: LocalizedString[];
  notes: LocalizedString[];
};

export type ActivityGroup = {
  title: LocalizedString;
  entries: LocalizedString[];
};

export const navItems = [
  { label: { en: "About", ko: "소개" }, href: "#about" },
  { label: { en: "Tech", ko: "기술" }, href: "#tech" },
  { label: { en: "Projects", ko: "프로젝트" }, href: "#projects" },
  { label: { en: "Activities", ko: "활동" }, href: "#activities" },
  { label: { en: "Contact", ko: "연락" }, href: "#contact" }
] as const;

export const uiText = {
  hero: {
    eyebrow: { en: "AI Software Portfolio", ko: "AI 소프트웨어 포트폴리오" },
    viewProjects: { en: "View Projects", ko: "프로젝트 보기" },
    contactMe: { en: "Contact Me", ko: "연락하기" },
    githubAria: { en: "GitHub profile", ko: "깃허브 프로필" },
    emailAria: { en: "Send email", ko: "이메일 보내기" }
  },
  about: {
    eyebrow: { en: "About", ko: "소개" },
    title: {
      en: "Building AI foundations with practical impact",
      ko: "실용적 임팩트를 위한 AI 기반을 구축합니다"
    },
    description: {
      en: "I am an AI software student focused on translating machine learning concepts into real-world services that are understandable, reliable, and useful.",
      ko: "저는 머신러닝 개념을 이해하기 쉽고 신뢰할 수 있는 실제 서비스로 연결하는 데 집중하는 AI 소프트웨어 전공 학생입니다."
    },
    education: { en: "Education", ko: "학력" },
    major: { en: "Major", ko: "전공" },
    direction: { en: "Direction", ko: "방향성" },
    directionText: {
      en: "My current work centers on NLP, computer vision, and applied machine learning workflows. I am especially interested in building production-minded AI systems that combine model performance with practical usability for global users.",
      ko: "현재 NLP, 컴퓨터 비전, 그리고 실무형 머신러닝 워크플로우에 집중하고 있습니다. 모델 성능과 실제 사용성을 함께 고려한 AI 시스템을 구축하여 글로벌 사용자에게 가치를 전달하는 데 관심이 있습니다."
    }
  },
  tech: {
    eyebrow: { en: "Tech Stack", ko: "기술 스택" },
    title: {
      en: "Structured around AI, software, and product delivery",
      ko: "AI, 소프트웨어, 제품 구현 중심으로 구성된 기술 역량"
    },
    description: {
      en: "Tools and technologies I actively use across model development, backend implementation, and user-facing experiences.",
      ko: "모델 개발, 백엔드 구현, 사용자 경험 설계 전반에서 실제로 활용하는 도구와 기술입니다."
    }
  },
  projects: {
    eyebrow: { en: "Projects", ko: "프로젝트" },
    title: { en: "Applied AI and product engineering", ko: "실전형 AI 및 제품 엔지니어링" },
    description: {
      en: "Two representative projects that highlight practical system design, technical ownership, and end-to-end implementation.",
      ko: "실용적인 시스템 설계, 기술적 주도성, 엔드투엔드 구현 경험을 보여주는 대표 프로젝트입니다."
    },
    detail: { en: "Project Detail", ko: "프로젝트 상세" },
    challenge: { en: "Challenge", ko: "문제 정의" },
    solution: { en: "Solution", ko: "해결 방법" },
    architecture: { en: "Architecture", ko: "아키텍처" },
    role: { en: "Role", ko: "역할" },
    features: { en: "Key Features", ko: "핵심 기능" },
    notes: { en: "Notes", ko: "비고" }
  },
  activities: {
    eyebrow: { en: "Activities", ko: "활동" },
    title: { en: "Technical growth through practice and exposure", ko: "실습과 경험을 통한 기술 성장" },
    description: {
      en: "A learning journey shaped by coursework, clubs, competitions, and direct industry exposure.",
      ko: "수업, 동아리, 대회, 산업 현장 경험을 통해 확장해 온 학습 여정입니다."
    }
  },
  contact: {
    eyebrow: { en: "Contact", ko: "연락" },
    title: { en: "Let’s build practical AI products", ko: "실용적인 AI 제품을 함께 만듭니다" },
    description: {
      en: "Open to learning opportunities, technical collaboration, and global AI engineering pathways.",
      ko: "학습 기회, 기술 협업, 글로벌 AI 엔지니어링 경로에 열려 있습니다."
    },
    openGithub: { en: "Open GitHub profile", ko: "깃허브 프로필 열기" },
    sendEmail: { en: "Send email", ko: "이메일 보내기" },
    copyEmail: { en: "Copy Email", ko: "이메일 복사" },
    copied: { en: "Copied", ko: "복사됨" },
    copyAria: { en: "Copy email address", ko: "이메일 주소 복사" }
  },
  footer: {
    en: "Crafted for AI engineering growth.",
    ko: "AI 엔지니어 성장을 위해 설계되었습니다."
  },
  language: {
    en: "EN",
    ko: "KR"
  }
};

export const techStack: StackCategory[] = [
  { title: { en: "Programming", ko: "프로그래밍" }, items: ["Python", "JavaScript", "C", "HTML", "CSS"] },
  { title: { en: "AI / Machine Learning", ko: "AI / 머신러닝" }, items: ["PyTorch", "TensorFlow", "HuggingFace"] },
  { title: { en: "NLP", ko: "자연어처리" }, items: ["HuggingFace", "Python"] },
  { title: { en: "Computer Vision", ko: "컴퓨터 비전" }, items: ["OpenCV", "PyTorch", "YOLO"] },
  { title: { en: "Frontend", ko: "프론트엔드" }, items: ["React", "HTML", "CSS", "JavaScript"] },
  { title: { en: "Backend", ko: "백엔드" }, items: ["FastAPI", "Python", "MySQL"] },
  { title: { en: "Tools", ko: "도구" }, items: ["GitHub", "Notion", "Figma"] }
];

export const projects: Project[] = [
  {
    id: "wildfire",
    title: { en: "AI Wildfire Detection System", ko: "AI 산불 감지 시스템" },
    summary: {
      en: "Team-built AI detection and monitoring platform that analyzes webcam feeds to identify flame and smoke signals in real time for wildfire-prone communities.",
      ko: "산불 취약 지역 주민을 위해 웹캠 영상을 실시간 분석하여 화염과 연기를 감지하는 팀 기반 AI 모니터링 플랫폼입니다."
    },
    challenge: {
      en: "Early wildfire signals are often missed, and existing workflows can delay real-time alerting and visibility for residents.",
      ko: "초기 산불 징후를 빠르게 포착하기 어렵고, 기존 체계는 실시간 경보와 정보 전달이 지연되는 문제가 있습니다."
    },
    solution: {
      en: "Built a YOLO-based detection pipeline that processes webcam footage, forwards results through FastAPI, and publishes live monitoring data to a web dashboard.",
      ko: "YOLO 기반 탐지 파이프라인으로 웹캠 영상을 분석하고, FastAPI를 통해 결과를 전달하여 웹 대시보드에서 실시간 모니터링이 가능하도록 구현했습니다."
    },
    architecture: ["Webcam Input", "AI Detection Model (PyTorch / YOLO)", "FastAPI Backend", "MySQL Database", "Web Dashboard"],
    technologies: ["Python", "PyTorch", "YOLO", "FastAPI", "MySQL", "HTML", "CSS", "JavaScript", "SQLAlchemy", "Pydantic"],
    role: [
      {
        en: "Developed the AI model workflow for fire and smoke recognition",
        ko: "화염 및 연기 인식을 위한 AI 모델 워크플로우를 개발했습니다"
      },
      { en: "Implemented YOLO-based detection pipeline", ko: "YOLO 기반 탐지 파이프라인을 구현했습니다" },
      {
        en: "Contributed detection logic integration for backend delivery",
        ko: "탐지 로직을 백엔드 전달 구조와 연동했습니다"
      }
    ],
    features: [
      { en: "Real-time fire and smoke detection", ko: "실시간 화염/연기 감지" },
      { en: "Monitoring dashboard", ko: "모니터링 대시보드" },
      { en: "Detection logs", ko: "감지 로그" },
      { en: "Alert system", ko: "알림 시스템" }
    ],
    notes: [
      { en: "No public repository is available yet.", ko: "현재 공개된 저장소는 없습니다." },
      {
        en: "Formal benchmark metrics are not published at this stage.",
        ko: "공식 벤치마크 지표는 아직 공개되지 않았습니다."
      }
    ]
  },
  {
    id: "meal",
    title: { en: "Convenience Meal Recommendation Platform", ko: "편의점 식사 추천 플랫폼" },
    summary: {
      en: "Recommendation-oriented web platform that helps users choose convenience store meals based on context and preference, with community-driven recipe sharing.",
      ko: "사용자 상황과 선호를 반영해 편의점 식사를 선택하도록 돕고, 레시피 공유 커뮤니티를 제공하는 추천 중심 웹 플랫폼입니다."
    },
    challenge: {
      en: "Users navigate overwhelming meal options and fragmented information, leading to repetitive search and decision fatigue.",
      ko: "식사 선택지가 과도하고 정보가 분산되어 반복 검색과 선택 피로가 발생하는 문제가 있습니다."
    },
    solution: {
      en: "Designed and implemented a web service that filters options by user conditions, suggests meal combinations, and supports ranking and recipe-sharing interactions.",
      ko: "사용자 조건 기반 필터링, 조합 추천, 랭킹 및 레시피 공유 기능을 갖춘 웹 서비스를 기획하고 구현했습니다."
    },
    architecture: ["Frontend (React / Web UI)", "FastAPI Backend", "MySQL Database"],
    technologies: ["React", "HTML", "CSS", "JavaScript", "FastAPI", "MySQL", "Python"],
    role: [
      { en: "Led service planning and feature structure design", ko: "서비스 기획 및 기능 구조 설계를 주도했습니다" },
      { en: "Implemented key web service features", ko: "핵심 웹 서비스 기능을 구현했습니다" },
      {
        en: "Shaped recommendation-oriented UX and user flow",
        ko: "추천 중심 UX와 사용자 흐름을 설계했습니다"
      }
    ],
    features: [
      { en: "Situation-based recommendation", ko: "상황 기반 추천" },
      { en: "Ranking system", ko: "랭킹 시스템" },
      { en: "Recipe sharing", ko: "레시피 공유" },
      { en: "Bookmark feature", ko: "북마크 기능" },
      { en: "Community / review feature", ko: "커뮤니티 / 리뷰 기능" }
    ],
    notes: [
      {
        en: "Positioned as a recommendation-oriented web platform without claiming advanced ML recommendation models.",
        ko: "고도화된 ML 추천 모델을 주장하지 않고, 추천 중심 웹 플랫폼으로 정확히 소개합니다."
      }
    ]
  }
];

export const activities: ActivityGroup[] = [
  {
    title: { en: "Coursework & Learning", ko: "교과 및 학습" },
    entries: [
      { en: "Programming (C)", ko: "프로그래밍 (C)" },
      { en: "Computer Systems", ko: "컴퓨터 시스템" },
      { en: "JavaScript", ko: "JavaScript" },
      { en: "Operating Systems (Java)", ko: "운영체제 (Java)" },
      { en: "Python (NumPy, Pandas, Matplotlib)", ko: "Python (NumPy, Pandas, Matplotlib)" },
      { en: "Database (SQL)", ko: "데이터베이스 (SQL)" }
    ]
  },
  {
    title: { en: "Clubs", ko: "동아리" },
    entries: [
      { en: "AI고라", ko: "AI고라" },
      { en: "Python 실력 향상반", ko: "Python 실력 향상반" }
    ]
  },
  {
    title: { en: "Competitions", ko: "대회" },
    entries: [
      { en: "Data Creator Camp", ko: "Data Creator Camp" },
      { en: "Andong AI Creative Competition", ko: "안동 AI 창의융합 경진대회" }
    ]
  },
  {
    title: { en: "Events & Expos", ko: "행사 및 박람회" },
    entries: [
      { en: "2025 Korea-US ICT Convergence Expo", ko: "2025 한미 ICT 융합 엑스포" },
      { en: "2025 Korea AI Education Festival", ko: "2025 대한민국 AI 교육 페스티벌" }
    ]
  },
  {
    title: { en: "Company Visits", ko: "기업 탐방" },
    entries: [
      { en: "MIDAS", ko: "MIDAS" },
      { en: "가온플랫폼", ko: "가온플랫폼" },
      { en: "Mesacure Company", ko: "Mesacure Company" },
      { en: "Sphere AX", ko: "Sphere AX" }
    ]
  },
  {
    title: { en: "Global Experience", ko: "해외 경험" },
    entries: [
      { en: "2023-2024 Resident in Ohio, United States", ko: "2023-2024 미국 오하이오 거주" },
      { en: "SW Global Experience Program (G-STEP) 2025", ko: "SW글로벌체험학습 G-STEP 2025" },
      { en: "Silicon Valley SW Global Experience Program 2026", ko: "실리콘밸리 SW글로벌체험학습 2026" }
    ]
  }
];

export const profile = {
  name: "Dahye Lee",
  tagline: { en: "AI Software Developer", ko: "AI 소프트웨어 개발자" },
  focus: {
    en: "Focused on NLP, Computer Vision, and Machine Learning.",
    ko: "NLP, 컴퓨터 비전, 머신러닝에 집중하고 있습니다."
  },
  mission: {
    en: "Aspiring AI Engineer seeking global opportunities in AI and machine learning.",
    ko: "AI와 머신러닝 분야의 글로벌 기회를 지향하는 AI 엔지니어를 목표로 합니다."
  },
  school: {
    en: "Gyeongbuk Software Meister High School",
    ko: "경북소프트웨어마이스터고등학교"
  },
  major: {
    en: "AI Software Development",
    ko: "AI 소프트웨어 개발"
  },
  graduation: {
    en: "Expected Graduation: 2028",
    ko: "졸업 예정: 2028"
  }
};

export const contact = {
  githubLabel: "github.com/akuni0923",
  githubUrl: "https://github.com/akuni0923",
  email: "akuni090923@gmail.com"
};

export function t(locale: Locale, value: LocalizedString): string {
  return value[locale];
}
