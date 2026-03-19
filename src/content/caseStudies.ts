import type { CaseStudy, NowBuilding } from "../types/portfolio";

export const caseStudies: CaseStudy[] = [
  {
    slug: "samsung-ea-map",
    theme: "samsung",
    heroLabel: "CASE 01 · ADMIN 표준화",
    heroMetric: "재사용률 70%+",
    shortTitle: "Samsung E&A MAP",
    title: "Samsung E&A MAP UI 표준화",
    summary: "혼합 Admin을 공통 규칙으로 묶어 재사용률 70%+ 기반을 만든 프로젝트입니다.",
    teaser: "혼합 UI를 규칙과 패턴으로 통일했습니다.",
    previewImage: "/assets/images/project3.png",
    galleryImages: ["/assets/images/project3.png", "/assets/images/project33.png", "/assets/images/project22.png"],
    domain: "Enterprise Admin UI",
    role: "구조 설계 · 퍼블리싱 기준",
    contribution: "기여도 100%",
    publicScope: "부분 공개",
    stack: ["React 18", "TypeScript", "MUI", "AG-Grid", "Shadcn UI", "Tailwind CSS", "SCSS"],
    outcomes: ["재사용률 70%+ 확보", "대용량 테이블 표준화", "협업 가이드 정착"],
    context: "혼합 라이브러리와 대용량 데이터로 화면 편차가 큰 환경이었습니다.",
    roleLead: "화면을 하나씩 맞추기보다, 운영 화면 전체가 같은 규칙으로 움직이게 만드는 역할을 맡았습니다.",
    constraintsLead: "복잡성은 화면 수보다 예외 규칙과 혼합 스택에서 나왔습니다.",
    evidenceLead: "대표 화면 1개와 운영 규칙 4개로 구조화 과정을 압축해 보여줍니다.",
    resultLead: "이 케이스의 핵심은 보기 좋은 화면보다 반복 가능한 기준을 남겼다는 점입니다.",
    constraints: ["다층 메뉴 트리", "대용량 데이터", "다수 벤더 협업", "스타일 충돌 위험", "화면별 예외가 많은 운영 도메인"],
    ownership: ["퍼블리싱 구조 설계", "컴포넌트 기준 정리", "스타일 충돌 해소 규칙 수립", "테이블 패턴 정의", "신입 퍼블리셔 멘토링"],
    decisions: [
      {
        title: "라이브러리 위에 공통 규칙 레이어를 둠",
        detail: "MUI, AG-Grid, Shadcn UI, Tailwind CSS의 구현 차이를 화면별 임기응변으로 처리하지 않고 토큰과 레이아웃 규칙으로 흡수했습니다.",
        impact: "화면 간 시각 편차를 줄이고 유지보수 기준을 팀 단위로 공유할 수 있었습니다.",
      },
      {
        title: "테이블을 예외 화면이 아니라 패턴 단위로 관리함",
        detail: "검색, 필터, 행 액션, 비어 있음, 로딩, 에러 상태를 테이블 패턴으로 분리해 반복 사용했습니다.",
        impact: "대용량 데이터 화면을 빠르게 확장하면서도 사용성 일관성을 유지할 수 있었습니다.",
      },
      {
        title: "퍼블리싱 가이드를 운영 문서로 유지함",
        detail: "초기 가이드 작성으로 끝내지 않고 코드와 같이 움직이는 기준 문서로 관리했습니다.",
        impact: "신입 퍼블리셔가 약 2개월 내 실무 화면을 담당할 수 있는 수준까지 온보딩 속도가 올라갔습니다.",
      },
    ],
    evidenceBlocks: [
      {
        title: "Menu Tree IA",
        caption: "복잡한 메뉴를 구조 기준으로 재배열",
        items: ["Program", "Portfolio", "Package", "Document Control", "Approval Flow"],
      },
      {
        title: "Table Rule Matrix",
        caption: "화면별 예외를 패턴 규칙으로 전환",
        items: ["Search / Filter Slot", "Density Scale", "Column Priority", "Empty / Loading / Error States"],
      },
      {
        title: "Style Conflict Map",
        caption: "혼합 라이브러리 환경에서 우선순위 정리",
        items: ["Token Priority", "Spacing Ownership", "State Color Mapping", "Override Boundary"],
      },
      {
        title: "Naming Convention",
        caption: "협업 단어를 코드 규칙으로 연결",
        items: ["Page Prefix", "Section Prefix", "Component Variant", "Grid Cell Modifier"],
      },
    ],
    results: [
      "컴포넌트 재사용률 70%+ 기반을 확보했습니다.",
      "화면별 스타일 편차가 줄어들어 협업 품질이 안정화됐습니다.",
      "신입 퍼블리셔가 빠르게 실무에 투입될 수 있는 운영 기준을 남겼습니다.",
    ],
    reflection: [
      "복합 UI 환경일수록 한 번의 구현보다 반복 가능성이 더 중요했습니다.",
      "운영 UI에서는 시각적 연출보다 정보 구조와 상태 규칙이 더 강한 설득 포인트였습니다.",
    ],
  },
  {
    slug: "edulime-lms",
    theme: "edulime",
    heroLabel: "CASE 02 · WEB·APP 출시",
    heroMetric: "2025.01 App 출시",
    shortTitle: "Edulime LMS",
    title: "Edulime LMS 구조 설계",
    summary: "디자인 없이 Web·App 구조를 세우고 출시까지 연결한 프로젝트입니다.",
    teaser: "무디자인 상태에서 Web·App 구조를 설계했습니다.",
    previewImage: "/assets/images/edulime-pc-1.png",
    galleryImages: [
      "/assets/images/edulime-pc-2.png",
      "/assets/images/edulime-pc-3.png",
      "/assets/images/edulime-app-1.png",
      "/assets/images/edulime-app-2.png"
    ],
    domain: "Education Admin + Mobile App",
    role: "도메인 구조 · CRUD 패턴 · 모바일 흐름",
    contribution: "Web 50% / App 80%",
    publicScope: "부분 공개",
    stack: ["React 18", "TypeScript", "Kendo UI", "Sass", "Vite"],
    outcomes: ["도메인 기반 화면 설계", "Web·App 동시 구축", "App Store 출시"],
    context: "디자인 없이 관리자와 학생 흐름을 동시에 설계해야 했습니다.",
    roleLead: "디자인보다 도메인 모델이 앞선 상황에서, 화면 구조와 CRUD 패턴의 기준선을 먼저 잡았습니다.",
    constraintsLead: "문제는 화면 미감보다 정의되지 않은 구조와 용어를 빠르게 고정하는 일이었습니다.",
    evidenceLead: "관리자 Web과 학생 App 흐름이 어떻게 나뉘는지 핵심 증거만 남겼습니다.",
    resultLead: "이 케이스의 설득 포인트는 무디자인 상태에서도 출시 가능한 구조를 만들었다는 점입니다.",
    constraints: ["무디자인 상태", "영어 커뮤니케이션", "짧은 납기", "Web과 App 동시 진행", "도메인 복잡성"],
    ownership: ["도메인 모델 기반 화면 분해", "CRUD 패턴 설계", "관리자 대시보드 구조화", "학생용 모바일 흐름 단순화", "일부 기획 협업"],
    decisions: [
      {
        title: "Entity-first 방식으로 IA를 고정함",
        detail: "시각 시안이 없더라도 데이터 구조와 업무 흐름을 먼저 화면 단위로 매핑했습니다.",
        impact: "디자인 산출물이 늦어도 개발과 퍼블리싱의 기준선을 잃지 않을 수 있었습니다.",
      },
      {
        title: "CRUD 화면을 반복 가능한 템플릿으로 묶음",
        detail: "조회, 생성, 수정, 삭제 패턴을 각각 화면마다 새로 만들지 않고 공통 템플릿으로 정리했습니다.",
        impact: "관리 화면의 제작 속도와 유지보수성이 동시에 올라갔습니다.",
      },
      {
        title: "모바일은 기능 우선순위를 재배열함",
        detail: "학습 흐름과 사용 빈도를 기준으로 App의 진입 순서와 액션 수를 줄였습니다.",
        impact: "학생 사용 흐름이 단순해지고 출시 범위를 안정적으로 맞출 수 있었습니다.",
      },
    ],
    evidenceBlocks: [
      {
        title: "Entity → Screen Mapping",
        caption: "도메인 모델에서 바로 화면 구조로 연결",
        items: ["Faculty", "Department", "Curriculum", "Enrollment", "Reporting"],
      },
      {
        title: "CRUD Template Matrix",
        caption: "반복 관리 화면을 템플릿화",
        items: ["List + Filter", "Detail Drawer", "Create / Update Form", "Status Feedback"],
      },
      {
        title: "Admin / Student Flow",
        caption: "운영자와 학생의 흐름을 분리 설계",
        items: ["Admin Dashboard", "Approval Flow", "Student Schedule", "Progress Tracking"],
      },
      {
        title: "Collaboration Glossary",
        caption: "글로벌 협업에서 쓰는 공통 언어 정리",
        items: ["Domain Vocabulary", "Status Labels", "Release Notes", "Issue Priority"],
      },
    ],
    results: [
      "디자인 시안 없이도 유지보수 가능한 관리자 UI 뼈대를 세웠습니다.",
      "학생용 모바일 앱을 App Store에 공식 출시했습니다.",
      "글로벌 협업 경험을 구조화된 문서와 패턴으로 흡수했습니다.",
    ],
    reflection: [
      "디자인이 비어 있어도 도메인 구조가 명확하면 화면은 설계할 수 있습니다.",
      "글로벌 프로젝트일수록 화면보다 용어와 상태 정의를 먼저 맞추는 편이 효율적이었습니다.",
    ],
  },
  {
    slug: "lush-fresh-sale",
    theme: "lush",
    heroLabel: "CASE 03 · 커머스 운영",
    heroMetric: "앱 1위 3일",
    shortTitle: "LUSH Fresh Sale",
    title: "LUSH Fresh Sale 운영형 커머스 UI",
    summary: "반복 이벤트를 템플릿화해 속도와 전환을 함께 만든 프로젝트입니다.",
    teaser: "반복 이벤트를 템플릿으로 운영했습니다.",
    previewImage: "/assets/images/digital-demo2.png",
    galleryImages: ["/assets/images/digital-demo.png", "/assets/images/project4.png", "/assets/images/project44.jpg"],
    domain: "Consumer Commerce + Campaign Operations",
    role: "운영 퍼블리싱 · 인터랙션 · 전환 흐름",
    contribution: "이벤트 80% / 디지털 데모 100% / 프레쉬 세일 90%",
    publicScope: "부분 공개",
    stack: ["React 18", "Next.js 13", "Tailwind CSS", "SCSS"],
    outcomes: ["이벤트 월 8건+ 운영", "iPad 데모 구축", "App Store 1위 3일"],
    context: "짧은 일정 안에 브랜드 톤과 전환 흐름을 함께 맞춰야 했습니다.",
    roleLead: "운영 속도를 유지하면서도 브랜드 경험과 인터랙션의 밀도를 잃지 않는 역할을 맡았습니다.",
    constraintsLead: "이 케이스의 난도는 구현 자체보다 반복 제작과 전환 설계를 동시에 맞추는 데 있었습니다.",
    evidenceLead: "대표 캠페인 화면과 인터랙션 규칙만 펼쳐 보고, 나머지는 필요할 때 확인할 수 있게 정리했습니다.",
    resultLead: "이 케이스는 브랜드 톤을 지키면서도 운영과 성과를 함께 만든 작업으로 읽혀야 합니다.",
    constraints: ["짧은 일정", "브랜드 톤 유지", "디바이스 적응형", "운영 속도 요구", "성과성 페이지 설계"],
    ownership: ["이벤트 페이지 반복 퍼블리싱", "iPad 디지털 데모 인터랙션", "Fresh Sale 마크업과 프론트 기능 개발", "운영형 템플릿 정리"],
    decisions: [
      {
        title: "이벤트 페이지를 개별 산출물이 아니라 템플릿 시스템으로 봄",
        detail: "반복 제작되는 캠페인을 슬롯 기반 구조와 공통 모듈로 분해했습니다.",
        impact: "운영 속도를 유지하면서도 브랜드 품질을 일정하게 가져갈 수 있었습니다.",
      },
      {
        title: "터치 인터랙션을 사용 맥락 중심으로 규칙화함",
        detail: "iPad 가로모드 디지털 데모의 탐색 흐름을 터치 우선 규칙으로 정의했습니다.",
        impact: "현장 디바이스 환경에서 직관적인 체험이 가능해졌습니다.",
      },
      {
        title: "성과성 페이지는 시각보다 진입-탐색-전환 흐름을 먼저 봄",
        detail: "시선 유도, CTA 배치, 정보 우선순위를 전환 경로 관점에서 조정했습니다.",
        impact: "운영형 커머스 화면에서도 브랜드 경험과 성과를 동시에 챙길 수 있었습니다.",
      },
    ],
    evidenceBlocks: [
      {
        title: "Campaign Template Diagram",
        caption: "반복 제작되는 이벤트 페이지의 공통 슬롯",
        items: ["Hero", "Offer Block", "Product Grid", "CTA Group", "Legal / Notice"],
      },
      {
        title: "Touch Interaction Rules",
        caption: "iPad 가로모드 디지털 데모 기준",
        items: ["Swipe Range", "Tap Target", "Modal Depth", "Looping Interaction"],
      },
      {
        title: "Event Journey",
        caption: "진입에서 전환까지 흐름 설계",
        items: ["Entry Hook", "Offer Discovery", "Product Focus", "CTA Exit"],
      },
      {
        title: "Release / Performance Timeline",
        caption: "운영 속도와 성과를 함께 추적",
        items: ["Monthly Events 8+", "Fresh Sale Launch", "Traffic Lift", "App Ranking"],
      },
    ],
    results: [
      "운영형 이벤트 퍼블리싱을 월 평균 8건 이상 안정적으로 수행했습니다.",
      "디지털 데모와 커머스 페이지에서 디바이스 맥락에 맞는 인터랙션 규칙을 정리했습니다.",
      "프레쉬 세일의 iOS 쇼핑 앱 1위와 전체 무료 앱 1위 3일 유지 경험을 만들었습니다.",
    ],
    reflection: [
      "운영 속도가 중요한 환경일수록 개별 페이지보다 반복 가능한 구조가 더 강한 자산이 됩니다.",
      "커머스 UI에서도 화려함보다 전환 경로와 탐색 피로도를 먼저 설계해야 했습니다.",
    ],
  },
];

export const legacyCaseIdMap: Record<string, string> = {
  "1": "lush-fresh-sale",
  "2": "edulime-lms",
  "3": "samsung-ea-map",
};

export const nowBuilding: NowBuilding = {
  eyebrow: "NOW / CURRENT",
  title: "애드포터 Admin·Web·App 기준 설계",
  summary: "프론트엔드 기반이 없는 조직에서 화면보다 먼저 공통 뼈대와 작업 기준을 세우는 중입니다.",
  publicNote: "비공개 화면 대신 구조 설계, 운영 방식, 팀 기준만 공개합니다.",
  highlight: "현재 애드포터에서 공통 구조와 UI 기준을 잡고 있습니다.",
  liveUrl: "https://adpotter-web.vercel.app/main",
  pillars: [
    {
      title: "Platform Foundation",
      items: ["Admin·Web·App 공통 뼈대", "화면 뼈대와 폴더 기준", "서비스 공통 구조 정리"],
    },
    {
      title: "System Rules",
      items: ["MUI 컴포넌트 시스템", "네이밍 규칙 문서화", "반복 패턴과 예외 기준"],
    },
    {
      title: "Cross-functional Enablement",
      items: ["협업 허브와 실행 정렬", "기획·디자인·백엔드 조율", "AI 워크플로와 품질 기준"],
    },
  ],
};
