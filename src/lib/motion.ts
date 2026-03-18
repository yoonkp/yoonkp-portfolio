import type { Variants } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const sectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const sectionStaggerTight: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.48,
      ease: easeOut,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
};

export const hoverLift = {
  y: -6,
  scale: 1.01,
  transition: {
    duration: 0.2,
    ease: easeOut,
  },
};

export const hoverLiftSoft = {
  y: -2,
  scale: 1.02,
  transition: {
    duration: 0.18,
    ease: easeOut,
  },
};

export const tapScale = {
  scale: 0.985,
};

export const mediaHover = {
  y: -8,
  scale: 1.025,
  transition: {
    duration: 0.24,
    ease: easeOut,
  },
};

export const decisionHover = {
  x: 6,
  transition: {
    duration: 0.18,
    ease: easeOut,
  },
};

export const kpiHover = {
  y: -4,
  scale: 1.015,
  transition: {
    duration: 0.18,
    ease: easeOut,
  },
};

export const ctaHover = {
  y: -2,
  scale: 1.015,
  transition: {
    duration: 0.18,
    ease: easeOut,
  },
};

export const ctaTap = {
  scale: 0.985,
  transition: {
    duration: 0.08,
    ease: easeOut,
  },
};

export const caseCardHover: Variants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.22,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

export const caseMediaImage: Variants = {
  rest: {
    scale: 1,
    filter: "saturate(0.95)",
  },
  hover: {
    scale: 1.04,
    filter: "saturate(1.08)",
    transition: {
      duration: 0.48,
      ease: easeOut,
    },
  },
};

export const caseMediaOverlay: Variants = {
  rest: {
    y: 18,
    opacity: 0.88,
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.32,
      ease: easeOut,
    },
  },
};

export const caseHeroCaption: Variants = {
  rest: {
    opacity: 0.9,
  },
  hover: {
    opacity: 1,
  },
};

export const proofCountPulse: Variants = {
  rest: {
    scale: 1,
  },
  done: {
    scale: [0.985, 1.03, 1],
    transition: {
      duration: 0.62,
      times: [0, 0.55, 1],
      ease: easeOut,
    },
  },
};

export const evidenceMedia: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.012,
    transition: {
      duration: 0.28,
      ease: easeOut,
    },
  },
};

export const evidenceImage: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.08,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};
