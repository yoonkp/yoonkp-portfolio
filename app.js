/* ============================================
   Custom cursor, magnetic buttons, reveal, hero canvas, tweaks
   ============================================ */

(function () {
  /* ---------- custom cursor ---------- */
  const dot = document.createElement("div");
  const ring = document.createElement("div");
  dot.className = "cursor-dot";
  ring.className = "cursor-ring";
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  window.addEventListener("mouseleave", () => {
    dot.classList.add("hidden"); ring.classList.add("hidden");
  });
  window.addEventListener("mouseenter", () => {
    dot.classList.remove("hidden"); ring.classList.remove("hidden");
  });

  const tickRing = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(tickRing);
  };
  requestAnimationFrame(tickRing);

  document.querySelectorAll("a, button, .project, .swatch, input, .skill, .contact-card").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
  });

  /* ---------- magnetic buttons ---------- */
  document.querySelectorAll(".magnet").forEach((el) => {
    const strength = parseFloat(el.dataset.magnet || "0.35");
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- number counter ---------- */
  const numIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const el = en.target;
          const target = parseFloat(el.dataset.target || "0");
          const decimals = parseInt(el.dataset.decimals || "0", 10);
          const dur = 1400;
          const t0 = performance.now();
          const step = (now) => {
            const t = Math.min(1, (now - t0) / dur);
            const e = 1 - Math.pow(1 - t, 3);
            const v = target * e;
            el.textContent = v.toFixed(decimals);
            if (t < 1) requestAnimationFrame(step);
            else el.textContent = target.toFixed(decimals);
          };
          requestAnimationFrame(step);
          numIO.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll("[data-target]").forEach((el) => numIO.observe(el));

  /* ---------- card glow (mouse coords) ---------- */
  document.querySelectorAll(".card-glow").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });

  /* ---------- project preview ---------- */
  const preview = document.getElementById("project-preview");
  document.querySelectorAll(".project").forEach((p) => {
    p.addEventListener("mouseenter", () => {
      if (!preview) return;
      const color = p.dataset.color || "#2a5e46";
      const label = p.dataset.label || "";
      preview.querySelector(".project-preview-inner").innerHTML =
        `<div style="position:absolute;inset:0;background:linear-gradient(135deg, ${color}, ${color}99 50%, #0a0c0b);"></div>
         <div style="position:relative;font-family:var(--display);color:#fff;font-size:22px;letter-spacing:-0.01em;text-shadow:0 4px 20px rgba(0,0,0,.6);">${label}</div>`;
      preview.classList.add("show");
    });
    p.addEventListener("mousemove", (e) => {
      if (!preview) return;
      preview.style.left = e.clientX + "px";
      preview.style.top = e.clientY - 30 + "px";
    });
    p.addEventListener("mouseleave", () => {
      if (!preview) return;
      preview.classList.remove("show");
    });
  });

  /* ---------- hero interactive grid canvas ---------- */
  const canvas = document.getElementById("hero-canvas");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let w, h, dpr;
    let pointer = { x: -9999, y: -9999, active: false };
    const nodes = [];
    const COLS = 14;
    const ROWS = 14;

    function setup() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes.length = 0;
      const padX = w / (COLS + 1);
      const padY = h / (ROWS + 1);
      for (let i = 1; i <= COLS; i++) {
        for (let j = 1; j <= ROWS; j++) {
          nodes.push({
            x: i * padX,
            y: j * padY,
            ox: i * padX,
            oy: j * padY,
            vx: 0, vy: 0,
          });
        }
      }
    }

    function getAccent() {
      const s = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
      return s || "oklch(0.86 0.18 145)";
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      const accent = getAccent();

      // connections (subtle)
      nodes.forEach((n) => {
        const dx = pointer.x - n.x;
        const dy = pointer.y - n.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const pushR = 140;
        if (pointer.active && d < pushR) {
          const f = (1 - d / pushR) * 2.8;
          const ang = Math.atan2(dy, dx);
          n.vx -= Math.cos(ang) * f;
          n.vy -= Math.sin(ang) * f;
        }
        // spring back
        n.vx += (n.ox - n.x) * 0.06;
        n.vy += (n.oy - n.y) * 0.06;
        n.vx *= 0.82;
        n.vy *= 0.82;
        n.x += n.vx;
        n.y += n.vy;
      });

      // draw dots
      nodes.forEach((n) => {
        const dx = pointer.x - n.x;
        const dy = pointer.y - n.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const prox = pointer.active ? Math.max(0, 1 - d / 200) : 0;
        const size = 1 + prox * 3.2;
        ctx.beginPath();
        ctx.fillStyle = prox > 0.05 ? accent : "rgba(180,200,190,0.28)";
        ctx.globalAlpha = 0.35 + prox * 0.65;
        ctx.arc(n.x, n.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // lines to pointer
      if (pointer.active) {
        nodes.forEach((n) => {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.globalAlpha = (1 - d / 120) * 0.5;
            ctx.strokeStyle = accent;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        });
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(tick);
    }

    canvas.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = true;
    });
    canvas.addEventListener("mouseleave", () => { pointer.active = false; pointer.x = -9999; pointer.y = -9999; });
    window.addEventListener("resize", setup);
    setup();
    tick();
  }

  /* ---------- tweaks panel ---------- */
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "green",
    "theme": "dark",
    "heroLayout": "grid"
  }/*EDITMODE-END*/;

  const state = Object.assign({}, TWEAK_DEFAULTS, JSON.parse(localStorage.getItem("pf-tweaks") || "{}"));

  const ACCENTS = {
    green:  { a: "oklch(0.86 0.18 145)", a2: "oklch(0.72 0.14 155)", glow: "oklch(0.86 0.18 145 / 0.35)", grid: "rgba(120, 240, 180, 0.06)" },
    blue:   { a: "oklch(0.78 0.16 240)", a2: "oklch(0.68 0.14 240)", glow: "oklch(0.78 0.16 240 / 0.35)", grid: "rgba(140, 180, 240, 0.07)" },
    violet: { a: "oklch(0.78 0.18 300)", a2: "oklch(0.68 0.16 300)", glow: "oklch(0.78 0.18 300 / 0.35)", grid: "rgba(190, 160, 240, 0.07)" },
    orange: { a: "oklch(0.80 0.18 55)",  a2: "oklch(0.70 0.16 55)",  glow: "oklch(0.80 0.18 55 / 0.35)",  grid: "rgba(240, 180, 140, 0.07)" },
  };

  function applyTweaks() {
    const root = document.documentElement;
    root.setAttribute("data-theme", state.theme);
    const c = ACCENTS[state.accent] || ACCENTS.green;
    root.style.setProperty("--accent", c.a);
    root.style.setProperty("--accent-2", c.a2);
    root.style.setProperty("--accent-glow", c.glow);
    root.style.setProperty("--grid", c.grid);
    root.setAttribute("data-hero", state.heroLayout);

    // refresh selected states in panel
    document.querySelectorAll(".swatch").forEach((s) => {
      s.classList.toggle("active", s.dataset.accent === state.accent);
    });
    document.querySelectorAll("[data-theme-opt]").forEach((b) => {
      b.classList.toggle("active", b.dataset.themeOpt === state.theme);
    });
    document.querySelectorAll("[data-hero-opt]").forEach((b) => {
      b.classList.toggle("active", b.dataset.heroOpt === state.heroLayout);
    });
  }

  function persist(patch) {
    Object.assign(state, patch);
    localStorage.setItem("pf-tweaks", JSON.stringify(state));
    applyTweaks();
    // notify host for EDITMODE persistence
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch (e) {}
  }

  // bind handlers
  document.querySelectorAll(".swatch").forEach((s) => {
    s.addEventListener("click", () => persist({ accent: s.dataset.accent }));
  });
  document.querySelectorAll("[data-theme-opt]").forEach((b) => {
    b.addEventListener("click", () => persist({ theme: b.dataset.themeOpt }));
  });
  document.querySelectorAll("[data-hero-opt]").forEach((b) => {
    b.addEventListener("click", () => persist({ heroLayout: b.dataset.heroOpt }));
  });
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () =>
      persist({ theme: state.theme === "dark" ? "light" : "dark" })
    );
  }

  applyTweaks();

  /* ---------- tweaks host protocol ---------- */
  const panel = document.getElementById("tweaks-panel");
  window.addEventListener("message", (e) => {
    const t = e.data && e.data.type;
    if (t === "__activate_edit_mode") panel && panel.classList.add("open");
    if (t === "__deactivate_edit_mode") panel && panel.classList.remove("open");
  });
  try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}

  /* ---------- smooth anchor scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView ? window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }) : null;
    });
  });
})();
