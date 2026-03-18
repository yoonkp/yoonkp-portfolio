import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { proofMetrics } from "../../content/proofMetrics";
import { fadeUp, hoverLift, sectionStagger } from "../../lib/motion";
import type { ProofMetric } from "../../types/portfolio";

function MetricValue({ metric }: { metric: ProofMetric }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = metric.countTo;

    if (!target || !inView) {
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 900;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(target * progress));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [inView, metric.countTo]);

  if (!metric.countTo) {
    return (
      <strong ref={ref} className="proof-rail__value">
        {metric.value}
      </strong>
    );
  }

  return (
    <strong ref={ref} className="proof-rail__value">
      {`${metric.prefix ?? ""}${count}${metric.suffix ?? ""}`}
    </strong>
  );
}

export function ProofBar() {
  return (
    <section className="section section--dense">
      <motion.div className="proof-rail" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={sectionStagger}>
        {proofMetrics.map((metric) => (
          <motion.article className="proof-rail__item" key={metric.label} variants={fadeUp} whileHover={hoverLift}>
            <p>{metric.label}</p>
            <MetricValue metric={metric} />
            <span>{metric.support}</span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
