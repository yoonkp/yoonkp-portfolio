import { motion } from "framer-motion";
import { experiences } from "../../content/experience";
import { fadeUp, hoverLift, hoverLiftSoft, sectionStagger } from "../../lib/motion";

export function ExperienceSection() {
  const primaryExperiences = experiences.slice(0, 3);
  const foundationExperience = experiences[3];

  return (
    <section id="experience" className="section section--standard">
      <div className="section-heading">
        <p className="section-eyebrow">EXPERIENCE SNAPSHOT</p>
        <h2>경력은 회사보다 맡은 문제로 정리했습니다.</h2>
        <p>현재 역할, 엔터프라이즈, 커머스 중심으로만 먼저 읽히게 압축했습니다.</p>
      </div>

      <motion.div className="experience-timeline" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionStagger}>
        {primaryExperiences.map((experience) => (
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
              <p className="callout-label">핵심 기여</p>
              <p>{experience.decision}</p>
              <ul className="list-block">
                {experience.highlights.slice(0, 1).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="stack-row experience-timeline__tags">
              {experience.tags.slice(0, 2).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}

        {foundationExperience ? (
          <motion.article
            key={foundationExperience.company}
            className={`experience-timeline__item experience-timeline__item--${foundationExperience.theme}`}
            variants={fadeUp}
            whileHover={hoverLiftSoft}
          >
            <div className="experience-timeline__meta">
              <span className="timeline-card__stage">{foundationExperience.stage}</span>
              <div>
                <h3>{foundationExperience.company}</h3>
                <p>{foundationExperience.role}</p>
              </div>
            </div>

            <div className="experience-timeline__focus">
              <p className="callout-label">FOUNDATION</p>
              <strong>퍼블리셔 기반 실무 체력과 운영 경험을 쌓은 시기</strong>
              <p className="experience-card__summary">{foundationExperience.summary}</p>
            </div>

            <div className="experience-timeline__decision">
              <p className="callout-label">기반 역량</p>
              <p>{foundationExperience.decision}</p>
              <ul className="list-block">
                <li>{foundationExperience.highlights[0]}</li>
              </ul>
            </div>

            <div className="stack-row experience-timeline__tags">
              {foundationExperience.tags.slice(0, 2).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ) : null}
      </motion.div>
    </section>
  );
}
