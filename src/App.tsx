import {
  createBrowserRouter,
  Link,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { siteMeta } from "./content/siteMeta";
import { caseStudies, legacyCaseIdMap } from "./content/caseStudies";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { CaseStudyPage } from "./pages/CaseStudyPage";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");

      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.hash, location.pathname]);

  return null;
}

function SiteLayout() {
  return (
    <div className="app-shell">
      <ScrollManager />
      <Header />
      <div className="page-shell">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function CaseStudyRoute() {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return <NotFoundPage />;
  }

  return <CaseStudyPage caseStudy={caseStudy} />;
}

function LegacyProjectRedirect() {
  const { id } = useParams();
  const slug = id ? legacyCaseIdMap[id] : undefined;

  if (!slug) {
    return <NotFoundPage />;
  }

  return <Navigate to={`/case/${slug}`} replace />;
}

function NotFoundPage() {
  return (
    <main className="not-found page">
      <p className="section-eyebrow">PAGE NOT FOUND</p>
      <h1>요청한 페이지를 찾을 수 없습니다.</h1>
      <p className="page-copy">
        케이스 스터디 링크가 바뀌었거나 잘못된 주소로 접근했습니다. 홈으로 돌아가 대표 케이스를 다시 확인해 주세요.
      </p>
      <div className="button-row">
        <Link className="primary-button" to="/">
          홈으로 이동
        </Link>
        <a className="secondary-button" href={siteMeta.resumeUrl} target="_blank" rel="noreferrer">
          이력서 보기
        </a>
      </div>
    </main>
  );
}

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/case/:slug", element: <CaseStudyRoute /> },
      { path: "/project-detail/:id", element: <LegacyProjectRedirect /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <RouterProvider router={router} />
    </MotionConfig>
  );
}
