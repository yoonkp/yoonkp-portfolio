import { Link } from "react-router-dom";
import { siteMeta } from "../../content/siteMeta";

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <p className="section-eyebrow">CONTACT / NEXT CONVERSATION</p>
          <h2>구조를 세울 줄 알고, 화면도 끝까지 책임지는 퍼블리셔 기반 프런트엔드 개발자입니다.</h2>
          <p>
            운영 UI, Admin UI, 데이터 UI, 디자인 시스템, 협업 구조가 필요한 팀이라면 대표 케이스와 현재 역할을 기준으로 바로 대화를 시작할 수 있습니다.
          </p>
        </div>

        <div className="site-footer__actions">
          <a className="primary-button" href={`mailto:${siteMeta.email}`}>
            {siteMeta.email}
          </a>
          <a className="secondary-button" href={`tel:${siteMeta.phone.replace(/-/g, "")}`}>
            {siteMeta.phone}
          </a>
          <a className="secondary-button" href={siteMeta.resumeUrl} target="_blank" rel="noreferrer">
            이력서 보기
          </a>
          <a className="secondary-button" href={siteMeta.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link className="secondary-button" to={{ pathname: "/", hash: "#cases" }}>
            대표 케이스
          </Link>
        </div>

        <p className="site-footer__copy">© 2026 Park Yoon Kyung. Front-end UI systems portfolio.</p>
      </div>
    </footer>
  );
}
