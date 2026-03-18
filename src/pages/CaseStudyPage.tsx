import { CaseStudyView } from "../components/case/CaseStudyView";
import type { CaseStudy } from "../types/portfolio";

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

export function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  return <CaseStudyView caseStudy={caseStudy} />;
}
