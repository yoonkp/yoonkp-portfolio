import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { proofMetrics } from "../../content/proofMetrics";
import { fadeUp, kpiHover, proofCountPulse, sectionStagger, tapScale } from "../../lib/motion";
import type { ProofMetric } from "../../types/portfolio";

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);
const compactProofMetrics = [proofMetrics[0], proofMetrics[1], proofMetrics[3]];
const compactSupport: Record<string, string> = {
  "운영 UI 실무": "Admin · Web · Mobile 경험",
  "재사용 기준 수립": "Samsung E&A MAP 표준화",
  "전환 성과 경험": "LUSH 앱 1위 기록",
};

function MetricValue({ metric }: { metric: ProofMetric }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const target = metric.countTo;

    if (!target || !inView) {
      setCount(0);
      setIsFinished(false);
      return;
    }

    if (shouldReduceMotion) {
      setCount(target);
      setIsFinished(false);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
        setIsFinished(true);
      }
    };

    setIsFinished(false);
    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [inView, metric.countTo, shouldReduceMotion]);

  if (!metric.countTo) {
    return (
      <motion.strong ref={ref} className="proof-rail__value" initial="rest" variants={proofCountPulse} animate="rest">
        {metric.value}
      </motion.strong>
    );
  }

  return (
    <motion.strong ref={ref} className="proof-rail__value" initial="rest" animate={isFinished ? "done" : "rest"} variants={proofCountPulse}>
      {`${metric.prefix ?? ""}${count}${metric.suffix ?? ""}`}
    </motion.strong>
  );
}

export function ProofBar({ compact = false }: { compact?: boolean }) {
  const metrics = compact ? compactProofMetrics : proofMetrics;
  const rail = (
    <motion.div
      className="proof-rail"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionStagger}
      style={compact ? { gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" } : undefined}
    >
      {metrics.map((metric) => (
        <motion.article
          className="proof-rail__item"
          key={metric.label}
          variants={fadeUp}
          whileHover={kpiHover}
          whileTap={tapScale}
          style={compact ? { minHeight: "112px" } : undefined}
        >
          {metric.href ? (
            metric.href.startsWith("#") ? (
              <Link className="proof-rail__link" to={{ pathname: "/", hash: metric.href }} style={compact ? { padding: "16px 18px" } : undefined}>
                <p>{metric.label}</p>
                <MetricValue metric={metric} />
                <span>{compact ? compactSupport[metric.label] ?? metric.support : metric.support}</span>
              </Link>
            ) : (
              <Link className="proof-rail__link" to={metric.href} style={compact ? { padding: "16px 18px" } : undefined}>
                <p>{metric.label}</p>
                <MetricValue metric={metric} />
                <span>{compact ? compactSupport[metric.label] ?? metric.support : metric.support}</span>
              </Link>
            )
          ) : (
            <div className="proof-rail__link" style={compact ? { padding: "16px 18px" } : undefined}>
              <p>{metric.label}</p>
              <MetricValue metric={metric} />
              <span>{compact ? compactSupport[metric.label] ?? metric.support : metric.support}</span>
            </div>
          )}
        </motion.article>
      ))}
    </motion.div>
  );

  if (compact) {
    return (
      <section className="section section--dense" style={{ marginTop: "16px" }}>
        {rail}
      </section>
    );
  }

  return (
    <section className="section section--dense">
      {rail}
    </section>
  );
}
