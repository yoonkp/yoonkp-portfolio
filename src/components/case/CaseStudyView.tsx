import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { caseStudies, nowBuilding } from "../../content/caseStudies";
import type { CaseStudy } from "../../types/portfolio";
import { siteMeta } from "../../content/siteMeta";
import {
  caseCardHover,
  caseMediaImage,
  caseHeroCaption,
  ctaHover,
  ctaTap,
  decisionHover,
  evidenceImage,
  evidenceMedia,
  fadeRight,
  fadeUp,
  hoverLift,
  sectionStagger,
  sectionStaggerTight,
} from "../../lib/motion";

const MotionLink = motion(Link);
const MotionButton = motion.button;

interface CaseStudyViewProps {
  caseStudy: CaseStudy;
}

export function CaseStudyView({ caseStudy }: CaseStudyViewProps) {
  const factRail = [caseStudy.heroMetric, caseStudy.outcomes[0], caseStudy.role, caseStudy.contribution];
  const [activeEvidenceTitle, setActiveEvidenceTitle] = useState(caseStudy.evidenceBlocks[0]?.title ?? "");
  const [openPanels, setOpenPanels] = useState({
    constraints: false,
    evidence: false,
    stack: false,
  });
  useEffect(() => {
    setActiveEvidenceTitle(caseStudy.evidenceBlocks[0]?.title ?? "");
    setOpenPanels({
      constraints: false,
      evidence: false,
      stack: false,
    });
  }, [caseStudy]);
  const activeEvidence = useMemo(
    () => caseStudy.evidenceBlocks.find((block) => block.title === activeEvidenceTitle) ?? caseStudy.evidenceBlocks[0],
    [activeEvidenceTitle, caseStudy.evidenceBlocks],
  );
  const currentIndex = caseStudies.findIndex((item) => item.slug === caseStudy.slug);
  const nextCase = caseStudies[(currentIndex + 1) % caseStudies.length];
  const togglePanel = (panel: keyof typeof openPanels) => {
    setOpenPanels((current) => ({
      ...current,
      [panel]: !current[panel],
    }));
  };
  const disclosureButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    minHeight: "36px",
    padding: "0 14px",
    borderRadius: "999px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    background: "rgba(255, 255, 255, 0.04)",
    color: "inherit",
    cursor: "pointer",
  } as const;
  const sectionHeaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
  } as const;

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
            <span>{caseStudy.role}</span>
          </motion.div>
        </motion.div>

        <motion.div className="case-hero__visual" variants={fadeUp}>
          <motion.figure
            className="case-hero__preview"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={caseCardHover}
          >
            <motion.img src={caseStudy.previewImage} alt={`${caseStudy.shortTitle} preview`} variants={caseMediaImage} />
            <motion.figcaption variants={caseHeroCaption}>
              <p>{caseStudy.heroMetric}</p>
              <strong>{caseStudy.shortTitle}</strong>
            </motion.figcaption>
          </motion.figure>
          <div className="case-hero__actions">
            <MotionLink
              className="secondary-button"
              to={{ pathname: "/", hash: "#cases" }}
              whileHover={ctaHover}
              whileTap={ctaTap}
            >
              전체 사례
            </MotionLink>
            <motion.a
              className="secondary-button"
              href={siteMeta.resumeUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={ctaHover}
              whileTap={ctaTap}
            >
              이력서
            </motion.a>
            <motion.a
              className="secondary-button"
              href={siteMeta.githubUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={ctaHover}
              whileTap={ctaTap}
            >
              GitHub
            </motion.a>
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
          <motion.article className="story-panel story-panel--strong" variants={fadeUp}>
            <h2>결과</h2>
            <p>{caseStudy.resultLead}</p>
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

          <div className="story-split">
          <motion.article className="story-panel story-panel--soft" variants={fadeUp}>
            <h2>문제</h2>
            <p>{caseStudy.context}</p>
          </motion.article>

          <motion.article className="story-panel story-panel--soft" variants={fadeUp}>
            <h2>역할</h2>
            <p>{caseStudy.roleLead}</p>
            <ul className="list-block">
              {caseStudy.ownership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
          </div>

          <motion.article className="story-panel story-panel--soft" variants={fadeUp}>
            <div style={sectionHeaderStyle}>
              <div>
                <h2>제약</h2>
                <p className="callout-label">{caseStudy.constraintsLead}</p>
              </div>
              <MotionButton type="button" style={disclosureButtonStyle} whileHover={ctaHover} whileTap={ctaTap} onClick={() => togglePanel("constraints")}>
                {openPanels.constraints ? "접기" : "펼쳐 보기"}
              </MotionButton>
            </div>
            {openPanels.constraints ? (
              <ul className="list-block" style={{ marginTop: "18px" }}>
                {caseStudy.constraints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p style={{ margin: "18px 0 0", color: "var(--text-muted)" }}>{caseStudy.constraints.slice(0, 2).join(" · ")}</p>
            )}
          </motion.article>

          <motion.article className="story-panel story-panel--open" variants={fadeUp}>
            <h2>핵심 판단</h2>
            <motion.div className="decision-sequence" variants={sectionStaggerTight}>
              {caseStudy.decisions.map((decision, index) => (
                <motion.article className="decision-step" key={decision.title} variants={fadeRight} whileHover={decisionHover}>
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
            <div style={sectionHeaderStyle}>
              <div>
                <h2>증거</h2>
                <p className="callout-label">{caseStudy.evidenceLead}</p>
              </div>
              <MotionButton type="button" style={disclosureButtonStyle} whileHover={ctaHover} whileTap={ctaTap} onClick={() => togglePanel("evidence")}>
                {openPanels.evidence ? "접기" : "펼쳐 보기"}
              </MotionButton>
            </div>
            {openPanels.evidence ? (
              <>
                <div className="evidence-media-grid" style={{ marginTop: "18px" }}>
                  <motion.figure
                    className="evidence-media evidence-media--lead"
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    variants={evidenceMedia}
                  >
                    <motion.img src={caseStudy.previewImage} alt={`${caseStudy.shortTitle} evidence`} variants={evidenceImage} />
                    <motion.figcaption>
                      <strong>{activeEvidence?.title ?? "대표 화면"}</strong>
                      <span>{activeEvidence?.caption ?? "대표 화면 보기"}</span>
                    </motion.figcaption>
                  </motion.figure>
                  {caseStudy.galleryImages.slice(0, 2).map((image) => (
                    <motion.figure
                      className="evidence-media"
                      key={image}
                      initial="rest"
                      animate="rest"
                      whileHover="hover"
                      variants={evidenceMedia}
                    >
                      <motion.img src={image} alt={`${caseStudy.shortTitle} gallery`} variants={evidenceImage} />
                      <motion.figcaption>
                        <strong>추가 증거</strong>
                        <span>세부 화면 보기</span>
                      </motion.figcaption>
                    </motion.figure>
                  ))}
                </div>
                <motion.div className="evidence-block-grid" variants={sectionStaggerTight} style={{ marginTop: "18px" }}>
                  {caseStudy.evidenceBlocks.map((block, index) => (
                    <MotionButton
                      type="button"
                      className={`evidence-card${index === 0 ? " evidence-card--lead" : ""}${activeEvidenceTitle === block.title ? " is-active" : ""}`}
                      key={block.title}
                      variants={fadeRight}
                      onMouseEnter={() => setActiveEvidenceTitle(block.title)}
                      onFocus={() => setActiveEvidenceTitle(block.title)}
                      onClick={() => setActiveEvidenceTitle(block.title)}
                    >
                      <p className="callout-label">{block.title}</p>
                      <p className="evidence-card__caption">{block.caption}</p>
                      {activeEvidenceTitle === block.title ? (
                        <ul className="mono-list">
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="evidence-card__hint">{block.items[0]}</p>
                      )}
                    </MotionButton>
                  ))}
                </motion.div>
              </>
            ) : (
              <div style={{ display: "grid", gap: "10px", marginTop: "18px" }}>
                <p style={{ margin: 0, color: "var(--text)" }}>
                  <strong>{activeEvidence?.title ?? "대표 증거"}</strong>
                </p>
                <p style={{ margin: 0, color: "var(--text-muted)" }}>{activeEvidence?.caption}</p>
                <p style={{ margin: 0, color: "var(--text-muted)" }}>
                  화면 {caseStudy.galleryImages.length + 1}개 · 구조 근거 {caseStudy.evidenceBlocks.length}개
                </p>
              </div>
            )}
          </motion.article>

        </motion.div>

        <motion.aside className="case-sidebar" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionStagger}>
          <motion.article className="side-panel" variants={fadeUp}>
            <p className="callout-label">핵심 정보</p>
            <ul className="list-block">
              <li>{caseStudy.heroMetric}</li>
              <li>{caseStudy.domain}</li>
              <li>{caseStudy.contribution}</li>
              <li>{caseStudy.publicScope}</li>
            </ul>
          </motion.article>

          <motion.article className="side-panel" variants={fadeUp}>
            <div style={sectionHeaderStyle}>
              <p className="callout-label">Stack</p>
              <MotionButton type="button" style={disclosureButtonStyle} whileHover={ctaHover} whileTap={ctaTap} onClick={() => togglePanel("stack")}>
                {openPanels.stack ? "접기" : "펼쳐 보기"}
              </MotionButton>
            </div>
            {openPanels.stack ? (
              <div className="stack-row">
                {caseStudy.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : (
              <p style={{ margin: 0, color: "var(--text-muted)" }}>{caseStudy.stack.slice(0, 3).join(" · ")}</p>
            )}
          </motion.article>

          <motion.article className="side-panel" variants={fadeUp}>
            <p className="callout-label">다음 이동</p>
            <div className="button-row">
              <MotionLink
                className="secondary-button"
                to={{ pathname: "/", hash: "#cases" }}
                whileHover={ctaHover}
                whileTap={ctaTap}
              >
                주요 사례
              </MotionLink>
              <MotionLink
                className="secondary-button"
                to={`/case/${nextCase.slug}`}
                whileHover={ctaHover}
                whileTap={ctaTap}
              >
                다음 케이스
              </MotionLink>
            </div>
          </motion.article>
        </motion.aside>
      </section>

      <motion.section className="case-next-rail" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionStagger}>
        <motion.article className={`next-proof next-proof--${nextCase.theme}`} variants={fadeUp} whileHover={hoverLift}>
          <p className="callout-label">NEXT CASE</p>
          <h2>{nextCase.shortTitle}</h2>
          <p>{nextCase.teaser}</p>
          <MotionLink className="text-link" to={`/case/${nextCase.slug}`} whileHover={ctaHover} whileTap={ctaTap}>
            다음 케이스 보기
          </MotionLink>
        </motion.article>

        <motion.article className="next-proof next-proof--now" variants={fadeUp} whileHover={hoverLift}>
          <p className="callout-label">NOW</p>
          <h2>애드포터</h2>
          <p>{nowBuilding.highlight}</p>
          {nowBuilding.liveUrl ? (
            <motion.a className="text-link" href={nowBuilding.liveUrl} target="_blank" rel="noreferrer" whileHover={ctaHover} whileTap={ctaTap}>
              Live Demo
            </motion.a>
          ) : null}
        </motion.article>

        <motion.article className="next-proof next-proof--contact" variants={fadeUp} whileHover={hoverLift}>
          <p className="callout-label">NEXT CONVERSATION</p>
          <h2>주요 사례와 현재 역할부터 바로 확인할 수 있습니다.</h2>
          <div className="button-row">
            <motion.a className="primary-button" href={`mailto:${siteMeta.email}`} whileHover={ctaHover} whileTap={ctaTap}>
              {siteMeta.email}
            </motion.a>
            <motion.a className="secondary-button" href={siteMeta.resumeUrl} target="_blank" rel="noreferrer" whileHover={ctaHover} whileTap={ctaTap}>
              이력서
            </motion.a>
          </div>
        </motion.article>
      </motion.section>
    </main>
  );
}
