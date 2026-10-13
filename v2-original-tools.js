// Exact tools data and grid interaction from https://www.anshulraman.com/, scoped to V2.
(() => {
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

(function renderStack() {
  const grid = document.getElementById('stackGrid');
  if (!grid) return;
  STACK.forEach((s, i) => {
    const tile = document.createElement('div');
    tile.className = 'ic-tile';
    tile.style.setProperty('--c', s.c);
    tile.style.setProperty('--d', (i * 25) + 'ms');
    const iconURL = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${s.slug}.svg`;
    tile.style.setProperty('--d', '#' + s.d);
    tile.innerHTML = `
      <div class="icon" style="--icon-url:url('${iconURL}')" role="img" aria-label="${s.name}"></div>
      <span>${s.name}</span>`;
    grid.appendChild(tile);
  });
  // 3D mouse-tilt only on devices with a fine pointer (skip touch)
  const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (fine) {
    grid.querySelectorAll('.ic-tile').forEach(tile => {
      tile.addEventListener('mousemove', e => {
        const r = tile.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        tile.style.setProperty('--rx', (-y * 22) + 'deg');
        tile.style.setProperty('--ry', (x * 22) + 'deg');
      });
      tile.addEventListener('mouseleave', () => {
        tile.style.setProperty('--rx', '0deg');
        tile.style.setProperty('--ry', '0deg');
      });
    });
  }
})();


})();
