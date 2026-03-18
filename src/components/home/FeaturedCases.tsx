import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { caseStudies } from "../../content/caseStudies";
import { fadeRight, fadeUp, hoverLift, sectionStagger, sectionStaggerTight } from "../../lib/motion";

export function FeaturedCases() {
  const [leadCase, ...supportCases] = caseStudies;

  return (
    <section id="cases" className="section section--featured">
      <div className="section-heading">
        <p className="section-eyebrow">FEATURED CASE STUDIES</p>
        <h2>설계와 결과를 보여주는 케이스</h2>
        <p>화면보다 판단과 결과를 먼저 보여줍니다.</p>
      </div>

      <motion.div className="featured-layout" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionStagger}>
        <motion.article className="case-card case-card--lead" variants={fadeUp} whileHover={hoverLift}>
          <Link className="case-card__media case-card__media--lead" to={`/case/${leadCase.slug}`}>
            <img src={leadCase.previewImage} alt={`${leadCase.shortTitle} preview`} />
            <div className="case-card__visual-overlay">
              <p>{leadCase.heroMetric}</p>
              <span>{leadCase.heroLabel}</span>
            </div>
          </Link>

          <div className="case-card__content">
            <h3>{leadCase.shortTitle}</h3>
            <p className="case-card__summary">{leadCase.teaser}</p>
            <div className="case-card__meta-line">
              <span>{leadCase.domain}</span>
              <span>{leadCase.contribution}</span>
            </div>
            <ul className="list-block">
              {leadCase.outcomes.slice(0, 2).map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <Link className="text-link" to={`/case/${leadCase.slug}`}>
              상세 보기
            </Link>
          </div>
        </motion.article>

        <motion.div className="case-card-stack" variants={sectionStaggerTight}>
          {supportCases.map((caseStudy, index) => (
            <motion.article
              className={`case-card case-card--support case-card--support-${index + 1}`}
              key={caseStudy.slug}
              variants={fadeRight}
              whileHover={hoverLift}
            >
              <Link className="case-card__media" to={`/case/${caseStudy.slug}`}>
                <img src={caseStudy.previewImage} alt={`${caseStudy.shortTitle} preview`} />
                <div className="case-card__visual-overlay">
                  <p>{caseStudy.heroMetric}</p>
                  <span>{caseStudy.heroLabel}</span>
                </div>
              </Link>
              <div className="case-card__content">
                <h3>{caseStudy.shortTitle}</h3>
                <p className="case-card__summary">{caseStudy.teaser}</p>
                <p className="case-card__support-outcome">{caseStudy.outcomes[0]}</p>
                <Link className="text-link" to={`/case/${caseStudy.slug}`}>
                  상세 보기
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
