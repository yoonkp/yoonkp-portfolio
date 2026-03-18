import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { CaseStudy } from "../../types/portfolio";
import { siteMeta } from "../../content/siteMeta";
import { fadeRight, fadeUp, hoverLift, sectionStagger, sectionStaggerTight } from "../../lib/motion";

interface CaseStudyViewProps {
  caseStudy: CaseStudy;
}

export function CaseStudyView({ caseStudy }: CaseStudyViewProps) {
  const factRail = [caseStudy.heroMetric, caseStudy.outcomes[0], caseStudy.contribution, caseStudy.publicScope];

  return (
    <main className={`page case-page case-page--${caseStudy.theme}`}>
      <motion.section className="case-hero" initial="hidden" animate="visible" variants={sectionStagger}>
        <motion.div className="case-hero__copy" variants={sectionStagger}>
          <motion.p className="section-eyebrow" variants={fadeUp}>
            {caseStudy.heroLabel}
          </motion.p>
          <motion.h1 variants={fadeUp}>{caseStudy.shortTitle}</motion.h1>
          <motion.p className="page-copy" variants={fadeUp}>
            {caseStudy.summary}
          </motion.p>
          <motion.div className="case-meta" variants={fadeUp}>
            <span>{caseStudy.domain}</span>
            <span>{caseStudy.contribution}</span>
            <span>{caseStudy.publicScope}</span>
          </motion.div>
        </motion.div>

        <motion.div className="case-hero__visual" variants={fadeUp}>
          <motion.figure className="case-hero__preview" whileHover={hoverLift}>
            <img src={caseStudy.previewImage} alt={`${caseStudy.shortTitle} preview`} />
            <figcaption>
              <p>{caseStudy.heroMetric}</p>
              <strong>{caseStudy.shortTitle}</strong>
            </figcaption>
          </motion.figure>
          <div className="case-hero__actions">
            <Link className="secondary-button" to={{ pathname: "/", hash: "#cases" }}>
              케이스 목록
            </Link>
            <a className="secondary-button" href={siteMeta.resumeUrl} target="_blank" rel="noreferrer">
              이력서 보기
            </a>
            <a className="secondary-button" href={siteMeta.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </motion.div>
      </motion.section>

      <motion.section className="case-fact-rail" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={sectionStagger}>
        {factRail.map((fact) => (
          <motion.article className="case-fact-rail__item" key={fact} variants={fadeUp}>
            {fact}
          </motion.article>
        ))}
      </motion.section>

      <section className="case-layout">
        <motion.div className="case-main" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionStagger}>
          <motion.article className="story-panel story-panel--soft" variants={fadeUp}>
            <h2>문제 정의</h2>
            <p>{caseStudy.context}</p>
          </motion.article>

          <div className="story-split">
            <motion.article className="story-panel story-panel--soft" variants={fadeUp}>
              <h2>제약 조건</h2>
              <ul className="list-block">
                {caseStudy.constraints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>

            <motion.article className="story-panel story-panel--soft" variants={fadeUp}>
              <h2>담당 범위</h2>
              <ul className="list-block">
                {caseStudy.ownership.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          </div>

          <motion.article className="story-panel story-panel--open" variants={fadeUp}>
            <h2>핵심 설계 판단</h2>
            <motion.div className="decision-sequence" variants={sectionStaggerTight}>
              {caseStudy.decisions.map((decision, index) => (
                <motion.article className="decision-step" key={decision.title} variants={fadeRight}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{decision.title}</h3>
                    <p>{decision.detail}</p>
                    <strong>{decision.impact}</strong>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.article>

          <motion.article className="story-panel story-panel--open" variants={fadeUp}>
            <h2>증거 자료</h2>
            <div className="evidence-media-grid">
              <figure className="evidence-media evidence-media--lead">
                <img src={caseStudy.previewImage} alt={`${caseStudy.shortTitle} evidence`} />
              </figure>
              {caseStudy.galleryImages.slice(0, 2).map((image) => (
                <figure className="evidence-media" key={image}>
                  <img src={image} alt={`${caseStudy.shortTitle} gallery`} />
                </figure>
              ))}
            </div>
            <motion.div className="evidence-block-grid" variants={sectionStaggerTight}>
              {caseStudy.evidenceBlocks.map((block, index) => (
                <motion.article
                  className={`evidence-card${index === 0 ? " evidence-card--lead" : ""}`}
                  key={block.title}
                  variants={fadeRight}
                >
                  <p className="callout-label">{block.title}</p>
                  <p className="evidence-card__caption">{block.caption}</p>
                  <ul className="mono-list">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </motion.div>
          </motion.article>

          <motion.article className="story-panel story-panel--strong" variants={fadeUp}>
            <h2>결과와 인사이트</h2>
            <div className="detail-grid">
              <div>
                <p className="callout-label">RESULTS</p>
                <ul className="list-block">
                  {caseStudy.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="callout-label">REFLECTION</p>
                <ul className="list-block">
                  {caseStudy.reflection.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        </motion.div>

        <motion.aside className="case-sidebar" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionStagger}>
          <motion.article className="side-panel" variants={fadeUp}>
            <p className="callout-label">핵심 정보</p>
            <ul className="list-block">
              <li>{caseStudy.heroMetric}</li>
              <li>{caseStudy.domain}</li>
              <li>{caseStudy.role}</li>
              <li>{caseStudy.publicScope}</li>
            </ul>
          </motion.article>

          <motion.article className="side-panel" variants={fadeUp}>
            <p className="callout-label">Stack</p>
            <div className="stack-row">
              {caseStudy.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>

          <motion.article className="side-panel" variants={fadeUp}>
            <p className="callout-label">다음 이동</p>
            <div className="button-row">
              <Link className="secondary-button" to={{ pathname: "/", hash: "#cases" }}>
                대표 케이스
              </Link>
            </div>
          </motion.article>
        </motion.aside>
      </section>
    </main>
  );
}
