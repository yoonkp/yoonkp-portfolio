import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { nowBuilding } from "../../content/caseStudies";
import { siteMeta } from "../../content/siteMeta";
import { fadeRight, fadeUp, hoverLift, hoverLiftSoft, sectionStagger, sectionStaggerTight } from "../../lib/motion";

const heroHighlights = ["9년+ 실무", "모노레포", "MUI 시스템", "운영 UI"];

const heroRail = [
  {
    label: "현재 역할",
    value: "Addporter · PL",
  },
  {
    label: "집중 영역",
    value: "Admin·Web·App 구조",
  },
  {
    label: "핵심 증거",
    value: "재사용률 70%+ · 앱 출시 · 앱 1위",
  },
];

export function Hero() {
  return (
    <section id="home" className="section hero">
      <motion.div className="hero__copy" initial="hidden" animate="visible" variants={sectionStagger}>
        <motion.p className="section-eyebrow" variants={fadeUp}>
          {siteMeta.name} · UI Architect & Front-end Developer
        </motion.p>
        <motion.h1 variants={fadeUp}>운영 UI를 시스템으로 만드는 개발자</motion.h1>
        <motion.p className="hero__summary" variants={fadeUp}>
          모노레포와 UI 시스템을 설계하고, 운영 화면을 구조화해 왔습니다.
        </motion.p>

        <motion.div className="button-row" variants={fadeUp}>
          <Link className="primary-button" to={{ pathname: "/", hash: "#cases" }}>
            대표 케이스 보기
          </Link>
          <a className="secondary-button" href={siteMeta.resumeUrl} target="_blank" rel="noreferrer">
            이력서 보기
          </a>
          <a className="secondary-button" href={siteMeta.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </motion.div>

        <motion.div className="hero__chip-row" variants={sectionStaggerTight}>
          {heroHighlights.map((item) => (
            <motion.span key={item} variants={fadeUp} whileHover={hoverLiftSoft}>
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.aside
        className="hero__rail"
        initial="hidden"
        animate="visible"
        variants={sectionStagger}
      >
        <motion.p className="section-eyebrow" variants={fadeUp}>
          현재 진행 중
        </motion.p>
        <motion.h2 variants={fadeRight}>Addporter</motion.h2>
        <motion.p className="hero__rail-copy" variants={fadeRight}>
          {nowBuilding.highlight}
        </motion.p>

        <motion.div className="hero__rail-list" variants={sectionStaggerTight}>
          {heroRail.map((item) => (
            <motion.div key={item.label} className="hero__rail-item" variants={fadeRight}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </motion.div>
          ))}
        </motion.div>

        <motion.p className="hero__rail-note" variants={fadeRight}>
          2026.03.10 MVP 데모 완료 · 2026년 3월 말 PC Web 목표
        </motion.p>

        {nowBuilding.liveUrl ? (
          <motion.a
            className="primary-button"
            href={nowBuilding.liveUrl}
            target="_blank"
            rel="noreferrer"
            variants={fadeRight}
            whileHover={hoverLift}
          >
            데모 보기
          </motion.a>
        ) : null}
      </motion.aside>
    </section>
  );
}
