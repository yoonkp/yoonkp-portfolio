import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { caseStudies } from "../../content/caseStudies";
import { caseCardHover, caseMediaImage, caseMediaOverlay, ctaHover, ctaTap, fadeRight, fadeUp, hoverLiftSoft, sectionStagger, sectionStaggerTight } from "../../lib/motion";

const MotionLink = motion(Link);
const featuredOrder = ["lush-fresh-sale", "edulime-lms", "samsung-ea-map"] as const;

export function FeaturedCases() {
  const orderedCases = featuredOrder
    .map((slug) => caseStudies.find((caseStudy) => caseStudy.slug === slug))
    .filter((caseStudy): caseStudy is (typeof caseStudies)[number] => Boolean(caseStudy));
  const [leadCase, ...supportCases] = orderedCases;

  return (
    <section id="cases" className="section section--featured">
      <div className="section-heading">
        <p className="section-eyebrow">FEATURED CASE STUDIES</p>
        <h2>설계와 결과가 같이 보이는 사례</h2>
        <p>대표 장면, 핵심 판단, 결과를 한 화면에서 빠르게 읽히게 정리했습니다.</p>
      </div>

      <motion.div className="featured-layout" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionStagger}>
        <motion.article
          className={`case-card case-card--lead case-card--${leadCase.theme}`}
          variants={fadeUp}
          whileHover={hoverLiftSoft}
        >
          <motion.div initial="rest" whileHover="hover" animate="rest" variants={caseCardHover}>
            <MotionLink className="case-card__media case-card__media--lead" to={`/case/${leadCase.slug}`}>
              <motion.img src={leadCase.previewImage} alt={`${leadCase.shortTitle} preview`} variants={caseMediaImage} />
              <motion.div className="case-card__visual-overlay" variants={caseMediaOverlay}>
                <p>{leadCase.heroMetric}</p>
                <span>{leadCase.heroLabel}</span>
                <em>CASE STUDY</em>
              </motion.div>
            </MotionLink>
          </motion.div>

          <div className="case-card__content">
            <p className="callout-label">{leadCase.domain}</p>
            <h3>{leadCase.shortTitle}</h3>
            <p className="case-card__summary">{leadCase.summary}</p>
            <div className="case-card__meta-line">
              <span>{leadCase.heroMetric}</span>
              <span>{leadCase.contribution}</span>
            </div>
            <ul className="list-block">
              {leadCase.outcomes.slice(0, 2).map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <div className="case-card__actions">
              <MotionLink className="case-card__cta" to={`/case/${leadCase.slug}`} whileHover={ctaHover} whileTap={ctaTap}>
                케이스 스터디 보기
                <span aria-hidden="true">→</span>
              </MotionLink>
            </div>
          </div>
        </motion.article>

        <motion.div className="case-card-stack" variants={sectionStaggerTight}>
          {supportCases.map((caseStudy, index) => (
            <motion.article
              className={`case-card case-card--support case-card--support-${index + 1} case-card--${caseStudy.theme}`}
              key={caseStudy.slug}
              variants={fadeRight}
              whileHover={hoverLiftSoft}
            >
              <motion.div initial="rest" whileHover="hover" animate="rest" variants={caseCardHover}>
                <MotionLink className="case-card__media" to={`/case/${caseStudy.slug}`}>
                  <motion.img src={caseStudy.previewImage} alt={`${caseStudy.shortTitle} preview`} variants={caseMediaImage} />
                  <motion.div className="case-card__visual-overlay" variants={caseMediaOverlay}>
                    <p>{caseStudy.heroMetric}</p>
                    <span>{caseStudy.heroLabel}</span>
                    <em>CASE STUDY</em>
                  </motion.div>
                </MotionLink>
              </motion.div>
              <div className="case-card__content">
                <p className="callout-label">{caseStudy.domain}</p>
                <h3>{caseStudy.shortTitle}</h3>
                <p className="case-card__summary">{caseStudy.teaser}</p>
                <p className="case-card__support-outcome">{caseStudy.outcomes[0]}</p>
                <div className="case-card__actions case-card__actions--compact">
                  <span className="case-card__metric">{caseStudy.heroMetric}</span>
                  <MotionLink className="case-card__cta case-card__cta--quiet" to={`/case/${caseStudy.slug}`} whileHover={ctaHover} whileTap={ctaTap}>
                    자세히 보기
                    <span aria-hidden="true">→</span>
                  </MotionLink>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
