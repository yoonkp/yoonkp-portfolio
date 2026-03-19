import { motion } from "framer-motion";
import { siteMeta } from "../../content/siteMeta";
import { nowBuilding } from "../../content/caseStudies";
import { ctaHover, ctaTap, fadeUp, hoverLift, sectionStagger } from "../../lib/motion";
import { ProofBar } from "./ProofBar";

export function NowBuilding() {
  return (
    <section id="now" className="section section--standard">
      <div className="section-heading">
        <p className="section-eyebrow">{nowBuilding.eyebrow}</p>
        <h2>현재 애드포터에서 공통 구조를 세우고 있습니다.</h2>
        <p>공개 가능한 범위에서는 화면보다 구조와 운영 기준이 먼저 보이게 정리했습니다.</p>
      </div>

      <motion.div className="now-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionStagger} style={{ gap: "16px" }}>
        <motion.article className="now-spotlight" variants={fadeUp} whileHover={hoverLift} style={{ gridColumn: "span 8" }}>
          <div className="now-spotlight__heading">
            <p className="callout-label">CURRENT ROLE</p>
            <span className="timeline-card__stage">2025.09 ~</span>
          </div>
          <h3>{nowBuilding.title}</h3>
          <p className="callout-copy">{nowBuilding.publicNote}</p>
          <div className="now-spotlight__status">
            <span className="now-spotlight__dot" />
            <strong>MVP Demo 완료</strong>
            <span>PC Web 오픈 준비 중</span>
          </div>
          <ul className="list-block">
            <li>프론트엔드 부재 상태에서 구조와 규칙을 처음부터 설계</li>
            <li>Admin·Web·App이 같은 기준으로 움직이도록 모노레포와 MUI 기준 정리</li>
          </ul>
          <div className="button-row">
            {nowBuilding.liveUrl ? (
              <motion.a className="primary-button" href={nowBuilding.liveUrl} target="_blank" rel="noreferrer" whileHover={ctaHover} whileTap={ctaTap}>
                Live Demo
              </motion.a>
            ) : null}
            <motion.a className="secondary-button" href={siteMeta.resumeUrl} target="_blank" rel="noreferrer" whileHover={ctaHover} whileTap={ctaTap}>
              이력서
            </motion.a>
          </div>
        </motion.article>

        <motion.article className="now-model" variants={fadeUp} whileHover={hoverLift} style={{ gridColumn: "span 4" }}>
          <p className="callout-label">WHY THIS ROLE MATTERS</p>
          <p className="callout-copy">단일 화면 구현보다 팀이 같은 기준 위에서 빠르게 움직일 수 있는 구조를 먼저 만드는 역할입니다.</p>
          <ul className="mono-list">
            <li>Monorepo / package boundary</li>
            <li>MUI variant / naming rule</li>
            <li>Design ↔ Back-end handoff</li>
          </ul>
        </motion.article>

        <div className="now-pillars" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {nowBuilding.pillars.slice(0, 3).map((pillar) => (
            <motion.article className="now-card" key={pillar.title} variants={fadeUp} whileHover={hoverLift}>
              <p className="callout-label">{pillar.title}</p>
              <h3>{pillar.items[0]}</h3>
              <p className="callout-copy" style={{ margin: 0 }}>{pillar.items[1]}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <ProofBar compact />
    </section>
  );
}
