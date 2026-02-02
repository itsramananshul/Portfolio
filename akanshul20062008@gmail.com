<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Anshul Raman | Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Portfolio of Anshul Raman, Computer Science student focused on cybersecurity-inspired projects, penetration testing labs, and AI-driven hardware." />
  <style>
    :root {
      --bg: #050816;
      --bg-alt: #0b1020;
      --accent: #3b82f6;
      --accent-soft: rgba(59, 130, 246, 0.12);
      --text: #e5e7eb;
      --muted: #9ca3af;
      --card: #0f172a;
      --border: #1e293b;
      --shadow: 0 18px 45px rgba(15, 23, 42, 0.9);
      --radius-lg: 18px;
      --radius-pill: 999px;
      --font-main: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
        "Segoe UI", sans-serif;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-main);
      background: radial-gradient(circle at top, #111827 0, #020617 40%, #000 100%);
      color: var(--text);
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      max-width: 100%;
      display: block;
    }

    .page {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .nav-wrap {
      position: sticky;
      top: 0;
      z-index: 20;
      backdrop-filter: blur(18px);
      background: linear-gradient(to bottom, rgba(2, 6, 23, 0.92), transparent);
      border-bottom: 1px solid rgba(15, 23, 42, 0.8);
    }

    .nav {
      max-width: 1080px;
      margin: 0 auto;
      padding: 0.9rem 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .nav-left {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .logo-orb {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: conic-gradient(from 180deg, #3b82f6, #22c55e, #a855f7, #3b82f6);
      position: relative;
      box-shadow: 0 0 36px rgba(59, 130, 246, 0.8);
    }

    .logo-orb::after {
      content: "";
      position: absolute;
      inset: 4px;
      border-radius: inherit;
      background: radial-gradient(circle at 30% 20%, #eff6ff, #0b1120);
    }

    .nav-title {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }

    .nav-title-main {
      font-size: 0.98rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #f9fafb;
    }

    .nav-title-sub {
      font-size: 0.76rem;
      color: var(--muted);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      font-size: 0.88rem;
      color: var(--muted);
    }

    .nav-links a {
      position: relative;
      padding-bottom: 0.15rem;
      transition: color 0.18s ease;
    }

    .nav-links a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      border-radius: 999px;
      background: linear-gradient(90deg, #3b82f6, #a855f7);
      transition: width 0.2s ease;
    }

    .nav-links a:hover {
      color: #e5e7eb;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.48rem 0.95rem;
      border-radius: var(--radius-pill);
      background: radial-gradient(circle at 0 0, rgba(59, 130, 246, 0.36), transparent),
        rgba(15, 23, 42, 0.96);
      border: 1px solid rgba(59, 130, 246, 0.7);
      font-size: 0.78rem;
      color: #e5edff;
      box-shadow: 0 0 20px rgba(37, 99, 235, 0.6);
    }

    .nav-cta span {
      font-size: 0.74rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #bfdbfe;
    }

    .nav-cta-dot {
      width: 5px;
      height: 5px;
      border-radius: 999px;
      background: #22c55e;
      box-shadow: 0 0 18px rgba(34, 197, 94, 0.9);
    }

    main {
      flex: 1;
      padding: 1.8rem 1.25rem 3rem;
    }

    .shell {
      max-width: 1080px;
      margin: 0 auto;
    }

    #home {
      display: grid;
      grid-template-columns: minmax(0, 3fr) minmax(0, 2.7fr);
      gap: 2.8rem;
      align-items: center;
      padding: 2.2rem 0 3.2rem;
    }

    .hero-kicker {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #a5b4fc;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .hero-kicker-pill {
      padding: 0.2rem 0.7rem;
      border-radius: 999px;
      border: 1px solid rgba(129, 140, 248, 0.7);
      background: linear-gradient(90deg, rgba(15, 23, 42, 0.9), rgba(30, 64, 175, 0.5));
      font-size: 0.7rem;
    }

    .hero-title {
      font-size: clamp(2.2rem, 4vw, 2.8rem);
      line-height: 1.08;
      letter-spacing: 0.04em;
      margin-bottom: 1.1rem;
    }

    .hero-title span {
      display: inline-block;
      background: linear-gradient(120deg, #60a5fa, #c4b5fd, #f97316);
      -webkit-background-clip: text;
      color: transparent;
    }

    .hero-sub {
      font-size: 0.98rem;
      color: var(--muted);
      max-width: 32rem;
      margin-bottom: 1.4rem;
    }

    .hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem 1.8rem;
      margin-bottom: 1.6rem;
      font-size: 0.83rem;
      color: #9ca3af;
    }

    .hero-meta-item {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }

    .hero-meta-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: #6b7280;
    }

    .hero-meta-value {
      color: #e5e7eb;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 1.2rem;
    }

    .btn-main {
      padding: 0.7rem 1.3rem;
      border-radius: var(--radius-pill);
      border: none;
      cursor: pointer;
      background: radial-gradient(circle at 0 0, #60a5fa, #1d4ed8);
      color: white;
      font-size: 0.86rem;
      font-weight: 500;
      box-shadow: 0 18px 40px rgba(37, 99, 235, 0.7);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    .btn-ghost {
      padding: 0.7rem 1.15rem;
      border-radius: var(--radius-pill);
      border: 1px solid rgba(148, 163, 184, 0.7);
      background: rgba(15, 23, 42, 0.9);
      color: #e5e7eb;
      font-size: 0.84rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    .btn-main:hover,
    .btn-ghost:hover {
      transform: translateY(-1px);
      filter: brightness(1.05);
    }

    .hero-links {
      display: flex;
      gap: 0.75rem;
      font-size: 0.82rem;
      color: #9ca3af;
      align-items: center;
    }

    .hero-links a {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.22rem 0.65rem;
      border-radius: 999px;
      border: 1px solid rgba(55, 65, 81, 0.9);
      background: rgba(15, 23, 42, 0.85);
    }

    .hero-links-dot {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: #22c55e;
      box-shadow: 0 0 16px rgba(34, 197, 94, 0.9);
    }

    .hero-avatar-wrap {
      position: relative;
      display: flex;
      justify-content: center;
    }

    .hero-card {
      width: 100%;
      max-width: 360px;
      border-radius: 1.5rem;
      padding: 1.4rem 1.5rem 1.5rem;
      background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.2), transparent),
        radial-gradient(circle at 100% 100%, rgba(129, 140, 248, 0.18), transparent),
        #020617;
      box-shadow: var(--shadow);
      border: 1px solid rgba(37, 99, 235, 0.6);
      position: relative;
      overflow: hidden;
    }

    .hero-card-tag {
      position: absolute;
      top: 1rem;
      right: 1.1rem;
      padding: 0.14rem 0.6rem;
      border-radius: 999px;
      font-size: 0.63rem;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid rgba(148, 163, 184, 0.8);
      color: #9ca3af;
    }

    .hero-card-orb {
      position: absolute;
      inset: 40% auto auto -40%;
      width: 180px;
      height: 180px;
      background: radial-gradient(circle at 30% 20%, rgba(248, 250, 252, 0.8), transparent),
        radial-gradient(circle at 80% 90%, #4f46e5, transparent);
      opacity: 0.38;
      filter: blur(6px);
    }

    .hero-card-title {
      font-size: 1.08rem;
      margin-bottom: 0.4rem;
    }

    .hero-card-role {
      font-size: 0.85rem;
      color: #a5b4fc;
      margin-bottom: 0.7rem;
    }

    .hero-card-body {
      font-size: 0.82rem;
      color: #d1d5db;
      margin-bottom: 0.9rem;
    }

    .hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.32rem 0.7rem;
      font-size: 0.72rem;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(96, 165, 250, 0.7);
      color: #bfdbfe;
    }

    .hero-stats {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;
      margin-top: 1.1rem;
      font-size: 0.72rem;
      color: #9ca3af;
    }

    .hero-stat-label {
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-size: 0.68rem;
      margin-bottom: 0.1rem;
      color: #6b7280;
    }

    .hero-stat-value {
      color: #e5e7eb;
    }

    section {
      scroll-margin-top: 80px;
    }

    .section {
      padding: 2.5rem 0 0;
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 1rem;
      margin-bottom: 1.4rem;
    }

    .section-title {
      font-size: 1.15rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .section-sub {
      font-size: 0.88rem;
      color: var(--muted);
      max-width: 26rem;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.3rem;
    }

    .card {
      border-radius: var(--radius-lg);
      background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.16), transparent),
        radial-gradient(circle at 100% 100%, rgba(129, 140, 248, 0.16), transparent),
        var(--card);
      border: 1px solid var(--border);
      padding: 1.1rem 1.15rem 1.1rem;
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.85);
    }

    .card-kicker {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: #9ca3af;
      margin-bottom: 0.3rem;
    }

    .card-title {
      font-size: 0.98rem;
      margin-bottom: 0.25rem;
    }

    .card-tagline {
      font-size: 0.8rem;
      color: #a5b4fc;
      margin-bottom: 0.5rem;
    }

    .card-body {
      font-size: 0.82rem;
      color: #d1d5db;
      margin-bottom: 0.55rem;
    }

    .card-list {
      list-style: none;
      font-size: 0.8rem;
      color: #9ca3af;
      display: grid;
      gap: 0.25rem;
      margin-bottom: 0.6rem;
    }

    .card-list li::before {
      content: "▹";
      color: #60a5fa;
      margin-right: 0.35rem;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.76rem;
      color: #9ca3af;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.28rem 0.7rem;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.8);
      background: rgba(15, 23, 42, 0.9);
      font-size: 0.72rem;
      color: #e5e7eb;
    }

    .pill-dot {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: #f97316;
    }

    .skills-wrap {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.1rem;
    }

    .skills-group {
      border-radius: var(--radius-lg);
      padding: 1.05rem 1.15rem;
      background: radial-gradient(circle at 0 0, rgba(59, 130, 246, 0.18), transparent),
        var(--bg-alt);
      border: 1px solid var(--border);
      box-shadow: 0 16px 36px rgba(15, 23, 42, 0.9);
    }

    .skills-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: #9ca3af;
      margin-bottom: 0.55rem;
    }

    .skills-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      font-size: 0.78rem;
    }

    .chip {
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(55, 65, 81, 0.9);
      color: #e5e7eb;
    }

    .experience-grid {
      display: grid;
      grid-template-columns: minmax(0, 3fr) minmax(0, 2.3fr);
      gap: 1.3rem;
    }

    .xp-block {
      border-radius: var(--radius-lg);
      padding: 1.05rem 1.1rem 1.05rem;
      background: radial-gradient(circle at 0 0, rgba(45, 212, 191, 0.16), transparent),
        var(--bg-alt);
      border: 1px solid var(--border);
      box-shadow: 0 16px 36px rgba(15, 23, 42, 0.9);
      font-size: 0.82rem;
      color: #d1d5db;
    }

    .xp-header {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
    }

    .xp-title {
      font-weight: 500;
    }

    .xp-time {
      color: #9ca3af;
    }

    .xp-list {
      list-style: none;
      display: grid;
      gap: 0.18rem;
      margin-top: 0.3rem;
    }

    .xp-list li::before {
      content: "▹";
      color: #22c55e;
      margin-right: 0.35rem;
    }

    .edu-grid {
      display: grid;
      grid-template-columns: minmax(0, 3fr) minmax(0, 2.2fr);
      gap: 1.3rem;
    }

    .edu-card {
      border-radius: var(--radius-lg);
      padding: 1.05rem 1.1rem 1.1rem;
      background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.18), transparent),
        var(--bg-alt);
      border: 1px solid var(--border);
      box-shadow: 0 16px 36px rgba(15, 23, 42, 0.9);
      font-size: 0.82rem;
    }

    .edu-title {
      font-size: 0.98rem;
      margin-bottom: 0.2rem;
    }

    .edu-meta {
      font-size: 0.8rem;
      color: #9ca3af;
      margin-bottom: 0.6rem;
    }

    .edu-list {
      list-style: none;
      display: grid;
      gap: 0.18rem;
      color: #d1d5db;
    }

    .edu-list li::before {
      content: "▹";
      color: #60a5fa;
      margin-right: 0.35rem;
    }

    .awards-list {
      list-style: none;
      display: grid;
      gap: 0.2rem;
      font-size: 0.8rem;
      color: #d1d5db;
    }

    .awards-list li::before {
      content: "★";
      color: #fbbf24;
      margin-right: 0.35rem;
    }

    .contact-card {
      border-radius: var(--radius-lg);
      padding: 1.1rem 1.2rem 1.2rem;
      background: radial-gradient(circle at 0 0, rgba(59, 130, 246, 0.22), transparent),
        var(--bg-alt);
      border: 1px solid var(--border);
      box-shadow: 0 18px 42px rgba(15, 23, 42, 0.95);
      font-size: 0.83rem;
      display: grid;
      gap: 0.8rem;
    }

    .contact-rows {
      display: grid;
      gap: 0.45rem;
      font-size: 0.82rem;
    }

    .contact-row-label {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: #9ca3af;
    }

    .contact-row-value a {
      color: #bfdbfe;
    }

    .contact-row-value a:hover {
      text-decoration: underline;
    }

    .footer {
      max-width: 1080px;
      margin: 1.8rem auto 0;
      padding: 0 1.25rem 1.4rem;
      font-size: 0.76rem;
      color: #6b7280;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      border-top: 1px solid rgba(15, 23, 42, 0.9);
      padding-top: 1rem;
    }

    @media (max-width: 880px) {
      #home {
        grid-template-columns: minmax(0, 1fr);
      }

      .hero-card {
        max-width: 100%;
      }

      .experience-grid,
      .edu-grid {
        grid-template-columns: minmax(0, 1fr);
      }

      .nav {
        padding-inline: 1rem;
      }

      .nav-links {
        display: none;
      }
    }

    @media (max-width: 640px) {
      main {
        padding-inline: 1rem;
      }

      .section {
        padding-top: 2rem;
      }

      .section-head {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="nav-wrap">
      <div class="nav">
        <div class="nav-left">
          <div class="logo-orb"></div>
          <div class="nav-title">
            <div class="nav-title-main">Anshul Raman</div>
            <div class="nav-title-sub">Computer Science · UC</div>
          </div>
        </div>
        <nav class="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" class="nav-cta">
          <span>Available Fall 2026</span>
          <div class="nav-cta-dot"></div>
        </a>
      </div>
    </header>

    <main>
      <div class="shell">
        <!-- HERO -->
        <section id="home">
          <div>
            <div class="hero-kicker">
              <div class="hero-kicker-pill">Computer Science · University of Cincinnati</div>
            </div>
            <h1 class="hero-title">
              Hi, I’m <span>Anshul Raman</span> — a Computer Science student building secure systems and AI‑driven hardware.
            </h1>
            <p class="hero-sub">
              As a Computer Science undergraduate, I’m exploring multiple areas of CS, with a particular
              interest in cybersecurity and ethical hacking as tools to better understand system design,
              reliability, and security.
            </p>
            <div class="hero-meta">
              <div class="hero-meta-item">
                <div class="hero-meta-label">Location</div>
                <div class="hero-meta-value">Cincinnati, Ohio, USA</div>
              </div>
              <div class="hero-meta-item">
                <div class="hero-meta-label">Program</div>
                <div class="hero-meta-value">B.S. Computer Science · GPA 3.68</div>
              </div>
              <div class="hero-meta-item">
                <div class="hero-meta-label">Availability</div>
                <div class="hero-meta-value">Co‑op · Fall 2026</div>
              </div>
            </div>
            <div class="hero-actions">
              <a href="#projects" class="btn-main">
                View projects
              </a>
              <a href="#contact" class="btn-ghost">
                Let’s talk
              </a>
            </div>
            <div class="hero-links">
              <span>Find me on</span>
              <a href="https://www.linkedin.com/in/anshulraman06" target="_blank" rel="noopener">
                <span class="hero-links-dot"></span>
                LinkedIn
              </a>
              <a href="https://github.com/itsramananshul" target="_blank" rel="noopener">
                GitHub
              </a>
              <a href="https://anshulraman.com" target="_blank" rel="noopener">
                Personal site
              </a>
            </div>
          </div>

          <div class="hero-avatar-wrap">
            <article class="hero-card" aria-label="Snapshot of Anshul">
              <div class="hero-card-orb" aria-hidden="true"></div>
              <div class="hero-card-tag">CS Undergrad · UC</div>
              <h2 class="hero-card-title">Security‑minded builder</h2>
              <p class="hero-card-role">Pen‑testing labs · Wi‑Fi auditing · Phishing simulation</p>
              <p class="hero-card-body">
                I prototype offensive security scenarios in controlled labs to better understand
                how to defend real systems and the people who rely on them.
              </p>
              <div class="hero-pill">
                <span class="pill-dot"></span>
                Python · C++ · Wireshark · Metasploit · Kali · Parrot OS
              </div>
              <div class="hero-stats">
                <div>
                  <div class="hero-stat-label">Clubs & Sports</div>
                  <div class="hero-stat-value">Tech clubs · Tennis & more</div>
                </div>
                <div>
                  <div class="hero-stat-label">Scholarships</div>
                  <div class="hero-stat-value">International Global & Outreach</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <!-- PROJECTS -->
        <section id="projects" class="section">
          <div class="section-head">
            <h2 class="section-title">Projects</h2>
            <p class="section-sub">
              AI‑assisted hardware and cybersecurity‑inspired lab work, all built in controlled environments
              to explore attacker workflows and defense strategies.
            </p>
          </div>

          <div class="projects-grid">
            <!-- AI Medicine Dispenser -->
            <article class="card">
              <div class="card-kicker">ENED Project · Sept – Dec 2025</div>
              <h3 class="card-title">AI‑Integrated Medicine Dispensing Machine</h3>
              <p class="card-tagline">
                Assistive hardware for Alzheimer’s and dementia patients, designed to reduce missed doses
                and improve caregiver visibility.
              </p>
              <p class="card-body">
                Collaborated in a 4‑person engineering team to design a smart dispenser that verifies the
                right patient, delivers the right dose, and escalates when something goes wrong.
              </p>
              <ul class="card-list">
                <li>Implemented facial recognition with a camera to identify patients before dispensing medication.</li>
                <li>Designed automated alert protocols to notify caregivers and trigger emergency calls (911) in life‑threatening scenarios.</li>
                <li>Addressed medication adherence, caregiver burden, and patient safety using assistive technology.</li>
              </ul>
              <div class="card-footer">
                <div class="pill">
                  <span class="pill-dot"></span>
                  AI hardware · Assistive tech
                </div>
                <span>Team of 4 · University of Cincinnati</span>
              </div>
            </article>

            <!-- RAT Development -->
            <article class="card">
              <div class="card-kicker">Lab · June – July 2025</div>
              <h3 class="card-title">RAT Development & Penetration Testing</h3>
              <p class="card-tagline">
                Controlled Remote Access Trojan development to study full‑device compromise and defensive responses.
              </p>
              <p class="card-body">
                Built RATs in a controlled lab environment to simulate complete device takeover, including
                camera and microphone access, with a focus on ethics and mitigation.
              </p>
              <ul class="card-list">
                <li>Developed RATs to explore attacker capabilities for remote surveillance and control.</li>
                <li>Conducted vulnerability assessments to identify security weaknesses and recommend mitigation strategies.</li>
                <li>Documented ethical implications and defensive countermeasures for responsible security research.</li>
              </ul>
              <div class="card-footer">
                <div class="pill">
                  <span class="pill-dot"></span>
                  Offensive labs · Ethics‑first
                </div>
                <span>Controlled lab environment</span>
              </div>
            </article>

            <!-- Wi-Fi Pentest -->
            <article class="card">
              <div class="card-kicker">Lab · July – Aug 2025</div>
              <h3 class="card-title">Wi‑Fi Penetration Testing Device</h3>
              <p class="card-tagline">
                ESP8266‑based Wi‑Fi auditing to surface weak configurations and harden wireless networks.
              </p>
              <p class="card-body">
                Built a custom Wi‑Fi auditing device using ESP8266MOD to simulate common wireless attack
                flows and provide actionable recommendations for network security.
              </p>
              <ul class="card-list">
                <li>Used ESP8266MOD to execute de‑authentication attacks in a secure lab environment.</li>
                <li>Analyzed wireless vulnerabilities discovered during simulated real‑world attack scenarios.</li>
                <li>Recommended network hardening measures such as stronger authentication, segmentation, and monitoring.</li>
              </ul>
              <div class="card-footer">
                <div class="pill">
                  <span class="pill-dot"></span>
                  ESP8266 · Wireless security
                </div>
                <span>Network security lab</span>
              </div>
            </article>

            <!-- Phishing Simulation -->
            <article class="card">
              <div class="card-kicker">Lab · July – Aug 2025</div>
              <h3 class="card-title">Phishing Website Simulation</h3>
              <p class="card-tagline">
                End‑to‑end phishing workflows to understand user deception and how to train against it.
              </p>
              <p class="card-body">
                Recreated phishing campaigns in a secure local lab to see exactly how users get tricked into
                handing over credentials and how to disrupt those patterns.
              </p>
              <ul class="card-list">
                <li>Researched real‑world hacker tactics, including credential harvesting and fake login portals.</li>
                <li>Rebuilt phishing workflows to study password capture techniques and social engineering tactics.</li>
                <li>Proposed mitigation strategies such as MFA, user training, and email filtering policies.</li>
              </ul>
              <div class="card-footer">
                <div class="pill">
                  <span class="pill-dot"></span>
                  Social engineering · User defense
                </div>
                <span>Security awareness lab</span>
              </div>
            </article>
          </div>
        </section>

        <!-- EXPERIENCE & ACTIVITIES -->
        <section id="experience" class="section">
          <div class="section-head">
            <h2 class="section-title">Experience & Activities</h2>
            <p class="section-sub">
              From rehabilitation centers and school science clubs to tech organizations and sports,
              I care about both people and performance.
            </p>
          </div>

          <div class="experience-grid">
            <!-- Event Coordinator -->
            <div class="xp-block">
              <div class="xp-header">
                <div>
                  <div class="xp-title">Event Coordinator · Tapan Rehabilitation Center</div>
                  <div class="xp-time">April 2023 – March 2024 · Karnal, Haryana, India</div>
                </div>
              </div>
              <ul class="xp-list">
                <li>Supported children with special needs through individualized teaching strategies and developmental assistance, focusing on hearing and speech impairments.</li>
                <li>Coordinated an inclusion‑awareness event at Pratap Public School, engaging students, faculty, and community members around accessibility and sensitivity.</li>
              </ul>
            </div>

            <!-- Science Club Coordinator -->
            <div class="xp-block">
              <div class="xp-header">
                <div>
                  <div class="xp-title">Coordinator · Science Club</div>
                  <div class="xp-time">June 2023 – June 2024 · Sant Gyaneshwar Model School, Delhi, India</div>
                </div>
              </div>
              <ul class="xp-list">
                <li>Led and organized school‑wide science activities and events, promoting hands‑on learning and innovation.</li>
                <li>Represented the club in inter‑school science debates and competitions, building a culture of curiosity and academic excellence.</li>
              </ul>
            </div>
          </div>

          <div class="section" style="padding-top:1.8rem;">
            <div class="experience-grid">
              <!-- Clubs & Sports -->
              <div class="xp-block">
                <div class="xp-header">
                  <div>
                    <div class="xp-title">Clubs & Student Communities</div>
                    <div class="xp-time">Sept 2025 – Present · University of Cincinnati</div>
                  </div>
                </div>
                <ul class="xp-list">
                  <li>Tennis Club, Bearcat Tech Innovators, IEEE, AAEO, UC Robotics, AI Society.</li>
                </ul>
              </div>

              <div class="xp-block">
                <div class="xp-header">
                  <div>
                    <div class="xp-title">Sports & Competition</div>
                    <div class="xp-time">Ongoing</div>
                  </div>
                </div>
                <ul class="xp-list">
                  <li>Tennis, Badminton, Cricket, Soccer, Volleyball, Pickleball, Padel.</li>
                  <li>First Position – District U‑19 Tennis Championship 2022; ranked among the Top 150 AITA players in 2022.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- SKILLS -->
        <section id="skills" class="section">
          <div class="section-head">
            <h2 class="section-title">Skills</h2>
            <p class="section-sub">
              Security tooling, operating systems, and soft skills that help me contribute quickly to
              real projects and teams.
            </p>
          </div>

          <div class="skills-wrap">
            <div class="skills-group">
              <div class="skills-label">Programming & Security Tools</div>
              <div class="skills-chips">
                <span class="chip">Python</span>
                <span class="chip">C++</span>
                <span class="chip">LabVIEW</span>
                <span class="chip">Wireshark</span>
                <span class="chip">Metasploit</span>
                <span class="chip">Nmap</span>
                <span class="chip">Aircrack‑ng</span>
                <span class="chip">John the Ripper</span>
                <span class="chip">Social Engineering Toolkit (SET)</span>
                <span class="chip">Hashcat</span>
                <span class="chip">Hydra</span>
              </div>
            </div>

            <div class="skills-group">
              <div class="skills-label">Operating Systems</div>
              <div class="skills-chips">
                <span class="chip">Windows 11</span>
                <span class="chip">macOS 26 Tahoe</span>
                <span class="chip">Parrot OS 7.0</span>
                <span class="chip">Kali Linux 2025.3</span>
              </div>
            </div>

            <div class="skills-group">
              <div class="skills-label">Soft Skills</div>
              <div class="skills-chips">
                <span class="chip">Analytical thinking</span>
                <span class="chip">Communication</span>
                <span class="chip">Teamwork</span>
                <span class="chip">Initiative</span>
                <span class="chip">Adaptability</span>
                <span class="chip">Leadership</span>
                <span class="chip">Professionalism</span>
              </div>
            </div>

            <div class="skills-group">
              <div class="skills-label">Languages & Tools</div>
              <div class="skills-chips">
                <span class="chip">English (read · write · speak)</span>
                <span class="chip">Hindi (read · write · listen)</span>
                <span class="chip">Google Workspace</span>
                <span class="chip">Microsoft Office</span>
                <span class="chip">Adobe Suite</span>
                <span class="chip">Canva</span>
              </div>
            </div>
          </div>
        </section>

        <!-- EDUCATION & AWARDS -->
        <section id="education" class="section">
          <div class="section-head">
            <h2 class="section-title">Education & Honors</h2>
            <p class="section-sub">
              Computer Science training and national‑level recognition in academics and competition.
            </p>
          </div>

          <div class="edu-grid">
            <div class="edu-card">
              <h3 class="edu-title">University of Cincinnati</h3>
              <div class="edu-meta">
                B.S. Computer Science · GPA 3.68 · Graduating May 2030
              </div>
              <p style="margin-bottom:0.4rem;font-size:0.8rem;color:#9ca3af;">
                Relevant coursework:
              </p>
              <ul class="edu-list">
                <li>Intro to C++</li>
                <li>Engineering Design I–II</li>
                <li>Chemistry I</li>
                <li>Calculus I–II</li>
                <li>Physics I</li>
              </ul>
            </div>

            <div class="edu-card">
              <h3 class="edu-title">Awards & Honors</h3>
              <ul class="awards-list">
                <li>International Global Scholarship (Aug 2025 – Present).</li>
                <li>International Outreach Scholarship (Aug 2025 – Present).</li>
                <li>Dean’s List – College of Engineering and Applied Science (Fall 2025).</li>
                <li>Gold Medal – National‑Level Science Olympiad 2023.</li>
                <li>Gold Medal – National Abacus Competition 2023.</li>
                <li>First Position – District U‑19 Tennis Championship 2022.</li>
                <li>Ranked among the Top 150 AITA players in 2022.</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- CONTACT -->
        <section id="contact" class="section">
          <div class="section-head">
            <h2 class="section-title">Contact</h2>
            <p class="section-sub">
              I’m actively looking for Fall 2026 co‑op roles in cybersecurity‑related projects, software,
              or AI‑driven systems. If my work aligns with what you’re building, let’s talk.
            </p>
          </div>

          <div class="contact-card">
            <div class="contact-rows">
              <div>
                <div class="contact-row-label">Email</div>
                <div class="contact-row-value">
                  <a href="mailto:ramanal@mail.uc.edu">ramanal@mail.uc.edu</a>
                </div>
              </div>
              <div>
                <div class="contact-row-label">Links</div>
                <div class="contact-row-value">
                  <a href="https://anshulraman.com" target="_blank" rel="noopener">
                    anshulraman.com
                  </a>
                  &nbsp;·&nbsp;
                  <a href="https://www.linkedin.com/in/anshulraman06" target="_blank" rel="noopener">
                    LinkedIn
                  </a>
                  &nbsp;·&nbsp;
                  <a href="https://github.com/itsramananshul" target="_blank" rel="noopener">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <p style="font-size:0.8rem;color:#9ca3af;">
              Open to internships, co‑ops, and collaboration on security‑inspired research, penetration testing labs,
              and AI‑powered tools that solve real problems.
            </p>
          </div>
        </section>
      </div>

      <footer class="footer">
        <span>© <span id="year"></span> Anshul Raman</span>
        <span>Built with HTML & CSS · Deployed by you</span>
      </footer>
    </main>
  </div>

  <script>
    document.getElementById("year").textContent = new Date().getFullYear();
  </script>
</body>
</html>
