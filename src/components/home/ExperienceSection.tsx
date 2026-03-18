import { motion } from "framer-motion";
import { experiences } from "../../content/experience";
import { fadeUp, hoverLift, sectionStagger } from "../../lib/motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="section section--standard">
      <div className="section-heading">
        <p className="section-eyebrow">EXPERIENCE SNAPSHOT</p>
        <h2>경험은 회사보다 문제 기준으로 정리했습니다.</h2>
      </div>

      <motion.div className="experience-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionStagger}>
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            className={`experience-card${index === 0 ? " experience-card--current" : ""}`}
            variants={fadeUp}
            whileHover={hoverLift}
          >
            <div className="experience-card__header">
              <span className="timeline-card__stage">{experience.stage}</span>
              <div>
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
              </div>
            </div>

            <div className="experience-card__body">
              <p className="experience-card__summary">{experience.summary}</p>

              <ul className="list-block">
                {experience.highlights.slice(0, index === 0 ? 3 : 2).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="stack-row experience-card__tags">
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
