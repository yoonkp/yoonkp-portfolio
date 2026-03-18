import { motion } from "framer-motion";
import { siteMeta } from "../../content/siteMeta";
import { nowBuilding } from "../../content/caseStudies";
import { fadeUp, hoverLift, sectionStagger } from "../../lib/motion";

export function NowBuilding() {
  return (
    <section id="now" className="section section--standard">
      <div className="section-heading">
        <p className="section-eyebrow">{nowBuilding.eyebrow}</p>
        <h2>{nowBuilding.title}</h2>
        <p>{nowBuilding.summary}</p>
      </div>

      <motion.div className="now-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionStagger}>
        <motion.article className="now-spotlight" variants={fadeUp} whileHover={hoverLift}>
          <p className="callout-label">CURRENT ROLE</p>
          <h3>{nowBuilding.highlight}</h3>
          <p className="callout-copy">{nowBuilding.publicNote}</p>
          <p className="now-spotlight__meta">2026.03.10 MVP 데모 완료 · 2026년 3월 말 PC Web 목표</p>
          <div className="button-row">
            {nowBuilding.liveUrl ? (
              <a className="primary-button" href={nowBuilding.liveUrl} target="_blank" rel="noreferrer">
                데모 보기
              </a>
            ) : null}
            <a className="secondary-button" href={siteMeta.resumeUrl} target="_blank" rel="noreferrer">
              이력서
            </a>
          </div>
        </motion.article>

        <motion.article className="now-model" variants={fadeUp}>
          <p className="callout-label">OPERATING MODEL</p>
          <p className="callout-copy">구조, 구현, 문서, 협업을 한 흐름으로 묶습니다.</p>
        </motion.article>

        <div className="now-pillars">
          {nowBuilding.pillars.map((pillar) => (
            <motion.article className="now-card" key={pillar.title} variants={fadeUp} whileHover={hoverLift}>
              <p className="callout-label">{pillar.title}</p>
              <h3>{pillar.items[0]}</h3>
              <ul className="list-block">
                {pillar.items.slice(1).map((item) => (
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
