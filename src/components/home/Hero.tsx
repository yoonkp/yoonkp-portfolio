import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { heroSignals } from "../../content/siteMeta";
import { nowBuilding } from "../../content/caseStudies";
import { siteMeta } from "../../content/siteMeta";
import { caseCardHover, ctaHover, ctaTap, fadeRight, fadeUp, hoverLiftSoft, sectionStagger, sectionStaggerTight } from "../../lib/motion";

const heroHighlights = ["9년+ 실무", "재사용률 70%+", "App 출시"];
const MotionAnchor = motion.a;

export function Hero() {
  return (
    <section id="home" className="section hero">
      <motion.div className="hero__copy" initial="hidden" animate="visible" variants={sectionStagger}>
        <motion.p className="section-eyebrow" variants={fadeUp}>
          {siteMeta.name} · {siteMeta.title}
        </motion.p>
        <motion.h1 variants={fadeUp}>운영 UI를 시스템으로 바꿉니다.</motion.h1>
        <motion.p className="hero__summary" variants={fadeUp}>
          혼합 Admin, LMS, 커머스에서 구조를 설계해 팀 속도와 일관성을 높였습니다.
        </motion.p>

        <motion.div className="hero__chip-row" variants={sectionStaggerTight}>
          {heroHighlights.map((item) => (
            <motion.span key={item} variants={fadeUp} whileHover={hoverLiftSoft}>
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.div className="button-row" variants={fadeUp}>
          <motion.div whileHover={ctaHover} whileTap={ctaTap}>
            <Link className="primary-button" to={{ pathname: "/", hash: "#now" }}>
              현재 역할
            </Link>
          </motion.div>
          <motion.div whileHover={ctaHover} whileTap={ctaTap}>
            <Link className="secondary-button" to={{ pathname: "/", hash: "#cases" }}>
              주요 사례
            </Link>
          </motion.div>
          <motion.div className="hero__inline-link" variants={fadeUp}>
            <MotionAnchor href={siteMeta.resumeUrl} target="_blank" rel="noreferrer" whileHover={ctaHover} whileTap={ctaTap}>
              이력서
            </MotionAnchor>
            <span>·</span>
            <MotionAnchor href={siteMeta.githubUrl} target="_blank" rel="noreferrer" whileHover={ctaHover} whileTap={ctaTap}>
              GitHub
            </MotionAnchor>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.aside className="hero__rail" initial="hidden" animate="visible" variants={sectionStagger}>
        {nowBuilding.liveUrl ? (
          <motion.div variants={fadeRight}>
            <motion.a className="hero__preview-link" href={nowBuilding.liveUrl} target="_blank" rel="noreferrer" whileHover={hoverLiftSoft} whileTap={ctaTap}>
              <motion.div className="hero__preview-shell" initial="rest" animate="rest" whileHover="hover" variants={caseCardHover}>
                <span className="hero__preview-kicker">LIVE DEMO</span>
                <div className="hero__preview-stage">
                  <div className="hero__preview-grid" />
                  <div className="hero__preview-orbit hero__preview-orbit--outer" />
                  <div className="hero__preview-orbit hero__preview-orbit--inner" />
                  <div className="hero__preview-node hero__preview-node--center">
                    <strong>Adpotter</strong>
                    <span>Admin · Web · App</span>
                  </div>
                  <div className="hero__preview-node hero__preview-node--admin">Admin</div>
                  <div className="hero__preview-node hero__preview-node--web">Web</div>
                  <div className="hero__preview-node hero__preview-node--app">App</div>
                  <div className="hero__preview-scan" />
                </div>
                <div className="hero__preview-copy">
                  <strong>2026.03 MVP Demo</strong>
                  <span>Live Demo 열기</span>
                </div>
              </motion.div>
            </motion.a>
          </motion.div>
        ) : null}

        <motion.p className="section-eyebrow" variants={fadeUp}>
          NOW
        </motion.p>
        <motion.h2 variants={fadeRight}>현재 애드포터 PL</motion.h2>
        <motion.p className="hero__rail-copy" variants={fadeRight}>
          Admin·Web·App 구조와 MUI 기준을 세우는 중입니다.
        </motion.p>

        <motion.div className="hero__proof-grid" variants={sectionStaggerTight}>
          {heroSignals.slice(0, 2).map((signal) => (
            <motion.article className="hero__proof-card" key={signal.eyebrow} variants={fadeRight} whileHover={hoverLiftSoft}>
              <p className="callout-label">{signal.eyebrow}</p>
              <strong>{signal.title}</strong>
              <span>{signal.lines[0]}</span>
            </motion.article>
          ))}
        </motion.div>

        <motion.p className="hero__rail-note" variants={fadeRight}>
          2026.03 MVP 데모 완료 · PC Web 준비 중
        </motion.p>
      </motion.aside>
    </section>
  );
}
