import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nowBuilding } from "../../content/caseStudies";
import { siteMeta } from "../../content/siteMeta";
import { ctaHover, ctaTap, fadeIn, fadeRight, fadeUp, hoverLiftSoft, sectionStagger, sectionStaggerTight } from "../../lib/motion";

const heroMetrics = [
  { label: "운영 UI 실무", value: "9년+" },
  { label: "재사용 기준", value: "70%+" },
  { label: "현재 역할", value: "애드포터 PL" },
];

const stageBadges = [
  { label: "Admin", className: "hero-scene__badge--admin", delay: 0.1 },
  { label: "Web", className: "hero-scene__badge--web", delay: 0.4 },
  { label: "App", className: "hero-scene__badge--app", delay: 0.7 },
];

const stagePanels = [
  {
    kicker: "RULE",
    title: "Shared Grid",
    body: "같은 리듬으로 정렬된 화면 뼈대",
    className: "hero-scene__panel--grid",
    delay: 0.15,
  },
  {
    kicker: "MODULE",
    title: "Card Pattern",
    body: "상태, 가격, 메타를 같은 규칙으로 배치",
    className: "hero-scene__panel--card",
    delay: 0.3,
  },
  {
    kicker: "TOKEN",
    title: "MUI Variant",
    body: "컴포넌트와 네이밍 기준 정렬",
    className: "hero-scene__panel--token",
    delay: 0.45,
  },
  {
    kicker: "FLOW",
    title: "Handoff",
    body: "기획·디자인·개발이 같은 언어로 이동",
    className: "hero-scene__panel--flow",
    delay: 0.6,
  },
];

const proofTrail = [
  "2026.03 MVP Demo 완료",
  "Samsung 재사용률 70%+",
  "LUSH 앱 1위 3일",
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [showIntro, setShowIntro] = useState(!shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 1450);

    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <section id="home" className="section hero hero--scene">
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            className="hero-intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] } }}
          >
            <motion.div className="hero-intro__beam" initial={{ scaleX: 0.4, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
              <span>YK</span>
              <strong>UI STAGE / SYSTEM INTRO</strong>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div className="hero-scene" initial="hidden" animate="visible" variants={sectionStagger}>
        <motion.div className="hero-scene__copy" variants={sectionStagger}>
          <motion.p className="section-eyebrow" variants={fadeUp}>
            {siteMeta.name} · UI SYSTEMS · PL-MINDED FRONT-END
          </motion.p>
          <motion.h1 variants={fadeUp}>
            흩어진 운영 화면을
            <br />
            팀이 반복해서 쓰는
            <br />
            시스템으로 바꿉니다.
          </motion.h1>
          <motion.p className="hero__summary hero-scene__summary" variants={fadeUp}>
            애드포터에서 Admin·Web·App 공통 구조와 운영 기준을 설계하고 있습니다.
          </motion.p>

          <motion.div className="hero-scene__metrics" variants={sectionStaggerTight}>
            {heroMetrics.map((item) => (
              <motion.div className="hero-scene__metric" key={item.label} variants={fadeUp} whileHover={hoverLiftSoft}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="button-row hero-scene__actions" variants={fadeUp}>
            <motion.div whileHover={ctaHover} whileTap={ctaTap}>
              <Link className="primary-button" to={{ pathname: "/", hash: "#cases" }}>
                대표 사례 보기
              </Link>
            </motion.div>
            <motion.div whileHover={ctaHover} whileTap={ctaTap}>
              <Link className="secondary-button" to={{ pathname: "/", hash: "#now" }}>
                현재 역할 보기
              </Link>
            </motion.div>
            <motion.div className="hero__inline-link" variants={fadeUp}>
              <motion.a href={siteMeta.resumeUrl} target="_blank" rel="noreferrer" whileHover={ctaHover} whileTap={ctaTap}>
                이력서
              </motion.a>
              <span>·</span>
              <motion.a href={siteMeta.githubUrl} target="_blank" rel="noreferrer" whileHover={ctaHover} whileTap={ctaTap}>
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="hero-scene__visual" variants={fadeRight}>
          <motion.a
            className="hero-scene__demo"
            href={nowBuilding.liveUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={hoverLiftSoft}
            whileTap={ctaTap}
          >
            <div className="hero-scene__board">
              <div className="hero-scene__grid" />
              <div className="hero-scene__glow hero-scene__glow--left" />
              <div className="hero-scene__glow hero-scene__glow--right" />
              <div className="hero-scene__orbit hero-scene__orbit--outer" />
              <div className="hero-scene__orbit hero-scene__orbit--inner" />
              <div className="hero-scene__scan" />

              <motion.div className="hero-scene__hub" variants={fadeIn}>
                <span className="hero-scene__hub-kicker">CURRENT ROLE</span>
                <strong>애드포터</strong>
                <p>Admin · Web · App 공통 기준 정렬</p>
              </motion.div>

              {stageBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  className={`hero-scene__badge ${badge.className}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.54, delay: badge.delay, ease: [0.22, 1, 0.36, 1] }}
                >
                  {badge.label}
                </motion.div>
              ))}

              {stagePanels.map((panel) => (
                <motion.article
                  key={panel.title}
                  className={`hero-scene__panel ${panel.className}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.58, delay: panel.delay, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span>{panel.kicker}</span>
                  <strong>{panel.title}</strong>
                  <p>{panel.body}</p>
                </motion.article>
              ))}

              {Array.from({ length: 10 }).map((_, index) => (
                <span
                  key={`spark-${index}`}
                  className={`hero-scene__spark hero-scene__spark--${(index % 4) + 1}`}
                  style={{
                    top: `${10 + (index % 5) * 18}%`,
                    left: `${8 + (index % 4) * 21}%`,
                    animationDelay: `${index * 0.18}s`,
                  }}
                />
              ))}

              <motion.div className="hero-scene__proofs" variants={sectionStaggerTight}>
                {proofTrail.map((item) => (
                  <motion.span key={item} variants={fadeUp}>
                    {item}
                  </motion.span>
                ))}
              </motion.div>

              <div className="hero-scene__demo-copy">
                <strong>운영 UI 구조를 압축한 현재 장면</strong>
                <span>Live Demo 열기</span>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
