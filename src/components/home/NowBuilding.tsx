import { motion } from "framer-motion";
import { siteMeta } from "../../content/siteMeta";
import { nowBuilding } from "../../content/caseStudies";
import { ctaHover, ctaTap, fadeUp, hoverLift, sectionStagger } from "../../lib/motion";

export function NowBuilding() {
  return (
    <section id="now" className="section section--standard">
      <div className="section-heading">
        <p className="section-eyebrow">{nowBuilding.eyebrow}</p>
        <h2>{nowBuilding.highlight}</h2>
        <p>{nowBuilding.summary}</p>
      </div>

      <motion.div className="now-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionStagger}>
        <motion.article className="now-spotlight" variants={fadeUp} whileHover={hoverLift}>
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
            <li>프론트엔드 부재 상태에서 구조, 규칙, 화면 기준을 동시 설계</li>
            <li>Admin·Web·App이 같은 언어로 움직이도록 모노레포와 MUI 기준 정리</li>
            <li>개발팀이 바로 이어받을 수 있게 문서와 패턴을 함께 운영</li>
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

        <motion.article className="now-model" variants={fadeUp} whileHover={hoverLift}>
          <p className="callout-label">WHY THIS MATTERS NOW</p>
          <p className="callout-copy">
            지금 보여줄 수 있는 것은 화면보다 기준선입니다. 공개 가능한 범위 안에서 구조, 문서, 협업 방식을 먼저 증명합니다.
          </p>
          <ul className="mono-list">
            <li>Monorepo / package boundaries</li>
            <li>MUI variant / naming rules</li>
            <li>Design ↔ Back-end handoff model</li>
          </ul>
        </motion.article>

        <div className="now-pillars">
          {nowBuilding.pillars.map((pillar) => (
            <motion.article className="now-card" key={pillar.title} variants={fadeUp} whileHover={hoverLift}>
              <p className="callout-label">{pillar.title}</p>
              <h3>{pillar.items[0]}</h3>
              <ul className="list-block">
                {pillar.items.slice(1, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
