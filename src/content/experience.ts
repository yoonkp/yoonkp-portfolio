import type { ExperienceItem } from "../types/portfolio";

export const experiences: ExperienceItem[] = [
  {
    theme: "current",
    stage: "CURRENT",
    company: "㈜애드포터",
    role: "PL / UI Systems Builder",
    focus: "프론트엔드 기반이 없는 조직에서 공통 구조를 처음부터 세우는 일",
    decision: "화면 구현보다 먼저 모노레포, MUI 기준, 협업 언어를 잡아 팀 전체가 같은 구조 위에서 움직이게 만들었습니다.",
    summary: "프론트엔드 기반이 없는 상태에서 구조와 규칙을 세우고 있습니다.",
    highlights: [
      "Admin / Web / Mobile-App 모노레포 구조 설계",
      "MUI 기반 컴포넌트 시스템과 네이밍 컨벤션 정리",
      "Cross-functional 허브와 AI 워크플로 도입",
    ],
    tags: ["Monorepo", "MUI", "TypeScript", "Cross-functional", "AI Workflow"],
  },
  {
    theme: "enterprise",
    stage: "ENTERPRISE",
    company: "넥스트리㈜",
    role: "Enterprise Admin UI / Global LMS",
    focus: "복합 라이브러리 Admin과 글로벌 LMS를 반복 가능한 규칙으로 묶는 일",
    decision: "혼합 UI는 화면별 예외로 풀지 않고 공통 규칙과 CRUD 템플릿으로 표준화해 확장 속도를 확보했습니다.",
    summary: "복합 라이브러리 Admin UI와 글로벌 LMS 구조 설계를 맡았습니다.",
    highlights: [
      "Samsung E&A MAP Admin UI 표준화",
      "우즈베키스탄 LMS Web / App 구조 설계와 출시",
      "HD현대해양 IoT 대시보드 및 데이터 UI 구축",
    ],
    tags: ["React", "MUI", "AG-Grid", "Kendo UI", "Vue3"],
  },
  {
    theme: "consumer",
    stage: "CONSUMER",
    company: "㈜러쉬코리아",
    role: "Commerce UI / Campaign Operations",
    focus: "브랜드 경험과 운영 속도, 전환 성과를 동시에 맞추는 일",
    decision: "이벤트 페이지를 개별 작업물이 아니라 템플릿 시스템으로 보고 디바이스별 인터랙션 규칙까지 함께 정리했습니다.",
    summary: "운영형 이벤트 퍼블리싱과 브랜드 인터랙션을 함께 다뤘습니다.",
    highlights: [
      "Fresh Sale React App 퍼블리싱과 프론트 기능 개발",
      "월 평균 8건+ 이벤트 페이지 운영",
      "iPad 디지털 데모 퍼블리싱",
    ],
    tags: ["Next.js 13", "React 18", "Tailwind CSS", "SCSS"],
  },
  {
    theme: "foundation",
    stage: "FOUNDATION",
    company: "Earlier Roles",
    role: "Commerce Publishing / Web Foundation",
    focus: "퍼블리셔 기반으로 웹 표준, 운영, 상용 서비스의 기본기를 다진 시기",
    decision: "초기부터 운영과 접근성, 마크업 품질을 같이 다뤄 이후의 구조 설계와 화면 완성도를 받치는 기초를 만들었습니다.",
    summary: "쇼핑몰 운영과 웹 표준 퍼블리싱으로 실무 기반을 다졌습니다.",
    highlights: [
      "자사몰 구축 및 유지보수",
      "글로벌 자회사 사이트와 도메인 운영",
      "웹 표준과 접근성 기반 퍼블리싱 경험 축적",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Commerce", "Accessibility"],
  },
];
