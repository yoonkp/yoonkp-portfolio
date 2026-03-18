import { motion } from "framer-motion";
import { experiences } from "../../content/experience";
import { fadeUp, hoverLift, hoverLiftSoft, sectionStagger } from "../../lib/motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="section section--standard">
      <div className="section-heading">
        <p className="section-eyebrow">EXPERIENCE SNAPSHOT</p>
        <h2>문제 난이도로 증명한 경력</h2>
        <p>회사 이름보다 어떤 문제를 맡았고, 어떤 판단으로 풀었는지를 먼저 정리했습니다.</p>
      </div>

      <motion.div className="experience-timeline" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionStagger}>
        {experiences.map((experience) => (
          <motion.article
            key={experience.company}
            className={`experience-timeline__item experience-timeline__item--${experience.theme}`}
            variants={fadeUp}
            whileHover={experience.theme === "current" ? hoverLiftSoft : hoverLift}
          >
            <div className="experience-timeline__meta">
              <span className="timeline-card__stage">{experience.stage}</span>
              <div>
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
              </div>
            </div>

            <div className="experience-timeline__focus">
              <p className="callout-label">FOCUS</p>
              <strong>{experience.focus}</strong>
              <p className="experience-card__summary">{experience.summary}</p>
            </div>

            <div className="experience-timeline__decision">
              <p className="callout-label">주요 판단</p>
              <p>{experience.decision}</p>
              <ul className="list-block">
                {experience.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="stack-row experience-timeline__tags">
              {experience.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
