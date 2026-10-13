// Content preserved from the original portfolio.
const PROJECTS = {
  aria: {
    num:'— TRACK 01 / ADAPTIVE AI', title:'ARIA — Adaptive AI System',
    oneliner:`<b>Most AI systems answer questions. ARIA decides how to engage with you</b> — reading emotional state, detecting behavioral patterns, adapting in real time. <em>Not a wrapper. A system.</em> Live in production for a year, built solo.`,
    tags:['Node.js','Python','TypeScript','Vercel','Supabase','Gemini 2.5','Groq Whisper','Telegram Bot','PWA'],
    body:`
      <h4>By the numbers</h4>
      <div class="stat-grid">
        <div><span class="num">12</span><span class="lab">serverless functions — at the hard ceiling of the platform, every slot used</span></div>
        <div><span class="num">5</span><span class="lab">long-running edge functions for tasks that exceed serverless timeouts</span></div>
        <div><span class="num">6</span><span class="lab">scheduled autonomous jobs, running as frequently as every 15 minutes</span></div>
        <div><span class="num">4</span><span class="lab">intelligence phases, each feature-flagged and shadow-validated before activation</span></div>
        <div><span class="num">16/16</span><span class="lab">automated regression tests passing against the live production endpoint</span></div>
        <div><span class="num">0</span><span class="lab">times you have to open an app for it to be working</span></div>
      </div>
      <h4>What it does differently</h4>
      <ul>
        <li><b>Four-phase behavioral intelligence pipeline.</b> Signal observation → thinking layer → pattern memory → micro-coaching. Each phase ships dormant, runs in shadow against real traffic, and activates only when accuracy is confirmed. Circuit breaker auto-disables any phase on failure.</li>
        <li><b>Per-turn emotional signal detection.</b> Stress, avoidance, decision paralysis, overload, uncertainty — each confidence-scored. Behavioral directives shape <em>how</em> ARIA engages, not <em>what</em> it says. Per-mode cooldowns, global throttle, self-harm pre-exit, silent fallback on any error.</li>
        <li><b>Six-layer memory architecture.</b> Permanent profile (distilled every 72h), living memory (appended every conversation), active document context (confidence decay/boost/prune per turn), cold memory with recency weighting, per-person people graph with sensitive-fact gates, full-text session log search.</li>
        <li><b>A system that knows when to stop.</b> Topic sovereignty layer detects dismissals in any natural phrasing, stores scoped suppressions across all output surfaces — briefings, alerts, follow-ups — without deleting the underlying memory.</li>
        <li><b>Hybrid knowledge retrieval over a full personal corpus.</b> Semantic and keyword search run in parallel, merged, deduplicated, reranked. 15-min re-indexing with SHA-based change detection. Source routing learns preferred retrieval paths from outcome data. Hourly semantic clustering across the entire vault.</li>
        <li><b>Autonomous execution engine.</b> Up to 10 steps, dispatched via edge function to bypass serverless limits. Per-step state persists to the database — mid-run kills are survivable. Output sanitization rejects scaffolding tokens before the user sees the response.</li>
        <li><b>Non-AI final gate for irreversible actions.</b> The last check before any email sends is hardcoded deterministic logic — not a language model. Defense in depth only works when both layers can fail independently.</li>
        <li><b>Always-on desktop voice agent.</b> Wake word, local STT, neural TTS. 1.2s post-speech delay to prevent self-triggering. Automatic response compression for voice: 1–3 sentences, no markdown.</li>
        <li><b>Production engineering.</b> 16-test regression suite + multi-scenario simulation suite. Unit tests for every module. SQL migrations. Point-in-time snapshots with restore scripts. Feature flags on every behavioral change.</li>
      </ul>
      <h4>Stack</h4>
      <p class="stack-line">Node.js · Python · TypeScript (Deno) · PostgreSQL · Supabase · Vercel · Gemini 2.5 Flash · Groq Whisper · Google OAuth2 · Telegram Bot API · GitHub API · OpenWakeWord · faster-whisper · edge-tts · PWA</p>`,
    links:[{label:'Read more about ARIA ↗', url:'https://aria.anshulraman.com', primary:true}]
  },
  voxvitals: {
    num:'— TRACK 03 / 24-HOUR HACKATHON', title:'VoxVitals — AI Clinical Trial Platform',
    oneliner:`<b>3rd Place · Medpace Clinical Trial Challenge @ RevolutionUC 2026.</b> MLH Best Use of Presage API. <em>Built in 24 hours.</em> Voice check-ins, real-time camera-based physiological sensing, three role-based dashboards.`,
    tags:['Next.js','React','Supabase','Gemini API','ElevenLabs','Presage SDK'],
    body:`
      <h4>What got shipped</h4>
      <ul>
        <li>Built a full-stack AI clinical intelligence platform in 24 hrs — voice check-ins, real-time physiological sensing (heart rate, breathing rate, stress) via the Presage API camera SDK, medication scanning with AI safety and dosage analysis, and voice-phrase authentication.</li>
        <li>Engineered three role-based dashboards: patients interact entirely through voice; doctors get Gemini-powered risk scoring that auto-flags patients as stable, moderate, high risk, or critical; lead doctors get a global command center with doctor performance analytics, cohort insights, and trial-wide adherence and dropout metrics.</li>
        <li>Built a simulation lab for generating synthetic patients and modeling clinical workflows, plus an optimization engine predicting trial completion likelihood and identifying at-risk individuals before dropout.</li>
        <li>Integrated real-time emergency alerting, AI symptom matching to patient history, built-in doctor-patient messaging, and voice-activated login with exact-phrase verification — any deviation fails authentication.</li>
      </ul>`,
    links:[
      {label:'View live ↗', url:'https://voxvitals.anshulraman.tech/', primary:true},
      {label:'GitHub ↗', url:'https://github.com/itsramananshul/Revlu-hackathon'}
    ]
  },
  auriva: {
    num:'— TRACK 04 / MULTI-FAITH AI', title:'Auriva AI — Multi-Faith Spiritual Guide',
    oneliner:`<b>Most spiritual apps pick one religion. Auriva chose all of them</b> — 16 sacred traditions, each with a dedicated live scripture API, an individually authored Gemini system prompt, and a voice conversation agent engineered differently for iOS, Android, and desktop. <em>Every tradition is genuinely first-class.</em>`,
    tags:['JavaScript','Vercel Edge','Supabase','Gemini 2.5','Web Speech API','Voice AI','API.Bible','Multi-Faith'],
    body:`
      <h4>What's actually built</h4>
      <ul>
        <li><b>Verse retrieval runs a 3-tier cascade:</b> 4 live scripture APIs at tier one (GurbaniNow, alQuran.cloud, VedicScriptures, API.Bible), Gemini generation with per-source prompts at tier two, hardcoded verse pools at tier three — zero UI errors regardless of network state.</li>
        <li><b>Two-phase VAD runs 2 calibration passes</b> before each desktop voice session — measures ambient silence before TTS fires, then re-measures speaker bleed while TTS plays, deriving a threshold that blocks self-triggering without cutting off a real user speaking over the AI.</li>
        <li><b>Android TTS sentence-chunking</b> splits every response into individual sentences chained as separate speech objects via callbacks, working around the OS hard utterance cutoff; each sentence carries its own safety timeout.</li>
        <li><b>iOS audio unlock</b> fires a near-silent utterance inside the button-click gesture handler before voice mode activates, bypassing the browser's restriction on <code>speechSynthesis</code> in async contexts.</li>
        <li><b>Bible verse pipeline is two-stage:</b> Gemini runs a high-temperature reference-selection pass across all 66 books, then API.Bible retrieves the actual text with a three-translation waterfall fallback (NIV → KJV → AMP).</li>
        <li><b>Gemini SSE edge proxy on Vercel Edge Runtime</b> parses the stream and forwards raw text tokens — first words reach the client before the full response is computed.</li>
        <li><b>Message editing</b> truncates in-memory history at the selected index, wipes and atomically re-inserts the Supabase <code>messages</code> table, restores the original text into the input for re-submission.</li>
        <li><b>Dual-path auth boot</b> runs <code>getSession</code> and <code>onAuthStateChange</code> in parallel with a readiness guard specifically for Safari's post-redirect timing issues on older iOS.</li>
        <li><b>No framework</b> — auth screen, onboarding flow, and full chat interface hand-built in vanilla ES modules.</li>
      </ul>
      <h4>Stack</h4>
      <p class="stack-line">Gemini 2.5 Flash · Vercel Edge Functions · Supabase (Auth + Postgres + RLS) · Vanilla ES Modules · Web Speech API · API.Bible · alQuran.cloud · GurbaniNow · VedicScriptures</p>`,
    links:[
      {label:'View live ↗', url:'https://auriva-ai.anshulraman.com', primary:true},
      {label:'GitHub ↗', url:'https://github.com/itsramananshul/Auriva-AI'}
    ]
  },
  gradintel: {
    num:'— TRACK 05 / ACADEMIC PLATFORM', title:'GradIntel — Academic Performance Platform',
    oneliner:`<b>Full-stack GPA dashboard with AI assistants, grade simulator, study planner, and Canvas LMS integration.</b> Live at gradintel.anshulraman.com.`,
    tags:['Python','Supabase','Canvas LMS API','Gemini','Grok','Claude','OpenAI'],
    body:`
      <h4>What's inside</h4>
      <ul>
        <li>Cloud-synced GPA dashboard: cumulative GPA, semester GPA, credits, at-risk warnings across every device via Supabase.</li>
        <li>Grade Simulator with sliders for what-if scenarios + safe-zone calculator for every remaining exam.</li>
        <li>Multi-model AI Assistant — Gemini, Grok, Claude, OpenAI — plus syllabus PDF parser that auto-populates exam structure.</li>
        <li>Study Planner: Pomodoro timer, deadline tracker, mood log, AI-generated risk-ranked focus plans.</li>
        <li>Canvas LMS integration to auto-pull live grades from the university portal.</li>
        <li>Degree Tracker with AI-powered degree-plan PDF import and target GPA calculator.</li>
        <li>Gamification: XP, badges, GPA streaks, level titles, shareable cards, configurable GPA scales (4.0 / 4.3 / 5.0).</li>
      </ul>`,
    links:[
      {label:'View live ↗', url:'https://gradintel.anshulraman.com', primary:true},
      {label:'GitHub ↗', url:'https://github.com/itsramananshul/gradintel'}
    ]
  },
  allcode: {
    num:'— TRACK 02 / OPEN SOURCE DEVELOPER TOOL', title:'AllCode — One Task, Any Coding Agent',
    oneliner:`<b>Keep a coding task moving when an agent reaches its limit.</b> AllCode lets developers continue the same conversation through Claude Code, OpenCode, Codex, Hermes, or another installed agent.`,
    tags:['TypeScript','Node.js','Terminal UI','Open Source'],
    body:`
      <video class="case-film" controls playsinline preload="metadata" poster="assets/allcode-launch-light-poster.jpg" aria-label="AllCode launch film">
        <source src="assets/allcode-launch-light.mp4" type="video/mp4">
      </video>
      <h4>What it solves</h4>
      <ul>
        <li>Built a terminal workspace where developers can start a fix in one coding agent and finish it in another without copying a transcript or restating the problem.</li>
        <li>Carried conversation context and native sessions across switches, so a usage limit or a better-suited model does not force the task to restart.</li>
        <li>Preserved each CLI's existing account, model access, and approval settings instead of routing everything through a new backend.</li>
        <li>Shipped an open-source Node.js CLI with update-safe integrations and automated checks on Windows, macOS, and Linux.</li>
      </ul>
      <p class="stack-line">TypeScript · Node.js · Terminal UI</p>`,
    links:[
      {label:'Watch film ↗', url:'assets/allcode-launch-light.mp4', primary:true},
      {label:'GitHub ↗', url:'https://github.com/itsramananshul/allcode'}
    ]
  },
  credix: {
    num:'— 06 / FINTECH', title:'Credix — Fintech-grade Budgeting MVP',
    oneliner:`<b>Connect a real bank account, watch transactions categorize themselves, set budgets, and get GPT-4o spending insights — with international currency conversion baked in.</b> Live at <em>credix.anshulraman.com</em>.`,
    tags:['Next.js','React','TypeScript','Tailwind','Supabase','PostgreSQL','Plaid','OpenAI GPT-4o','SWR','Vercel','GitHub Actions'],
    body:`
      <h4>What's actually built</h4>
      <ul>
        <li><b>Plaid Link integration</b> for real bank-account connectivity, with the <code>transactionsSync</code> cursor API to incrementally pull transactions and reconcile state without re-fetching the world.</li>
        <li><b>Dual-path categorization</b>: deterministic rule-based engine first, optional GPT-4o-mini pass for ambiguous transactions — every category change is auditable.</li>
        <li><b>Monthly budget tracking</b> with alert thresholds and spend-pace projections so you know mid-month whether you're on track.</li>
        <li><b>Subscription detection</b> from transaction patterns — finds recurring charges by amount + cadence + merchant fingerprint, surfaces them as a list you can cancel.</li>
        <li><b>International currency conversion</b> via Open Exchange Rates so transactions in foreign currencies normalize to your home currency for budgeting.</li>
        <li><b>AI spending insights</b> (GPT-4o-mini) that summarize where your money went, flag anomalies, and recommend cuts — generated on demand, not on every page load.</li>
        <li><b>Supabase + RLS</b> for auth and per-user data isolation. Postgres functions (<code>PLpgSQL</code>) handle the heavier categorization and aggregation logic at the DB layer.</li>
        <li><b>SWR hooks</b> (<code>useTransactions</code>, <code>useBudgets</code>, <code>useSubscriptions</code>) for cache + revalidation — instant UI, eventual consistency.</li>
        <li><b>GitHub Actions CI</b>: type-check, lint, build on every push. Vercel auto-deploys main.</li>
      </ul>
      <h4>Stack</h4>
      <p class="stack-line">Next.js · React · TypeScript · Tailwind CSS · Supabase (Auth + Postgres + RLS) · PLpgSQL · Plaid · OpenAI GPT-4o-mini · Open Exchange Rates · SWR · Vercel · GitHub Actions</p>`,
    links:[
      {label:'View live ↗', url:'https://credix.anshulraman.com/', primary:true},
      {label:'GitHub ↗', url:'https://github.com/itsramananshul/credix'}
    ]
  },
  reachout: {
    num:'— 07 / OUTREACH AUTOMATION', title:'ReachOut — Automated Job Outreach Platform',
    oneliner:`<b>Full-stack cold email automation that finds recruiters across 4 job boards, generates personalized emails, and sends them from your own Gmail.</b> Built for job seekers who want to skip the queue.`,
    tags:['JavaScript','Supabase','Gmail API','Google OAuth','Microsoft OAuth','Hunter.io','RapidAPI'],
    body:`
      <h4>What it does</h4>
      <ul>
        <li>Cloud-synced campaign dashboard: emails sent, companies reached, delivery rate, and campaign history across every device via Supabase.</li>
        <li>Multi-source job search across LinkedIn, Indeed, Glassdoor &amp; Handshake — filter by source and select listings in one click.</li>
        <li>Recruiter email finder that generates 6 pattern variations per contact (<code>firstname@</code>, <code>f.lastname@</code>, <code>fi.last@</code>, etc.) with confidence scoring.</li>
        <li>Variable-driven email template editor with live preview — auto-swaps recruiter name, company, job title, and your skills per send.</li>
        <li>Gmail &amp; Outlook OAuth integration: emails sent from your own account with resume attached, never from a shared server.</li>
        <li>4-step campaign wizard: profile builder, job selector, email composer, live send queue with per-job status tracking.</li>
        <li>Setup integrations for Hunter.io (email accuracy) and RapidAPI JSearch (live job data) with embedded step-by-step instructions.</li>
      </ul>`,
    links:[
      {label:'View live ↗', url:'https://reachout.anshulraman.com/', primary:true},
      {label:'GitHub ↗', url:'https://github.com/itsramananshul/reachout'}
    ]
  },
  phone: {
    num:'— 08 / LOCAL VOICE AI', title:'AI Phone Agent — Local Voice AI System',
    oneliner:`<b>Fully working AI phone agent that answers calls and holds real conversations</b> — running completely free on a local machine. No OpenAI, no paid APIs.`,
    tags:['Twilio','Node.js','Python','Ollama','Faster-Whisper','Flask','gTTS'],
    body:`
      <h4>How it works</h4>
      <ul>
        <li>Voice pipeline integrating Twilio call handling, local Whisper transcription, LLaMA 3.2 via Ollama, and gTTS text-to-speech into a single real-time conversation loop.</li>
        <li>Dual server architecture with Node.js handling Twilio webhooks and Python handling AI processing, communicating internally to keep the call alive during inference.</li>
        <li>Built a polling system to solve live call timing — keeps the call open every 5 seconds while AI processes, then plays reply the moment it's ready.</li>
        <li>Fully local and free — LLaMA 3.2 runs on device via Ollama, Whisper transcribes locally, total cost is $1/month for the Twilio number.</li>
        <li>Debugged and resolved webhook routing, call state management, Python–Node intercommunication, and package dependency conflicts across the full stack.</li>
      </ul>`,
    links:[{label:'GitHub ↗', url:'https://github.com/itsramananshul/ai-phone-agent/', primary:true}]
  },
  ev3: {
    num:'— 09 / ENGINEERING DESIGN', title:'EV3 Autonomous Robot — UC Engineering Design Project',
    oneliner:`<b>Fully autonomous robot that navigates a line track, detects and grabs a bin by weight classification, and delivers it to the correct drop zone.</b> Built from scratch with zero prior hardware experience.`,
    tags:['LabVIEW','LEGO Mindstorms EV3','Sensors','State Machine','ENED1002C'],
    body:`
      <h4>What I built</h4>
      <ul>
        <li>Single LabVIEW While Loop with a Grabbed boolean state machine controlling every behavior in real time — line following, bin detection, claw actuation, carry, and drop-off — no sequential structures, no human input.</li>
        <li>Dual color sensors in Detect mode straddle the 1-inch black line edges for real-time directional correction. Ultrasonic proximity sensor triggers motorized gear-driven claw at under 5cm distance.</li>
        <li>4 physical prototype iterations (gear train → tricycle → forklift redesign → final claw build) and 5 complete software architecture rewrites before landing on the final design.</li>
        <li>45 documented test runs across 3 experimental factors — surface color, lighting conditions, and tape contrast — with full descriptive statistics to validate sensor reliability before demo day.</li>
        <li>Applied the full engineering design process: stakeholder analysis, morphological charts across 6 design functions, weighted decision matrices, and descriptive statistics — not just built it, actually engineered it.</li>
      </ul>`,
    links:[{label:'View LinkedIn post ↗', url:'https://www.linkedin.com/posts/anshulraman06_engineering-robotics-labview-ugcPost-7454015401723719680-FJUj', primary:true}]
  },
  atm: {
    num:'— 10 / SYSTEMS', title:'Python Banking & ATM System',
    oneliner:`<b>Full console-based banking with persistent storage, PIN security &amp; admin panel.</b>`,
    tags:['Python','File I/O','ATM Logic'],
    body:`
      <h4>Features</h4>
      <ul>
        <li>Unique account IDs and PINs with duplicate-collision detection.</li>
        <li>Persistent storage via <code>save_accounts()</code> — rewrites <code>accounts.txt</code> after every operation.</li>
        <li>3-attempt PIN lockout with auto-lock on failure, reset on success.</li>
        <li>Admin panel: view all accounts, unlock cards, robust input validation.</li>
      </ul>`,
    links:[{label:'GitHub ↗', url:'https://github.com/itsramananshul/atm-system', primary:true}]
  },
  bus: {
    num:'— 11 / SYSTEMS', title:'Python Bus Booking System',
    oneliner:`<b>File-backed bus reservation with seat tracking, cancellation, and unique booking IDs.</b>`,
    tags:['Python','File I/O','Booking Logic'],
    body:`
      <h4>Features</h4>
      <ul>
        <li>Unique booking IDs validated against existing records to avoid collisions.</li>
        <li>Per-bus seat availability synced on every booking and cancellation.</li>
        <li>File storage persists bookings, rebuilding seat counts at startup.</li>
        <li>Handles invalid input gracefully; rebuilds bookings file after cancellations.</li>
      </ul>`,
    links:[{label:'GitHub ↗', url:'https://github.com/itsramananshul/bus-booking-system/', primary:true}]
  },
  med: {
    num:'— 12 / AI HARDWARE', title:'AI-Integrated Medicine Dispensing Machine',
    oneliner:`<b>Assistive hardware for Alzheimer's and dementia patients</b> — reduces missed doses and improves caregiver visibility.`,
    tags:['AI Hardware','Facial Recognition','IoT','ENED'],
    body:`
      <h4>What it does</h4>
      <ul>
        <li>4-person team: smart dispenser verifies patient, delivers correct dose, escalates emergencies.</li>
        <li>Camera-based facial recognition before dispensing — zero wrong-patient risk.</li>
        <li>Automated alerts to caregivers + emergency call trigger in life-threatening scenarios.</li>
        <li>Addresses medication adherence, caregiver burden, and patient safety.</li>
      </ul>`,
    links:[]
  },
  rat: {
    num:'— 13 / OFFENSIVE SECURITY', title:'RAT Development & Pen Testing',
    oneliner:`<b>Controlled Remote Access Trojan lab</b> — full-device compromise, 12+ remote functions, ethical documentation. Lab-only, ethically operated.`,
    tags:['Metasploit','Kali Linux','Offensive Labs'],
    body:`
      <h4>What I researched</h4>
      <ul>
        <li>Cross-platform RAT: real-time surveillance, GPS tracking, SMS exfiltration in isolated lab.</li>
        <li>Post-exploitation research on Android &amp; Windows — documented system permission weaknesses.</li>
        <li>Compiled ethical-use guidelines and mitigation steps as final deliverable.</li>
      </ul>`,
    links:[]
  },
  wifi: {
    num:'— 14 / WIRELESS SECURITY', title:'Wi-Fi Penetration Testing Device',
    oneliner:`<b>ESP8266 wireless auditing</b> — evil twin APs, deauth testing, 50+ beacon floods.`,
    tags:['ESP8266','Aircrack-ng','Wireless Security'],
    body:`
      <h4>What I built</h4>
      <ul>
        <li>Portable tool evaluating 802.11 vulnerabilities and deauthentication resilience.</li>
        <li>"Evil Twin" APs audited 20+ device connection attempts in a controlled environment.</li>
        <li>50+ simultaneous beacon signals to study wireless congestion thresholds.</li>
      </ul>`,
    links:[{label:'View LinkedIn post ↗', url:'https://www.linkedin.com/posts/anshulraman06/hardware-embedded-systems-developerjourney-activity-7422510046862835712-nYUH', primary:true}]
  },
  phish: {
    num:'— 15 / SOCIAL ENGINEERING', title:'Phishing Website Simulation',
    oneliner:`<b>End-to-end phishing campaigns in a secure lab</b> — credential harvesting, MFA mitigation, defensive analysis.`,
    tags:['SET','Social Engineering','User Defense'],
    body:`
      <h4>What I learned</h4>
      <ul>
        <li>Rebuilt phishing workflows to study password capture and social engineering tactics.</li>
        <li>Fake login portals and credential harvesting flows recreated in secure local lab.</li>
        <li>Mitigation: MFA enforcement, user awareness training, email filtering policies.</li>
      </ul>`,
    links:[]
  }
};

const STACK = [
  // Languages & runtimes
  { name:'Python',       slug:'python',          c:'#3776AB', d:'3776AB' },
  { name:'TypeScript',   slug:'typescript',      c:'#3178C6', d:'3178C6' },
  { name:'JavaScript',   slug:'javascript',      c:'#F7DF1E', d:'F7DF1E' },
  { name:'Java',         slug:'openjdk',         c:'#ED8B00', d:'ED8B00' },
  { name:'C',            slug:'c',               c:'#A8B9CC', d:'A8B9CC' },
  { name:'C++',          slug:'cplusplus',       c:'#00599C', d:'4F8DD4' },
  { name:'C#',           slug:'csharp',          c:'#239120', d:'4FB820' },
  { name:'Go',           slug:'go',              c:'#00ADD8', d:'00ADD8' },
  { name:'Rust',         slug:'rust',            c:'#FFFFFF', d:'FFFFFF' },
  { name:'Kotlin',       slug:'kotlin',          c:'#7F52FF', d:'A88BFF' },
  { name:'Swift',        slug:'swift',           c:'#F05138', d:'F05138' },
  { name:'Dart',         slug:'dart',            c:'#0175C2', d:'2EA7E0' },
  { name:'Ruby',         slug:'ruby',            c:'#CC342D', d:'CC342D' },
  { name:'PHP',          slug:'php',             c:'#777BB4', d:'A8ADDD' },
  { name:'MATLAB',       slug:'mathworks',       c:'#0076A8', d:'4FA8D4' },
  { name:'Bash',         slug:'gnubash',         c:'#4EAA25', d:'4EAA25' },
  { name:'PowerShell',   slug:'powershell',      c:'#5391FE', d:'5391FE' },
  { name:'Node.js',      slug:'nodedotjs',       c:'#5FA04E', d:'5FA04E' },
  { name:'Deno',         slug:'deno',            c:'#70FFAF', d:'70FFAF' },
  // Frontend / frameworks
  { name:'React',        slug:'react',           c:'#61DAFB', d:'61DAFB' },
  { name:'Next.js',      slug:'nextdotjs',       c:'#FFFFFF', d:'FFFFFF' },
  { name:'Tailwind',     slug:'tailwindcss',     c:'#06B6D4', d:'06B6D4' },
  { name:'Three.js',     slug:'threedotjs',      c:'#FFFFFF', d:'FFFFFF' },
  { name:'Flask',        slug:'flask',           c:'#FFFFFF', d:'FFFFFF' },
  { name:'SWR',          slug:'swr',             c:'#FFFFFF', d:'FFFFFF' },
  { name:'HTML5',        slug:'html5',           c:'#E34F26', d:'E34F26' },
  { name:'CSS3',         slug:'css3',            c:'#1572B6', d:'1572B6' },
  { name:'PWA',          slug:'pwa',             c:'#5A0FC8', d:'A077F5' },
  // Data / cloud / deploy
  { name:'PostgreSQL',   slug:'postgresql',      c:'#4169E1', d:'4169E1' },
  { name:'Supabase',     slug:'supabase',        c:'#3ECF8E', d:'3ECF8E' },
  { name:'Vercel',       slug:'vercel',          c:'#FFFFFF', d:'FFFFFF' },
  { name:'Google Cloud', slug:'googlecloud',     c:'#4285F4', d:'4285F4' },
  { name:'GH Actions',   slug:'githubactions',   c:'#2088FF', d:'2088FF' },
  // AI / LLMs / Voice
  { name:'OpenAI',       slug:'openai',          c:'#74AA9C', d:'EFEFEF' },
  { name:'Claude',       slug:'anthropic',       c:'#D97757', d:'D97757' },
  { name:'Gemini',       slug:'googlegemini',    c:'#8E75B2', d:'8E75B2' },
  { name:'Grok / xAI',   slug:'x',               c:'#FFFFFF', d:'FFFFFF' },
  { name:'Meta · LLaMA', slug:'meta',            c:'#0866FF', d:'4F8DFF' },
  { name:'DeepSeek',     slug:'deepseek',        c:'#4D6BFE', d:'4D6BFE' },
  { name:'Ollama',       slug:'ollama',          c:'#FFFFFF', d:'FFFFFF' },
  { name:'HuggingFace',  slug:'huggingface',     c:'#FFD21E', d:'FFD21E' },
  { name:'ElevenLabs',   slug:'elevenlabs',      c:'#FFFFFF', d:'FFFFFF' },
  // APIs / integrations
  { name:'Google',       slug:'google',          c:'#4285F4', d:'4285F4' },
  { name:'Gmail',        slug:'gmail',           c:'#EA4335', d:'EA4335' },
  { name:'Calendar',     slug:'googlecalendar',  c:'#4285F4', d:'4285F4' },
  { name:'Microsoft',    slug:'microsoft',       c:'#5E5E5E', d:'B7B7B7' },
  { name:'Outlook',      slug:'microsoftoutlook',c:'#0078D4', d:'2EA7E0' },
  { name:'Edge',         slug:'microsoftedge',   c:'#0078D7', d:'2EA7E0' },
  { name:'Telegram',     slug:'telegram',        c:'#26A5E4', d:'26A5E4' },
  { name:'GitHub',       slug:'github',          c:'#9CA3AF', d:'FFFFFF' },
  { name:'Twilio',       slug:'twilio',          c:'#F22F46', d:'F22F46' },
  { name:'Canvas',       slug:'instructure',     c:'#E72429', d:'E72429' },
  // Job-board scrape sources (ReachOut)
  { name:'LinkedIn',     slug:'linkedin',        c:'#0A66C2', d:'2D87E2' },
  { name:'Indeed',       slug:'indeed',          c:'#003A9B', d:'4D88E0' },
  { name:'Glassdoor',    slug:'glassdoor',       c:'#0CAA41', d:'34D26B' },
  // Security
  { name:'Kali',         slug:'kalilinux',       c:'#557C94', d:'9DB7C9' },
  { name:'Parrot',       slug:'parrotsecurity',  c:'#15D3F6', d:'15D3F6' },
  { name:'Wireshark',    slug:'wireshark',       c:'#1679A7', d:'4FA8D4' },
  { name:'Metasploit',   slug:'metasploit',      c:'#2596CD', d:'2596CD' },
  { name:'Hashcat',      slug:'hashcat',         c:'#FFFFFF', d:'FFFFFF' },
  // Systems / tools / hardware
  { name:'Linux',        slug:'linux',           c:'#FCC624', d:'FCC624' },
  { name:'Ubuntu',       slug:'ubuntu',          c:'#E95420', d:'E95420' },
  { name:'Arch Linux',   slug:'archlinux',       c:'#1793D1', d:'2EB8F0' },
  { name:'macOS',        slug:'apple',           c:'#FFFFFF', d:'FFFFFF' },
  { name:'Windows',      slug:'windows11',       c:'#0078D4', d:'2EA7E0' },
  { name:'Git',          slug:'git',             c:'#F05032', d:'F05032' },
  { name:'VS Code',      slug:'visualstudiocode',c:'#007ACC', d:'2EA7E0' },
  { name:'Raspberry Pi', slug:'raspberrypi',     c:'#A22846', d:'CC4477' },
  { name:'Arduino',      slug:'arduino',         c:'#00979D', d:'00979D' },
  { name:'Espressif',    slug:'espressif',       c:'#E7352C', d:'E7352C' }
];
