import type { ExperienceItem } from "../types/portfolio";

export const experiences: ExperienceItem[] = [
  {
    stage: "CURRENT",
    company: "㈜애드포터",
    role: "PL / UI Systems Builder",
    summary: "프런트엔드 기반이 없는 상태에서 구조와 규칙을 세우고 있습니다.",
    highlights: [
      "Admin / Web / Mobile-App 모노레포 구조 설계",
      "MUI 기반 컴포넌트 시스템과 네이밍 컨벤션 정리",
      "Cross-functional 허브와 AI 워크플로 도입",
    ],
    tags: ["Monorepo", "MUI", "TypeScript", "Cross-functional", "AI Workflow"],
  },
  {
    stage: "ENTERPRISE",
    company: "넥스트리㈜",
    role: "Enterprise Admin UI / Global LMS",
    summary: "복합 라이브러리 Admin UI와 글로벌 LMS 구조 설계를 맡았습니다.",
    highlights: [
      "Samsung E&A MAP Admin UI 표준화",
      "우즈베키스탄 LMS Web / App 구조 설계와 출시",
      "HD현대해양 IoT 대시보드 및 데이터 UI 구축",
    ],
    tags: ["React", "MUI", "AG-Grid", "Kendo UI", "Vue3"],
  },
  {
    stage: "CONSUMER",
    company: "㈜러쉬코리아",
    role: "Commerce UI / Campaign Operations",
    summary: "운영형 이벤트 퍼블리싱과 브랜드 인터랙션을 함께 다뤘습니다.",
    highlights: [
      "Fresh Sale React App 퍼블리싱과 프런트 기능 개발",
      "월 평균 8건+ 이벤트 페이지 운영",
      "iPad 디지털 데모 퍼블리싱",
    ],
    tags: ["Next.js 13", "React 18", "Tailwind CSS", "SCSS"],
  },
  {
    stage: "FOUNDATION",
    company: "Earlier Roles",
    role: "Commerce Publishing / Web Foundation",
    summary: "쇼핑몰 운영과 웹 표준 퍼블리싱으로 실무 기반을 다졌습니다.",
    highlights: [
      "자사몰 구축 및 유지보수",
      "글로벌 자회사 사이트와 도메인 운영",
      "웹 표준과 접근성 기반 퍼블리싱 경험 축적",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Commerce", "Accessibility"],
  },
];
