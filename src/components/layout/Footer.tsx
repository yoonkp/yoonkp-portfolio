import { Link, useLocation } from "react-router-dom";
import { siteMeta } from "../../content/siteMeta";

export function Footer() {
  const location = useLocation();
  const isCasePage = location.pathname.startsWith("/case/");

  if (isCasePage) {
    return (
      <footer id="contact" className="site-footer site-footer--compact">
        <div className="site-footer__inner">
          <div className="site-footer__intro">
            <p className="section-eyebrow">CONTACT</p>
            <h2>현재 역할과 대표 사례만 이어서 보시면 됩니다.</h2>
          </div>

          <div className="site-footer__actions">
            <a className="primary-button" href={`mailto:${siteMeta.email}`}>
              {siteMeta.email}
            </a>
            <Link className="secondary-button" to={{ pathname: "/", hash: "#now" }}>
              현재 역할
            </Link>
            <Link className="secondary-button" to={{ pathname: "/", hash: "#cases" }}>
              주요 사례
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <p className="section-eyebrow">CONTACT</p>
          <h2>운영 UI를 구조와 기준으로 정리하는 프론트엔드 개발자입니다.</h2>
          <p>대표 사례와 현재 역할을 먼저 보신 뒤, 바로 연락하실 수 있게 정리했습니다.</p>
        </div>

        <div className="site-footer__actions">
          <a className="primary-button" href={`mailto:${siteMeta.email}`}>
            {siteMeta.email}
          </a>
          <a className="secondary-button" href={siteMeta.resumeUrl} target="_blank" rel="noreferrer">
            이력서
          </a>
          <Link className="secondary-button" to={{ pathname: "/", hash: "#cases" }}>
            주요 사례
          </Link>
        </div>

        <p className="site-footer__copy">© 2026 Park Yoon Kyung. UI systems portfolio.</p>
      </div>
    </footer>
  );
}
