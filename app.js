/* ============================================
   4Y'S REGNEPARTY! — app.js
   ============================================ */

// ── UTILITIES ────────────────────────────────

function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { let t = b; b = a % b; a = t; }
  return a;
}

function parseAnswer(str) {
  const s = str.trim().replace(/\s+/g, '').replace(',', '.');
  if (!s) return null;
  if (s.includes('/')) {
    const parts = s.split('/');
    if (parts.length !== 2) return null;
    const n = parseInt(parts[0], 10), d = parseInt(parts[1], 10);
    if (isNaN(n) || isNaN(d) || d === 0) return null;
    const g = gcd(Math.abs(n), Math.abs(d));
    return `${n / g}/${d / g}`;
  }
  const n = parseFloat(s);
  if (isNaN(n)) return null;
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

function checkAnswer(userInput, correct) {
  const u = parseAnswer(userInput);
  const c = parseAnswer(correct);
  return u !== null && c !== null && u === c;
}

// ── CONFETTI ─────────────────────────────────

function triggerConfetti() {
  const colors = ['#FF6B9D','#FFD700','#00E5FF','#7C3AFF','#27AE60','#FF8C42','#fff'];
  for (let i = 0; i < 72; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const size = 7 + Math.random() * 9;
    el.style.cssText = `
      left:${Math.random() * 100}vw;
      width:${size}px; height:${size}px;
      border-radius:${Math.random() > 0.5 ? '50%' : '3px'};
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-delay:${Math.random() * 0.4}s;
      animation-duration:${1.5 + Math.random() * 1.2}s;
    `;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

// ── BACKGROUND DECORATIONS ───────────────────

function clearDecorations() {
  document.querySelectorAll('.bg-deco').forEach(el => el.remove());
}

function addDecorations(theme) {
  clearDecorations();

  if (theme === 'kpop') {
    const syms = ['✦','★','✨','✩','⋆','♡','✧'];
    const colors = ['#FFD700','#FF80AA','#D080FF','#fff','#FFB8D8','#FF40C0'];
    for (let i = 0; i < 32; i++) {
      const el = document.createElement('span');
      el.className = 'bg-deco star-deco';
      el.textContent = syms[Math.floor(Math.random() * syms.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        font-size:${8 + Math.random() * 18}px;
        color:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 5}s;
        animation-duration:${2 + Math.random() * 4}s;
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'gaming') {
    const colors = ['#00C8E0','#7040E0','#FF6B35','#00E888','#FF40B0'];
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('div');
      el.className = 'bg-deco pixel-deco';
      const size = 5 + Math.random() * 18;
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        width:${size}px;height:${size}px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 5}s;
        animation-duration:${2.5 + Math.random() * 3}s;
        box-shadow:0 0 12px currentColor;
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'brawlstars') {
    const colors = ['#FF6B35','#FFD700','#00E888','#FF40B0','#7040E0'];
    for (let i = 0; i < 18; i++) {
      const el = document.createElement('div');
      el.className = 'bg-deco pixel-deco';
      const size = 6 + Math.random() * 16;
      const isSquare = Math.random() > 0.4;
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        width:${size}px;height:${size}px;
        border-radius:${isSquare ? '3px' : '50%'};
        background:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 4}s;
        animation-duration:${2 + Math.random() * 3}s;
        box-shadow:0 0 10px currentColor;
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'football' || theme === 'ronaldo') {
    const emojis = theme === 'ronaldo' ? ['★','✦','⋆','·'] : ['·','✦','⋆','★'];
    const baseColor = theme === 'ronaldo' ? '#FFD700' : '#fff';
    const colors = theme === 'ronaldo'
      ? ['#FFD700','#FFC040','rgba(255,215,0,0.5)']
      : ['rgba(255,255,255,0.6)','rgba(255,255,255,0.3)','rgba(150,220,255,0.4)'];
    for (let i = 0; i < 22; i++) {
      const el = document.createElement('span');
      el.className = 'bg-deco star-deco';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        font-size:${6 + Math.random() * 14}px;
        color:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 6}s;
        animation-duration:${3 + Math.random() * 4}s;
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'anime') {
    const syms = ['◎','○','◯','⊕','◉','·','✦'];
    const colors = ['#FF6040','#FFB020','#FF4060','rgba(255,100,50,0.6)','rgba(255,200,50,0.4)'];
    for (let i = 0; i < 24; i++) {
      const el = document.createElement('span');
      el.className = 'bg-deco star-deco';
      el.textContent = syms[Math.floor(Math.random() * syms.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        font-size:${8 + Math.random() * 20}px;
        color:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 4}s;
        animation-duration:${1.5 + Math.random() * 3}s;
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'jjk') {
    const syms = ['✦','⋆','·','✧','✩'];
    const colors = ['rgba(140,80,255,0.7)','rgba(180,100,255,0.4)','rgba(100,50,200,0.5)','rgba(255,255,255,0.2)'];
    for (let i = 0; i < 28; i++) {
      const el = document.createElement('span');
      el.className = 'bg-deco star-deco';
      el.textContent = syms[Math.floor(Math.random() * syms.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        font-size:${6 + Math.random() * 16}px;
        color:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 5}s;
        animation-duration:${2 + Math.random() * 4}s;
        filter:blur(${Math.random() > 0.6 ? '1px' : '0'});
      `;
      document.body.appendChild(el);
    }

  } else if (theme === 'geography') {
    const syms = ['·','·','·','○','◦','✦','⋆'];
    const colors = ['rgba(50,200,150,0.6)','rgba(50,180,220,0.5)','rgba(100,220,200,0.4)','rgba(255,255,255,0.3)'];
    for (let i = 0; i < 26; i++) {
      const el = document.createElement('span');
      el.className = 'bg-deco star-deco';
      el.textContent = syms[Math.floor(Math.random() * syms.length)];
      el.style.cssText = `
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        font-size:${5 + Math.random() * 18}px;
        color:${colors[Math.floor(Math.random() * colors.length)]};
        animation-delay:${Math.random() * 6}s;
        animation-duration:${3 + Math.random() * 5}s;
      `;
      document.body.appendChild(el);
    }
  }
}

// ── TEMPLATE SYSTEM ──────────────────────────

function applyTemplate(tmpl, vars) {
  return tmpl.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : `{${k}}`));
}

// ── SHARED MATH DATA ─────────────────────────
// 10 chapter types × 3 difficulty levels (Nem / Mellem / Svær)

const MATH = {
  plus:    [
    { vars: { n1: 35,  n2: 29  }, ans: '64'  },
    { vars: { n1: 48,  n2: 36  }, ans: '84'  },
    { vars: { n1: 186, n2: 247 }, ans: '433' }
  ],
  minus:   [
    { vars: { n1: 80,  n2: 23  }, ans: '57'  },
    { vars: { n1: 120, n2: 47  }, ans: '73'  },
    { vars: { n1: 300, n2: 134 }, ans: '166' }
  ],
  gange:   [
    { vars: { n1: 4, n2: 6  }, ans: '24'  },
    { vars: { n1: 8, n2: 6  }, ans: '48'  },
    { vars: { n1: 9, n2: 12 }, ans: '108' }
  ],
  div:     [
    { vars: { n1: 48,  n2: 4 }, ans: '12' },
    { vars: { n1: 96,  n2: 4 }, ans: '24' },
    { vars: { n1: 156, n2: 6 }, ans: '26' }
  ],
  frakof:  [
    { vars: { frac: '1/3', n1: 30 }, ans: '10' },
    { vars: { frac: '1/3', n1: 60 }, ans: '20' },
    { vars: { frac: '3/4', n1: 60 }, ans: '45' }
  ],
  frakp:   [
    { vars: { f1: '1/5', f2: '2/5'  }, ans: '3/5'  },
    { vars: { f1: '2/8', f2: '3/8'  }, ans: '5/8'  },
    { vars: { f1: '4/11', f2: '5/11' }, ans: '9/11' }
  ],
  omk:     [
    { vars: { n1: 10, n2: 6  }, ans: '32' },
    { vars: { n1: 15, n2: 8  }, ans: '46' },
    { vars: { n1: 24, n2: 13 }, ans: '74' }
  ],
  areal:   [
    { vars: { n1: 8,  n2: 7  }, ans: '56'  },
    { vars: { n1: 12, n2: 9  }, ans: '108' },
    { vars: { n1: 18, n2: 14 }, ans: '252' }
  ],
  blandet: [
    { vars: { n1: 3, n2: 12, n3: 8  }, ans: '44'  },
    { vars: { n1: 5, n2: 24, n3: 18 }, ans: '138' },
    { vars: { n1: 8, n2: 35, n3: 24 }, ans: '304' }
  ],
  finale:  [
    { vars: { frac: '1/2', n1: 40,  n2: 10 }, ans: '30' },
    { vars: { frac: '3/4', n1: 80,  n2: 15 }, ans: '75' },
    { vars: { frac: '3/5', n1: 100, n2: 20 }, ans: '80' }
  ]
};

// Shared math tip per chapter position (0–9)
const SHARED_MATH_NOTES = [
  'Plus = lægge to tal sammen. Svaret er større end begge tal.',
  'Minus = trække fra. Start med det store tal.',
  'Gange = det samme antal gentaget mange gange.',
  'Division = dele ligeligt. Prøv: hvad × divisor = totalen?',
  'Brøk af: del i nævnerens dele, tag tællerens antal.',
  'Brøk-plus med ens nævner: læg kun tællerne sammen.',
  'Omkreds = 2 × (lang side + kort side) — alle 4 sider.',
  'Areal = længde × bredde. Svaret er i kvadrat-enheder.',
  'Gange ALTID FØR plus. Rækkefølge er vigtig!',
  'Find brøkdelen FØRST, læg derefter det ekstra til.'
];

// Shared hint steps per chapter position (0–9)
const SHARED_HINTS = [
  ['Find de to tal.', 'Læg dem sammen med plus.', 'Svaret er større end begge?'],
  ['Start med det store tal.', 'Træk det lille fra.', 'Svaret er positivt og mindre end startallet.'],
  ['Grupper: n1 × n2.', 'Brug gange-tabellen.', 'Svaret er større end begge tal.'],
  ['Del totalen ligeligt.', 'Hvad × divisor = total?', 'Prøv: total ÷ antal.'],
  ['Del i nævnerens dele.', 'Tag tællerens antal dele.', 'Svar × nævner = totalen?'],
  ['Er nævnerne ens?', 'Læg kun tællerne sammen.', 'Nævneren forbliver den samme.'],
  ['Et rektangel: 2 lange + 2 korte sider.', '2 × (lang + kort) = ?', 'Tæl alle 4 sider.'],
  ['Gang de to mål.', 'Areal = l × b.', 'Svaret er i kvadrat-enheder.'],
  ['Gange-stykket FØRST!', 'Derefter plus.', 'Rækkefølge er alt!'],
  ['Brøkdelen FØRST.', 'Del i dele, tag tællerens antal.', 'Læg det ekstra til til sidst.']
];

// ── GAME DATA ─────────────────────────────────

const GAME_DATA = {

  // ════════════════════════════════════════════
  //  K-POP  (Hearts2Hearts · Stray Kids · Babymonster)
  // ════════════════════════════════════════════
  kpop: {
    id: 'kpop', name: 'K-POP', icon: '⭐',
    tagline: 'Scene, lys og den største nat i K-POP',
    endingTrophy: '🌟', endingTitle: 'Showet Er Legenden',
    endingStory: `Der er øjeblikke, man husker på en bestemt måde.

Lyset eksploderede — ikke pænt og velplanlagt, men som om scenen endelig fik lov til at ånde. Tusindvis af armbånd tændte på én gang, alle i takt med musikken. YUNA stoppede midt i et vers og lo bare. Ingenting gik forkert. Alt gik forkert og alligevel rigtigt, på den bedste mulige måde.

Bagefter sendte PARK én besked til hele holdet: »Alle tallene passede. Hvert eneste et.« Det var hans måde at sige tak.`,
    chapters: [
      {
        title: 'Lyset Vågner',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Den store kasse med armbånd kom klokken 23.14. YUNA vidste det, fordi hun ikke havde sovet.

{n1} lyserøde armbånd lå i den ene halvdel — stablet præcist, som om de vidste, de var vigtige. {n2} blå armbånd lå i den anden. Kassen lugtede svagt af vanille. Ingen vidste hvorfor.

»Lyssystemet aktiveres kun med den korrekte totalsum,« sagde PARK med den stemme, han bruger, når han er nervøs men prøver at lyde rolig. »Det er bare... programmeringen.«`,
        questionTemplate: `Der er {n1} lyserøde og {n2} blå armbånd. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} armbånd! Et klik. Lyset tænder — og MINA siger: 'Godt.' Det er det bedste, hun siger.`
      },
      {
        title: 'De Manglende Trin',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Stray Kids havde lagt {n1} øvekort ud på rehearsal-gulvet. Hvert kort viste ét bestemt dansétrin — og kun ét. Det var systemet, og systemet virkede.

Så tændte ventilationsanlægget. Ingen ved hvornår præcis. {n2} kort sejlede lydløst ud gennem risten og forsvandt et sted i ventilationssystemet, sikkert meget tilfredse med sig selv.

Bang Chan stod og kiggede på hullet i kortene. »Vi kan ikke lave finalen,« sagde han, »før vi ved, hvad vi faktisk har.«`,
        questionTemplate: `Stray Kids startede med {n1} øvekort. {n2} blæste væk. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} kort! Nok til finalen — men kun hvis alle husker resten udenad.`
      },
      {
        title: 'Kostumernes Hemmelighed',
        idx: 2, lvlData: 'gange',
        storyTemplate: `LILI havde aldrig i sit liv sagt 'det er godt nok.' Det var ikke noget hun gik op i — det var bare ikke i hendes natur.

Babymonster har {n1} dansere til verdensturneen. Hvert eneste show kræver {n2} kostumer til hver — ét pr. nummer. LILI stod med sin notesbog og ventede.

»Hvis jeg bestiller ét for lidt,« sagde hun stille, »er det ikke scenearrangementet der fejler. Det er mig.« Hun sagde det roligt. Det var det der var skræmmende.`,
        questionTemplate: `{n1} dansere, {n2} kostumer til hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} kostumer! LILI skriver tallet ned uden at sige noget. Det betyder, det er rigtigt.`
      },
      {
        title: 'Busbagagen',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} fans i en lang, ophidset kø foran arenaen. Sikkerhedschef JAKE havde {n2} busser klar — og en whiteboard-markør og en meget bestemt mening om, hvordan tingene skal gøres.

»Præcis det samme antal i hver bus,« sagde han. »Ikke én mere. Ikke én mindre. Det er ikke forhandleligt — det er matematik.«

En fan bagerst i køen råbte noget om, at hun gerne ville sidde i bus 1. JAKE kiggede ikke op fra sin clipboard.`,
        questionTemplate: `{n1} fans fordeles ligeligt på {n2} busser. Hvor mange fans pr. bus?`,
        successMsgTemplate: `{answer} pr. bus! JAKE nikker. Det er det eneste nik han giver hele aftenen.`
      },
      {
        title: 'Merchandise-Mysteriet',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Stray Kids-butikken lugtede af nyt plastik og noget der sandsynligvis var begejstring.

{n1} merchandise-tasker hang på skinnen langs væggen. MINA stod med korslagte arme og kiggede på dem med en blanding af stolthed og bekymring — for hun var ved at give {frac} af dem væk til fans, der havde stået udenfor parkeringspladsen og hørt musikken gennem betonvæggene.

»De var der alligevel,« sagde MINA. »Det tæller.«`,
        questionTemplate: `{n1} tasker i alt. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} tasker! Et sted udenfor parkeringspladsen venter nogen, der snart får en overraskelse.`
      },
      {
        title: 'Beatmasteren',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `SOL sov ikke. Det var ikke en beslutning — det var bare hvad der skete, når musikken ikke ville lade ham være.

Han brugte {f1} af natten på at mixe bassen, indtil den sad præcist der, hvor mavens bund er. Derefter {f2} af natten på vokalerne — YUNA's stemme, lagvist over sig selv, som om der var fire af hende i rummet på én gang.

Klokken 6.03 om morgenen løftede han headphonesene og kiggede på det mørke studie. »Okay,« sagde han til ingen. Det var nok.`,
        questionTemplate: `SOL brugte {f1} på bas og {f2} på vokaler. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af natten! Showet har sit beat nu. SOL falder i søvn med et smil.`
      },
      {
        title: 'Scenen Måles Op',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Klokken er 2 om natten, og PARK måler scenen for tredje gang. Det er ikke fordi han er usikker. Det er fordi lysslangen koster 340 kr. per meter, og der er ingen grund til at bestille et eneste meter for meget — eller for lidt.

Scenen er {n1} meter lang og {n2} meter bred. Hele kanten skal lyse. Hvert hjørne. Hvert millimeter.

»Hele vejen rundt,« siger PARK ud i det tomme mørke. Scenen er tavs og ventende.`,
        questionTemplate: `Scenen er {n1} m lang og {n2} m bred. Hvad er dens omkreds?`,
        successMsgTemplate: `{answer} meter! PARK ringer til leverandøren. Det er midt om natten. Det er fint.`
      },
      {
        title: 'Gulvets Glow',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Det lysende gulvtæppe kom i en trækasse, der vejede som en hemmelighed.

Stray Kids-scenen: {n1} meter lang, {n2} meter bred. Tæppet skal dække hele scenefladen — og når lyset rammer det rigtigt, ser det ud som om danserne flyver hen over det.

»Jeg har brug for arealet,« sagde teknikeren SEON. »Ikke en cirka-mening. Arealet.«`,
        questionTemplate: `Tæppet er {n1} m langt og {n2} m bredt. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! Trækassen åbnes. Tæppet rulles ud. Det er endnu smukkere end alle troede.`
      },
      {
        title: 'Billetter og Bonus',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `MIN-JI havde allerede sin jakke på. Hun er aldrig sen — hun er præcis, og der er forskel.

Babymonster-arenaen har {n1} VIP-sektioner med {n2} sæder i hver. Dertil {n3} ståpladser bagerst til pressefotograferne, der altid er der og altid har for mange kameraer.

»Jeg har {n3} sekunder i elevatoren,« sagde MIN-JI. »Giv mig totalen inden dørene lukker.«`,
        questionTemplate: `{n1} sektioner × {n2} sæder + {n3} ståpladser. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} pladser! MIN-JI logger det og træder ind i elevatoren. Dørene lukker.`
      },
      {
        title: 'Den Nat Alle Husker',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Det er den nat, ingen nogensinde glemmer.

Hearts2Hearts afslutter verdensturneen. {frac} af de {n1} fans, der vandt backstage-pas, er mødt op — de andre sendte blomster og undskyldningsbeskeder. De {n2} crew-medlemmer er der alle, også dem der sagde de ville tage fri.

YUNA kigger ud over rummet fra kulissen og er stille et øjeblik. »Hvor mange er vi?« hvisker hun. Det er det vigtigste spørgsmål hun stiller den aften.`,
        questionTemplate: `{frac} af {n1} fans + {n2} crew. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} mennesker backstage! YUNA lukker øjnene et sekund. Derefter går hun ud på scenen.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  GAMING  (KODA · BYTE · PIXEL QUEST)
  // ════════════════════════════════════════════
  gaming: {
    id: 'gaming', name: 'GAMING', icon: '🎮',
    tagline: 'En kode ad gangen — og VORTEX kan stoppes',
    endingTrophy: '🏆', endingTitle: 'KODA Har Vundet',
    endingStory: `VORTEX faldt. Ikke langsomt og dramatisk, som bosserne plejer i film. Bare stille og hurtigt — som et tal, der endelig passer ind i ligningen.

Et øjeblik var der ingenting. Bare KODA og det tomme niveau og en ensom cursor der blinkede.

Derefter sagde BYTE: »PIXEL QUEST er fuldført.« En pause der varede lidt længere end nødvendigt. »Du var den bedste kode, jeg har analyseret.« Det var den eneste gang BYTE sagde noget smukt. KODA gemte det.`,
    chapters: [
      {
        title: 'Den Første Portal',
        idx: 0, lvlData: 'plus',
        storyTemplate: `KODA åbnede spillet klokken 15.42 en torsdag — og ingenting var, som det plejede at være.

Lageret var mørkt og stille. {n1} guld-coins lå i hjørnet og ventede. {n2} coins gemte sig bag en dør, der blinkede gult — den slags dør, man ikke bør ignorere, men heller ikke bør åbne for hurtigt.

»Portal kræver totalsummen,« sagde BYTE. »Ikke de fleste af mønterne. Alle af dem.«`,
        questionTemplate: `{n1} coins i lageret + {n2} bag den blinkende dør. Hvad er totalen?`,
        successMsgTemplate: `{answer} coins! Portalen blinker grønt. BYTE siger: 'Godt.' Det er første gang.`
      },
      {
        title: 'Shield-Krisen',
        idx: 1, lvlData: 'minus',
        storyTemplate: `{n1} shield-enheder. Det lød som meget. Det lød som nok.

Det er den slags ting, man tænker, inden man møder DRONESWARM-7. Angrebet tog {n2} enheder på under seks sekunder — BYTE tjekkede det tre gange bagefter. Shield-måleren blinkede rødt og lød som noget, der virkelig mente det.

»Niveau?« spurgte BYTE. Stille. Roligt. Som om det rigtige tal kunne ændre situationen.`,
        questionTemplate: `KODA startede med {n1} shield. Angrebet tog {n2}. Hvad er shield-niveauet nu?`,
        successMsgTemplate: `Shield-niveau {answer}! Nødporten holder. BYTEs stemme lyder en smule lettet — selvom BYTE aldrig indrømmer det.`
      },
      {
        title: 'Boss-Arméen',
        idx: 2, lvlData: 'gange',
        storyTemplate: `GLITCHZOR sendte bølger ligesom vejret sender regn — vilkårligt, upersonligt, og meget af det ad gangen.

{n1} bølger. {n2} fjender i hver. BYTE begyndte at sige: »Det svarer til—« og stoppede bevidst midt i sætningen. BYTE ville gerne have, at KODA selv sagde det. Det er den slags AI, BYTE er.

KODA tog et dybt åndedrag. Det er ikke muligt i et spil. Kroppen glemmer det sommetider.`,
        questionTemplate: `{n1} bølger med {n2} fjender i hver. Hvad er det samlede antal fjender?`,
        successMsgTemplate: `{answer} fjender! KODA hæver skjoldet. Strategien kan laves nu.`
      },
      {
        title: 'Loot-Fordelingen',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} gems. Det lyder simpelt — men det er ikke simpelt, når man er {n2} spillere, der alle kiggede på kisten på præcis samme tid.

Gems er ikke bare valuta i PIXEL QUEST. De er bevis på, at man var der og overlevede. Den digitale kontrakt, paragraf 7: »Alle gems fordeles ligeligt.« Det er lov. Det er retfærdighed.

KODA tog den første.`,
        questionTemplate: `{n1} gems til {n2} spillere. Hvad får hver spiller?`,
        successMsgTemplate: `{answer} gems til alle! Et lysglimt fra kisten som et slags tak.`
      },
      {
        title: 'Magiens Kilde',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Biblioteket var fuldt af formularer og støv, der ikke rigtig var støv. BYTE kaldte det »pixel-partikler.« KODA sagde det lignede støv.

{n1} formularer. De fleste var grå, lukkede, uvigtige. Men {frac} af dem var aktive — oplyste, vibrerende, som om de kendte en hemmelighed, de gerne ville dele. De indeholdt koden til udgangen.

»Aktive formularer er nøglen,« sagde BYTE. Uret i hjørnet tikkede. Nu lød det anderledes.`,
        questionTemplate: `Hvad er {frac} af {n1} formularer?`,
        successMsgTemplate: `{answer} aktive formularer! En af dem åbner sig. Koden viser sig.`
      },
      {
        title: 'Energi-Måleren',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Energimåleren sad midt i skærmen og nægtede at blive ignoreret.

{f1} brugt på løb. {f2} på angreb. En lille advarselsstribe blinkede: »Læg mig sammen. Ellers stopper jeg med at oplade dig.« Det var meget direkte for en energimåler.

»Den er ment alvorligt,« sagde BYTE.`,
        questionTemplate: `{f1} på løb + {f2} på angreb. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer}! Opladeren starter med et hum. KODA kan trække vejret igen.`
      },
      {
        title: 'Platformens Grænse',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Platformen var {n1} blokke lang og {n2} blokke bred — og KODA elskede den. Det var det første sted i PIXEL QUEST, der føltes som et hjem.

Derefter kom fjenderne langs kanterne. Kravlende, rolige, som om de havde al tid i verden.

»En mur,« sagde BYTE. »Hele vejen rundt. Vi behøver det samlede antal blokke.«`,
        questionTemplate: `Platformen er {n1} blokke lang og {n2} bred. Hvad er dens omkreds?`,
        successMsgTemplate: `{answer} blokke! Muren rejser sig. Platformen holder.`
      },
      {
        title: 'Basens Fundament',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Diamant-blokke var det smukkeste i hele PIXEL QUEST. Det var KODAs mening, og BYTE var enig — selvom BYTE sagde det var »en vurdering baseret på visuel data.«

Gulvet til den nye base: {n1} blokke langt, {n2} blokke bredt. KODA stod med sin tablet og vidste: dette gulv er alt. Hvis det er forkert, er basen forkert.

»Arealet,« sagde BYTE stille. »For en sikkerheds skyld.«`,
        questionTemplate: `Gulvet er {n1} blokke langt og {n2} bredt. Hvad er arealet?`,
        successMsgTemplate: `{answer} blokke! Fundamentet lægges. BYTE siger: 'Perfekt.' Det er første gang BYTE siger det.`
      },
      {
        title: 'Experience Points',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `{n1} quests på én dag. Det var ikke planen — men KODA stoppede ikke, fordi det hvert gang føltes som: bare én mere.

Hvert quest gav {n2} XP. Og øverst på skærmen i lille tekst: +{n3} bonus-XP for perfekt gennemførelse. BYTE sagde det med en stemme, der lød en smule stolt.

KODA svarede ikke. Men noget i brystet løftede sig lidt.`,
        questionTemplate: `{n1} quests × {n2} XP + {n3} bonus. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} XP! En dungeon-dør åbner sig, som ingen har set åbne sig før.`
      },
      {
        title: 'The Final Boss',
        idx: 9, lvlData: 'finale',
        storyTemplate: `VORTEX var bare... der. Det behøvede ikke sige noget. Det var stort nok.

»Ét angreb,« sagde BYTE — stille, som altid, men med noget i stemmen denne gang. »Præcis {frac} af dine {n1} baseskadepunkter, plus {n2} bonuspoint fra de power-ups du gemte.« En kort pause. »Gem dem ikke denne gang.«

KODA kiggede på VORTEX. Løftede våbnet.`,
        questionTemplate: `{frac} af {n1} skadepunkter + {n2} bonuspoint. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer}! Et lysglimt. Et brag. VORTEX falder. Og BYTE siger ingenting — for første gang.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  FODBOLD  (FCK · MIKKEL · LUCAS · DITTE)
  // ════════════════════════════════════════════
  football: {
    id: 'football', name: 'FODBOLD', icon: '⚽',
    tagline: 'Stadion, stille øjeblikke og det afgørende spark',
    endingTrophy: '🥇', endingTitle: 'FCK Vinder Finalen',
    endingStory: `LUCAS løb mod bolden. Alt andet holdt op med at eksistere — tribunen, lyden, vejret, og alle de øjeblikke der havde ført hertil.

Bolden gik i nettet med en lyd, som ingen hørte, fordi alle skreg.

Bagefter satte MIKKEL sig alene på det tomme stadion og kiggede ud på den grønne bane en lang tid. Til sidst sagde han stille: »Det var godt regnet.« DITTE hørte det. Hun sagde det videre.`,
    chapters: [
      {
        title: 'Stadionets Brus',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Det var en af de dage, hvor luften på stadion lugter af noget der er ved at ske.

{n1} fans i den nordlige tribune med røde tørklæder. {n2} fans i den sydlige med hvide bannere og den slags stilhed, der kun opstår, når man venter på noget man virkelig vil se.

Kaptajn LUCAS kiggede ud fra omklædningsrummet. Træner MIKKEL sagde: »Man kender sine fans. Altid. Det er det første.«`,
        questionTemplate: `{n1} nordfans og {n2} sydfans. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} fans! MIKKEL skriver det ned med et smil. Det er det eneste smil han giver inden kamp.`
      },
      {
        title: 'De Manglende Billetter',
        idx: 1, lvlData: 'minus',
        storyTemplate: `{n1} billetter. Det lød som rigeligt — men billetter er en af de ting, der har det med at forsvinde stille og roligt, inden man opdager det.

{n2} var allerede gået til pressen og sponsorerne og folk, der kendte folk. Salgschef SOFIA stod ved lugen og kiggede på den lange kø udenfor — en kø der ikke vidste, den måske ikke kom ind.

»Hurtigt,« sagde hun. »Hvad har vi faktisk tilbage?«`,
        questionTemplate: `{n1} billetter minus {n2} brugte. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} billetter! SOFIA åbner lugen. Køen begynder at bevæge sig.`
      },
      {
        title: 'Træningsturen',
        idx: 2, lvlData: 'gange',
        storyTemplate: `MIKKEL tegnede cirkler på whiteboardet. Store cirkler, der hang i luften som løfter.

»{n1} spillere,« sagde han. »{n2} ekstra sessioner til hver, inden vi er klar. Det er det, der er forskel på at tabe og vinde på mandag.«

Assistent DITTE holdt blyanten klar og ventede. MIKKEL er god til at vente. DITTE er god til at skrive.`,
        questionTemplate: `{n1} spillere skal have {n2} sessioner hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} sessioner! DITTE booker banerne. MIKKEL tegner en cirkel mere.`
      },
      {
        title: 'Mål-Statistikken',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} mål på tværs af de seneste kampe. MIKKEL ville fordele dem ligeligt på {n2} hold i statistikbogen — for at se, hvem der egentlig scorede, og hvem der bare stod tæt på.

»Kun med præcise tal kan man kende sig selv,« sagde han. Det er den slags sætning, man ikke kan argumentere imod, og som MIKKEL siger mindst én gang om ugen.`,
        questionTemplate: `{n1} mål fordeles ligeligt på {n2} hold. Hvad er mål pr. hold?`,
        successMsgTemplate: `{answer} mål per hold! Statistikken er ren. MIKKEL er tilfreds.`
      },
      {
        title: 'Tacklernes Hemmelighed',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Analysecoach TORBEN har set optagelserne tre gange. Ikke fordi han er usikker — men fordi nogle ting fortjener at blive set tre gange.

{n1} tackles fra de seneste kampe. {frac} af dem var fuldstændigt perfekte: timing, vinkel, og den sjældne evne til at tage bolden uden at ramme manden.

»Kun de perfekte tackles bygger vi strategien på,« sagde TORBEN. »Og jeg vil vide det nøjagtige antal.«`,
        questionTemplate: `{frac} af {n1} tackles var perfekte. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} perfekte tackles! TORBEN skriver dem ind i taktikbogen med to streger under.`
      },
      {
        title: 'Kamptiden',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `GPS-uret på FREJs arm registrerer alt: skridt, fart, position — og de {f1} af kampen han brugte foran mål i angrebsposition, klar til at modtage.

Og de {f2} han brugte midt på banen, lavt og roligt, som en der ved, at kampe afgøres i de øjeblikke ingen kigger.

TORBEN lagde brikkerne sammen. »Hvad er hans samlede aktive andel?«`,
        questionTemplate: `{f1} i angreb og {f2} på midtbanen. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af kampen aktiv! TORBEN nikker. »Det er ham vi bygger finalen på.«`
      },
      {
        title: 'Målmandens Ritual',
        idx: 6, lvlData: 'omk',
        storyTemplate: `OSCAR opvarmer altid på samme måde: én omgang rundt om straffesparksfeltet. Hverken mere eller mindre. Det er ikke overtro, siger han. Det er matematik.

Feltet er {n1} meter langt og {n2} meter bredt. OSCAR stod i hjørnet og kiggede ud over græsset. Beregnede distancen. Trak vejret. Løb.`,
        questionTemplate: `Feltet er {n1} m langt og {n2} m bredt. Hvad er feltets omkreds?`,
        successMsgTemplate: `{answer} meter! OSCAR løber den. Klokken 14.37. Han er klar.`
      },
      {
        title: 'Den Nye Træningsbane',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Kommunens skema lå på direktør HANSENs bord og ventede. Det er en af de papirer, der ser kedelig ud udefra — men som betyder, at FCK får lov at bygge noget nyt.

Den nye bane: {n1} meter lang, {n2} meter bred. HANSEN skulle skrive arealet ind i rubrikken, inden ansøgningen kunne sendes.

Han holdt pennen og ventede på tallet.`,
        questionTemplate: `Banen er {n1} m lang og {n2} m bred. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! HANSEN udfylder rubrikken. FCK får sin bane.`
      },
      {
        title: 'Sæsonens Topscorer',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `LUCAS scorede mål ligesom andre spiser morgenmad — naturligt, og gerne tidligt.

{n1} kampe i første halvdel af sæsonen, {n2} mål i gennemsnit per kamp. Plus {n3} straffesparksmål sat ind med den slags ro, der gør tilskuerne tavse — ikke fordi de er kede af det, men fordi de ikke kan tro det.

Journalisten ville have totalen. Nu.`,
        questionTemplate: `{n1} kampe × {n2} mål pr. kamp + {n3} straffesparksmål. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} mål! En historisk sæson. Journalisten glemmer sin deadline.`
      },
      {
        title: 'Straffesparkskonkurrencen',
        idx: 9, lvlData: 'finale',
        storyTemplate: `2-2 efter forlænget tid. Straffespark.

Den slags stilling, der siger: intet er afgjort. Alt er stadig muligt. Det er det bedste og det værste på samme tid.

{frac} af FCKs {n1} truppe-spillere er aktive og klar. De {n2} ungdomsspillere er rejst med og venter i uniform. MIKKEL kiggede på sin liste. »Hvem kan jeg vælge imellem?«`,
        questionTemplate: `{frac} af {n1} spillere er klar + {n2} ungdomsspillere. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} mulige straffesparkere! LUCAS træder frem. Han scorer. FCK vinder!`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  RONALDO  (Cristiano · JORGE · RAMOS)
  // ════════════════════════════════════════════
  ronaldo: {
    id: 'ronaldo', name: 'RONALDO', icon: '⚽',
    tagline: 'Legenden skrives ét mål ad gangen',
    endingTrophy: '🏅', endingTitle: 'Legenden Er Skrevet',
    endingStory: `Der er rekorder, der brydes med et jubel, fotograferne og champagnen. Og der er rekorder, der brydes stille — mens man løber alene på en halvtom træningsbane klokken seks om morgenen, og man ved det, men ingen andre gør endnu.

Cristiano løftede trofæet. Blitzene eksploderede. JORGE nikkede med lukkede øjne, som en der vidste det hele vejen.

Hvert tal i denne fortælling er rigtigt. Hvert mål er sandt. Og rekorden tilhører nu jer begge.`,
    chapters: [
      {
        title: 'Morgenens Første Mål',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Cristiano er på banen klokken 6.15. Det er ikke fordi nogen bad ham om det. Det er fordi det er det eneste tidspunkt, der er stille nok til at arbejde.

I gårsdagens session sparkede han {n1} mål i den venstre halvdel og {n2} mål i den højre. Hele banen. Systematisk. Præcist.

Træner RAMOS stod og noterede alt. Han vil vide totalen, inden Cristiano siger et eneste ord.`,
        questionTemplate: `{n1} mål i venstre og {n2} i højre halvdel. Hvor mange mål i alt?`,
        successMsgTemplate: `{answer} mål! Cristiano smiler. En personlig rekord — igen.`
      },
      {
        title: 'Programmet',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Ugens træningsprogram har {n1} tekniske øvelser. Hvert eneste en er designet til at gøre én ting lidt bedre end i går.

{n2} er allerede gennemført. Fysioterapeut JORGE sidder med sin notesbog og kigger ud på banen, hvor Cristiano stadig løber. Ikke fordi han skal. Bare fordi han er den slags.

»Hvad er der tilbage inden hviledag?«`,
        questionTemplate: `{n1} øvelser. {n2} er gennemført. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} øvelser! JORGE justerer skemaet. Cristiano løber videre.`
      },
      {
        title: 'Boldkontrolsessionen',
        idx: 2, lvlData: 'gange',
        storyTemplate: `RAMOS havde aldrig mødt nogen, der kunne gentage det samme spark {n2} gange og have det bedre for sig selv til sidst end til at begynde med.

Cristiano gennemfører {n1} intensive sessioner. {n2} boldkontakter i hver — perfekte, kontrollerede, som om bolden er en del af kroppen.

»Det samlede antal til statistikbogen,« sagde RAMOS. »For eftertiden.«`,
        questionTemplate: `{n1} sessioner med {n2} boldkontakter i hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} boldkontakter! RAMOS skriver det ned og siger: »Det er nok til en legende.«`
      },
      {
        title: 'Trofæ-Transporten',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} trofæer og pokaler skal fra museumsdepot til udstilling. De vejede mere end PEDRO havde forventet — ikke fordi de er tunge, men fordi de er mange.

{n2} sikrede transportkasser stod klar. PEDRO var den slags, der ikke åbner en kasse, før han ved, præcis hvad der skal i den.

»Præcis det samme i hver,« sagde han. »Ingen favoritter.«`,
        questionTemplate: `{n1} trofæer fordeles ligeligt i {n2} kasser. Hvor mange pr. kasse?`,
        successMsgTemplate: `{answer} trofæer per kasse! PEDRO pakker dem omhyggeligt i bomuld.`
      },
      {
        title: 'Headings fra Hjørnespark',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `»Det er ikke held,« sagde Cristiano til RAMOS en aften. »Det er timing. Det er matematik.«

Han havde scoret {n1} mål den sæson. {frac} af dem var headings fra hjørnespark — den teknik, han havde øvet i tusindvis af timer, den han var mest stolt af.

RAMOS ville vide præcist, hvad det tal var.`,
        questionTemplate: `Cristiano scorede {n1} mål. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} heading-mål! »Timing og matematik,« sagde Cristiano. Han havde ret.`
      },
      {
        title: 'To Fødder',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Analytikerne havde studeret hvert eneste af Cristianos mål. Igen og igen, fra alle vinkler.

{f1} af dem scoret med venstrefoden. {f2} med højrefoden. RAMOS kiggede på tallene og sagde ingenting i lang tid.

Til sidst sagde han: »Han er komplet.« Det er det største ros han giver. Det er det eneste ros han giver.`,
        questionTemplate: `{f1} venstrefodsm + {f2} højrefodsm. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af målene! »Komplet,« gentog RAMOS. Én gang er nok.`
      },
      {
        title: 'Den Private Bane',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Banen bag huset er {n1} meter lang og {n2} meter bred. Det er der, Cristiano øver sig, når ingen kigger — og ingen kigger aldrig, for det er privat.

Men hegnet skal op. Hele vejen rundt. Leverandøren vil vide den samlede længde, inden han sender et tilbud.

»Hele vejen rundt,« sagde Cristiano. »Intet hul.«`,
        questionTemplate: `Banen er {n1} m lang og {n2} m bred. Hvad er dens omkreds?`,
        successMsgTemplate: `{answer} meter hegn! Banen er afskærmet. Nu er den kun hans.`
      },
      {
        title: 'Kunstgræsset',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Kunstgræsleverandøren sælger kun pr. kvadratmeter. Det er det eneste rigtige, sagde han — præcision er alt.

Banen: {n1} meter lang, {n2} meter bred. JORGE ventede på svaret, inden han ringede og bestilte. Det er ikke noget, man gætter på.`,
        questionTemplate: `Tæppet er {n1} m langt og {n2} m bredt. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! Tæppet bestilles. Leveres næste morgen klokken 6.`
      },
      {
        title: 'Champions League-Tallene',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `UEFA-journalisten havde en liste med rekorder. De fleste linjer var udfyldte. Men den øverste linje — den med Cristianos samlede Champions League-mål — stod tom.

{n1} sæsoner, {n2} mål i gennemsnit per sæson. Plus {n3} ekstra mål fra kvalifikationsrunder, som folk glemmer at tælle med.

»Dem tæller vi med,« sagde journalisten. »Alle mål tæller.«`,
        questionTemplate: `{n1} sæsoner × {n2} mål + {n3} kvalifikationsmål. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} Champions League-mål! Journalisten skriver det ind. Rekorden er officiel.`
      },
      {
        title: 'Den Afgørende Finale',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Det er den finale, alt har ledt op til.

{frac} af de {n1} udvalgte spillere er klar og opvarmet. De {n2} reserver på sidelinjen er parate — stille, fokuserede, klar til at komme ind, hvis de bliver kaldt.

RAMOS kiggede på Cristiano. Cristiano kiggede på banen. »Hvad er vores samlede styrke?« spurgte RAMOS.`,
        questionTemplate: `{frac} af {n1} spillere klar + {n2} reserver. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} spillere klar! Cristiano træder frem. Det siger sig selv, hvad der sker.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  BRAWL STARS  (Leon · Shelly · Spike · Mortis · Crow)
  // ════════════════════════════════════════════
  brawlstars: {
    id: 'brawlstars', name: 'BRAWL STARS', icon: '🎮',
    tagline: 'Gems, galskab og det vildeste hold i verden',
    endingTrophy: '🏆', endingTitle: 'Verdensmestre!',
    endingStory: `Leon skreg: »JEG SAGDE DET!« Ingen vidste præcis hvad han sagde — men alle vidste, han havde sagt det.

Shelly grinte og græd på samme tid, fordi man godt kan begge dele. Spike talte sine resterende power-ups, fordi han ikke vidste hvad han ellers skulle gøre med sine hænder. Mortis holdt en tale, som ingen lyttede til, men som alle nok trængte til.

Og Crow — Crow, der aldrig viste noget — stod midt i arenaen med konfetti i håret og smilede. Bare ét sekund. Men det var nok.`,
    chapters: [
      {
        title: 'Trofæ-Jagten Begynder',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Leon er den slags, der aldrig fortæller sin score — fordi det er bedre at vise den.

Denne sæson: {n1} trofæer med usynlige bevægelser og perfekt timing. Shelly har {n2} trofæer — vundet med Shotgun, god musik og den slags ro, der er farligst.

Crow sidder på toppen af ranglistetavlen og kiggede ned. »Tilsammen?« sagde han. »Giv mig tallet. Nu.«`,
        questionTemplate: `Leon har {n1} trofæer og Shelly har {n2}. Hvad er totalen?`,
        successMsgTemplate: `{answer} trofæer! Crow nikker. Det er en ny holdrekord.`
      },
      {
        title: "Spikes Gem-Problem",
        idx: 1, lvlData: 'minus',
        storyTemplate: `Spike er præcis. Det er noget, alle ved. Han tæller altid. Han dobbelttjekker altid. Og alligevel stod han i Gem Grab-arenaen og vidste ikke, hvad han havde tilbage.

Han startede med {n1} gems. Brugte {n2} på at opgradere sine kaktusstorme — nødvendige opgraderinger, sagde han. »Nødvendige,« sagde Crow tørt.

»Hvad har du tilbage, Spike?«`,
        questionTemplate: `Spike startede med {n1} gems og brugte {n2}. Hvad er der tilbage?`,
        successMsgTemplate: `{answer} gems! »Det er nok,« sagde Spike. Crow sagde ingenting. Det betød ja.`
      },
      {
        title: 'Mortis Træner',
        idx: 2, lvlData: 'gange',
        storyTemplate: `»Jeg er allerede klar,« sagde Mortis, da Crow foreslog ekstra træning.

»Du øver dig alligevel,« sagde Crow.

Mortis lavede {n1} træningsrunder med sin spadestok og gennemførte {n2} angreb i hver — det hurtige, drejende mørke-angreb, han bruger år på at perfektionere. Han vil aldrig indrømme, at han faktisk er glad for at træne.`,
        questionTemplate: `{n1} runder med {n2} angreb i hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} angreb! Mortis lander i skyggen. »Ikke dårligt,« siger Crow.`
      },
      {
        title: 'Den Retfærdige Fordeling',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} gems i kisten. Alle fem brawlers kiggede på dem på præcis samme tid. Der var et øjeblik med meget stilhed.

Crow rømme sig. »{n2} brawlers. Ligeligt fordelt. Det er loven.«

»Hvem laver den lov?« spurgte Leon.

»Jeg,« sagde Crow.`,
        questionTemplate: `{n1} gems til {n2} brawlers. Hvad får hver?`,
        successMsgTemplate: `{answer} gems til alle! Leon synes ikke det er nok. Det er det.`
      },
      {
        title: 'Leons Hemmelige Arsenal',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Leon har en Star Drop-kasse, som ingen må røre. Heller ikke Crow. Særligt ikke Crow.

Den gemmer {n1} power-ups. Men {frac} af dem er aktive — resten er låst, grå, og ubrugelige til det kommende Brawl. Leon ville vide præcist, hvad han kunne bruge. Det er det eneste tidspunkt, han var helt seriøs.`,
        questionTemplate: `Hvad er {frac} af {n1} power-ups?`,
        successMsgTemplate: `{answer} aktive power-ups! Leon forsvinder. Bogstaveligt talt.`
      },
      {
        title: 'Shellys Kampdata',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Efter kampen henter Crow altid statistikken. Det er hans hobby, og han ved godt, det er underligt.

Shellys seneste kamp: {f1} af kamptiden på Shotgun-angreb — direkte, præcise, lidt overdrevne. {f2} på sin Super, som hun altid bruger på det bedst mulige tidspunkt.

»Den samlede aktive andel,« sagde Crow og åbnede sin notesbog.`,
        questionTemplate: `{f1} på Shotgun og {f2} på Super. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af kampen! »Uundværlig,« sagde Crow. Shelly hørte det. Sagde det ikke videre.`
      },
      {
        title: 'Kaktusforsvaret',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Spike var i gang, inden nogen bad ham om det. Det er Spikes problem — eller styrke, afhænger af hvem man spørger.

Den nye arena: {n1} meter lang, {n2} meter bred. Hele kanten skal have kaktusser — en grøn, pigget forsvarslinje mod alt, der prøver at komme ind uden lov.

»Hvor mange meter planter du?« spurgte Crow.

»Alle af dem,« sagde Spike.`,
        questionTemplate: `Arenaen er {n1} m lang og {n2} m bred. Hvad er dens omkreds?`,
        successMsgTemplate: `{answer} meter kaktus! Arenaen er beskyttet. Spike er tilfreds.`
      },
      {
        title: 'Den Nye Arena',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Holdet skal bygge en ny arena. Crow har skitsen. Leon har meningen om skitsen. Mortis har en mening om Leons mening. Shelly siger ingenting og er den eneste der faktisk laver noget.

Gulvarealet: {n1} meter langt, {n2} meter bredt. Leverandøren sælger kun pr. kvadratmeter — og vil have det nøjagtige tal inden næste morgen.`,
        questionTemplate: `Gulvet er {n1} m langt og {n2} m bredt. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! Stenene bestilles. Shelly lægger den første.`
      },
      {
        title: 'Finalearenaen',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Verdensfinalen. Arenaen har {n1} tilskuerafdelinger med {n2} sæder i hver. Plus {n3} ståpladser til dem, der er for ophidsede til at sidde — og det er de fleste.

Arrangøren frygter mest af alt ét: at have solgt én billet for mange. Crow talte. Langsomt. Præcist.`,
        questionTemplate: `{n1} afdelinger × {n2} sæder + {n3} ståpladser. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} pladser! Arenaen er udsolgt. Det var det, Crow håbede på.`
      },
      {
        title: 'Sæsonens Afgørelse',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Verdensfinalen starter om ti minutter.

Crow stod alene i gangen bag arenaen og talte. Ikke for nogen. Bare fordi tallene roliggjorde ham, og han var — han ville aldrig indrømme det — nervøs.

{frac} af de {n1} kvalificerede brawlers var mødt op og klar. De {n2} nye, nyligt låste brawlers var der også. »Hvad er vores samlede styrke?« spurgte han sig selv.`,
        questionTemplate: `{frac} af {n1} brawlers klar + {n2} nye. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} brawlers! Crow tog et dybt åndedrag. Gik ind. Vandt.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  ANIME  (Naruto · Goku · Luffy · Sasuke · Kakashi)
  // ════════════════════════════════════════════
  anime: {
    id: 'anime', name: 'ANIME', icon: '🎌',
    tagline: 'Tre legender. Ét mål. Uendelig energi.',
    endingTrophy: '⭐', endingTitle: 'Tre Legender Sejrer',
    endingStory: `»Vi var ikke gode nok,« sagde Naruto.

»Vi var præcis gode nok,« sagde Goku.

»Det er det samme,« sagde Luffy og spiste tre riceballs.

Kakashi stod lidt væk og kiggede på dem. Han sagde ingenting. Det behøvede han ikke. Du løste alle ti koder — fra den første chakra til det afgørende slag. Heltene overlevede, fordi tallene passede. Det er hemmeligheden bag enhver kamp.`,
    chapters: [
      {
        title: 'Tre Helte Mødes',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Naruto ankom først. Goku kom flyvende bagfra og landede lidt for hårdt. Luffy faldt ned fra et træ og sagde »Godt møde!« selvom der ikke var aftalt noget møde.

Naruto havde {n1} chakra-enheder fra en hel dags Shadow Clone-træning. Goku havde {n2} ki-enheder fra gravitationskammeret. Den hemmelige port åbnede kun for dem begge tilsammen.

»Vi behøver hinanden,« sagde Kakashi fra ingen steder. »Og vi behøver det samlede tal.«`,
        questionTemplate: `Naruto har {n1} og Goku har {n2} energienheder. Hvad er totalen?`,
        successMsgTemplate: `{answer} energienheder! Porten åbner sig med et brag. Luffy trådte igennem allerede.`
      },
      {
        title: 'Luffys Udholdenhed',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Luffy var ikke den type, der tæller. Det var Zoros problem. Det var Sanji's problem. Det var alle andres problem.

Men Rayleigh havde lavet et program: {n1} kamprunder. »Dem laver du alle,« sagde han. »Eller du er ikke klar.«

{n2} runder var gennemført. Luffy kiggede på tallet og regnede hurtigt — for én gangs skyld.`,
        questionTemplate: `{n1} kamprunder. {n2} er gennemført. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} runder! Luffy ruller ærmerne op. »Det er intet!« siger han. Det er ikke intet.`
      },
      {
        title: 'Sasukes Repetitioner',
        idx: 2, lvlData: 'gange',
        storyTemplate: `Sasuke siger ikke meget. Det er en kendsgerning.

Men han øver {n1} forskellige jutsus, og for at kroppen skal huske dem præcist — ikke godt nok, præcist — repeterer han hver jutsu {n2} gange i træk. Uden pause. Uden klager.

Kakashi kiggede på ham fra distance og skrev det ned i sin journal. Ikke fordi han behøvede det. Fordi det fortjente at blive noteret.`,
        questionTemplate: `{n1} jutsus, {n2} gentagelser hver. Hvad er det samlede antal?`,
        successMsgTemplate: `{answer} repetitioner! Sasukes krop husker nu hvert eneste skridt.`
      },
      {
        title: 'Ninja-Akademiet',
        idx: 3, lvlData: 'div',
        storyTemplate: `Iruka-sensei er den slags lærer, der aldrig giver op på nogen. Det er både hans stærkeste side og grunden til, at han sjældent sover godt.

{n1} ninja-teknikker skal undervises denne måned. {n2} hold. Iruka ville give dem præcis det samme — ikke mere til de gode, ikke mindre til dem der kæmper.

»Fair er fair,« sagde han. »Det er det første en ninja lærer. Det er det vigtigste.«`,
        questionTemplate: `{n1} teknikker fordeles ligeligt på {n2} hold. Hvad er antal pr. hold?`,
        successMsgTemplate: `{answer} teknikker pr. hold! Iruka nikker. Nu kan han sove.`
      },
      {
        title: 'Gokus Transformation',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Goku havde {n1} ki-enheder. Det lød som mange. Det er mange.

Men Super Saiyan Blue kræver {frac} af det hele — præcist den mængde, kroppen næsten ikke kan holde til. Resten gemmes til Ultra Instinct: den form ingen planlægger at bruge, men som indimellem er den eneste vej frem.

Goku lukkede øjnene. »Regn det ud for mig,« sagde han til Gohan.`,
        questionTemplate: `Goku har {n1} ki-enheder. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} ki-enheder! Lyset eksploderer. Super Saiyan Blue er aktiveret!`
      },
      {
        title: 'Kampens Mønster',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Kakashi analyserer altid. Det er det, der adskiller en god ninja fra en overlevelsesstrateg.

Narutos seneste kamp: {f1} af kampen brugt på Shadow Clone Jutsu — mange kopier, meget kaos, præcis som Naruto. {f2} på Rasengan — hurtigt, præcist, som Naruto aldrig ser ud til at turde, men altid gør.

»Den samlede aktive andel,« sagde Kakashi. »Det fortæller mig noget vigtigt.«`,
        questionTemplate: `{f1} på Shadow Clone og {f2} på Rasengan. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af kampen! »Han giver alt,« sagde Kakashi. Det var alt, der behøvede siges.`
      },
      {
        title: 'Konohas Grænse',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Kakashi patruljerer Konohas ydre træningszone: {n1} meter lang, {n2} meter bred. Én runde rundt hvert skift — hverken mere eller mindre, for det handler ikke om distance, men om disciplin.

Han beregnede distancen alene, stående i hjørnet, med det sædvanlige rolige blik. Derefter løb han.`,
        questionTemplate: `Zonen er {n1} m lang og {n2} m bred. Hvad er dens omkreds?`,
        successMsgTemplate: `{answer} meter! Kakashi er tilbage om syv minutter. Præcis.`
      },
      {
        title: 'Det Nye Akademi',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Hokage underskriver ikke noget uden de nøjagtige tal. Det ved Iruka. Det har han vidst i ti år.

Det nye træningsområde: {n1} meter langt, {n2} meter bredt. Iruka skulle indberette arealet, inden ansøgningen om godkendelse kunne sendes.

»Arealet,« sagde han til sig selv og tog sin pen frem.`,
        questionTemplate: `Området er {n1} m langt og {n2} m bredt. Hvad er arealet i m²?`,
        successMsgTemplate: `{answer} kvadratmeter! Hokage underskriver. Det nye akademi kan bygges.`
      },
      {
        title: 'Chunin-Eksamen',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Chunin-eksamenen er årets vigtigste begivenhed. Naruto kom for sent. Luffy kom til den forkerte by. Goku kom på det rigtige tidspunkt men sad på den forkerte bænk.

{n1} hold med {n2} deltagere i hvert. Plus {n3} jonin-mestre inviteret som specialdommere — og de er alle ankommet til tiden, fordi dommere gør det.

Arrangøren havde brug for totalen.`,
        questionTemplate: `{n1} hold × {n2} deltagere + {n3} mestre. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} i alt! Turneringen kan begynde. Naruto er stadig forsinket.`
      },
      {
        title: 'Det Store Opgør',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Fjenden var ikke set i hundrede år. Det er normalt tegn på, at man ikke bør møde den.

{frac} af de {n1} udvalgte ninjaer var ankommet og klar. De {n2} jonin-mestre var der alle — for de er den slags, der altid er der, selvom situationen er håbløs.

Kakashi talte op stille. »Vi skal vide vores samlede styrke,« sagde han. »Inden vi træffer en beslutning.«`,
        questionTemplate: `{frac} af {n1} ninjaer + {n2} mestre. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} kæmpere! Kakashi nikkede. »Nok,« sagde han. Det er det bedste han siger.`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  JJK — JUJUTSU KAISEN  (Yuji · Megumi · Nobara · Gojo)
  // ════════════════════════════════════════════
  jjk: {
    id: 'jjk', name: 'JJK', icon: '🧙',
    tagline: 'Cursed spirits og sorcerer-kamp',
    endingTrophy: '💜', endingTitle: 'Sukuna Er Besejret',
    endingStory: `Sukuna faldt. Yuji landede blidt på gadebroen. Megumi og Nobara kom løbende. Gojo sagde ingenting — han smilede bare bag sit bind.

Principal YAGA lukkede sin rapport. »Alle cursed spirits eksorciseret. Tokyo er sikkert.«

Du løste alle ti koder og reddede verden. Jujutsu High lever videre. Den næste mission venter allerede.`,
    chapters: [
      {
        title: 'Cursed Energy-Opladning',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Yuji Itadori har samlet {n1} cursed energy-enheder fra intensiv træning. Megumi Fushiguro har {n2} enheder fra Shikigami-besværgelser.

Tilsammen kan de åbne den forseglede dør til det cursed spirit-fyldte område — men de skal kende det samlede antal.`,
        questionTemplate: `Yuji har {n1} og Megumi har {n2} cursed energy. Hvor mange er der i alt?`,
        successMsgTemplate: `{answer} cursed energy! Den forseglede dør vibrerer og åbner.`
      },
      {
        title: 'Nobaras Søm',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Nobara Kugisaki startede eksorcisionen med {n1} cursed nails i sin kasse. Det særligt stærke cursed spirit krævede {n2} søm for at blive bundet.

Megumi vil vide, hvad Nobara har tilbage til resten af missionen.`,
        questionTemplate: `{n1} søm i alt. {n2} blev brugt. Hvor mange er der tilbage?`,
        successMsgTemplate: `{answer} søm tilbage! Nobara kan fortsætte sin jagt.`
      },
      {
        title: 'Gojos Domæne',
        idx: 2, lvlData: 'gange',
        storyTemplate: `Gojo Satoru øver Infinite Void — det domæne der indfanger alt. Han aktiverer det {n1} gange og udvider det med {n2} cursed energy-enheder pr. aktivering.

Nanami vil vide den samlede energi brugt til at beregne det maksimale domæne-potentiale.`,
        questionTemplate: `{n1} aktiveringer med {n2} enheder hver. Hvad er den samlede energi?`,
        successMsgTemplate: `{answer} enheder! Gojos domæne er nu uovervindeligt.`
      },
      {
        title: 'Missionsfordelingen',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} missioner er klar til Tokyo Jujutsu High — alle er cursed spirit-eksorcisioner af varierende farlighed. Principal YAGA fordeler dem ligeligt på {n2} hold sorcerers.

»Ingen hold får flere eller færre end de andre,« siger YAGA bestemt.`,
        questionTemplate: `{n1} missioner fordeles ligeligt på {n2} hold. Hvor mange missioner pr. hold?`,
        successMsgTemplate: `{answer} missioner pr. hold! YAGA godkender fordelingen.`
      },
      {
        title: 'Cursed Technique',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Yuji har akkumuleret {n1} cursed energy. {frac} af det skal bruges til at aktivere Divergent Fist-teknikken — det angreb der vender cursed energy imod cursed spirits.

Resten gemmes til Black Flash.`,
        questionTemplate: `Yuji har {n1} cursed energy. Hvad er {frac} af {n1}?`,
        successMsgTemplate: `{answer} cursed energy! Divergent Fist er aktiveret!`
      },
      {
        title: 'Eksorcismens Tid',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Megumis kampsstatistik fra seneste mission: {f1} af kamptiden brugte han på Shikigami-besværgelser og {f2} på direkte nærkamp.

Nanami analyserer tallene. »Den samlede aktive brøk fortæller os om effektiviteten,« siger han tørt.`,
        questionTemplate: `{f1} på Shikigami og {f2} på nærkamp. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af kamptiden aktiv! Megumi er en effektiv sorcerer.`
      },
      {
        title: 'Cursed Domain',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Det forseglede cursed domain er {n1} meter langt og {n2} meter bredt. Sorcererne skal etablere en barriere rundt om hele området for at forhindre cursed spirits i at flygte.

»Barrieredækning er lig med omkreds,« siger Nanami — uden at kigge op fra sin notesbog.`,
        questionTemplate: `Domænet er {n1} meter langt og {n2} meter bredt. Hvad er barrierens omkreds i meter?`,
        successMsgTemplate: `{answer} meter barriere! Ingen cursed spirits slipper ud.`
      },
      {
        title: 'Jujutsu High-Distriktet',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Det nye sorcerer-distrikt er {n1} meter langt og {n2} meter bredt. Principal YAGA skal indberette det præcise areal til Jujutsu Headquarters inden mødet.

Han er ikke i et godt humør, hvis han møder op uden tallene.`,
        questionTemplate: `Distriktet er {n1} meter langt og {n2} meter bredt. Hvad er arealet i kvadratmeter?`,
        successMsgTemplate: `{answer} kvadratmeter! Headquarters godkender det nye distrikt.`
      },
      {
        title: 'Sorcerer-Oprykning',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Tokyo Jujutsu High har {n1} afdelinger med {n2} sorcerers i hver. Dertil {n3} assistent-sorcerers på prøvetid, der netop har bestået den første eksamen.

YAGA vil vide det samlede antal sorcerers på skolen.`,
        questionTemplate: `{n1} afdelinger med {n2} sorcerers, plus {n3} assistenter. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} sorcerers i alt! Jujutsu High er stærkere end nogensinde.`
      },
      {
        title: 'Den Endelige Kamp',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Sukuna-kampen begynder. {frac} af de {n1} Grade-1 sorcerers er mødt op til det endelige slag. De {n2} nyuddannede sorcerers er også klar bag frontlinjen.

Gojo tæller hurtigt. »Vi har brug for det samlede antal — nu.«`,
        questionTemplate: `{frac} af {n1} Grade-1 sorcerers plus {n2} nyuddannede. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} sorcerers klar! Sukuna møder sin match. Verden er reddet!`
      }
    ]
  },

  // ════════════════════════════════════════════
  //  GEOGRAFI  (Explorer Sofia · ANDERS · CAMILLA)
  // ════════════════════════════════════════════
  geography: {
    id: 'geography', name: 'GEOGRAFI', icon: '🌍',
    tagline: 'Kort, lande og store opdagelser',
    endingTrophy: '🌐', endingTitle: 'Atlassen Er Komplet',
    endingStory: `Sofia lukkede atlassen og kiggede ud over verdenskortet på væggen. Alle landene var der. Alle tallene passede.

Geografilærer ANDERS sagde: »Det er det bedste kort vi nogensinde har lavet.« CAMILLA underskrev den officielle godkendelse.

Du løste alle ti koder — fra den første befolkningsoptælling til den store ekspedition. Verden er kortlagt, og du hjalp.`,
    chapters: [
      {
        title: 'Befolkningsoversigten',
        idx: 0, lvlData: 'plus',
        storyTemplate: `Explorer Sofia studerer to nabolande på sit kort. Det første land har {n1} tusind indbyggere. Det andet har {n2} tusind. For at tegne det rigtige kort skal hun kende det samlede tal.

»Lande kan ikke sammenligne sig uden at kende hinanden,« siger Sofia.`,
        questionTemplate: `{n1} tusind i land ét og {n2} tusind i land to. Hvor mange tusind er der i alt?`,
        successMsgTemplate: `{answer} tusinde indbyggere i alt! Sofia opdaterer sin globus.`
      },
      {
        title: 'Den Lange Rejse',
        idx: 1, lvlData: 'minus',
        storyTemplate: `Fra Sofias startpunkt til det fjerne bjerg er der {n1} kilometer. Hun har allerede tilbagelagt {n2} kilometer ad den bugtede bjergsti.

Kortlæggeren ANDERS vil vide den resterende distance, inden natten falder på.`,
        questionTemplate: `{n1} kilometer i alt. {n2} er tilbagelagt. Hvor mange kilometer er der tilbage?`,
        successMsgTemplate: `{answer} kilometer tilbage! Sofia sætter kursen og fortsætter.`
      },
      {
        title: 'Provinsernes Byer',
        idx: 2, lvlData: 'gange',
        storyTemplate: `Det store land har {n1} provinser. Geografen ANDERS har kortlagt, at hver provins har præcis {n2} byer — store som små.

For at opdatere bykortet vil ANDERS vide det samlede antal byer i landet.`,
        questionTemplate: `{n1} provinser med {n2} byer i hver. Hvad er det samlede antal byer?`,
        successMsgTemplate: `{answer} byer! ANDERS opdaterer kortet med alle navne.`
      },
      {
        title: 'Regionernes Fordeling',
        idx: 3, lvlData: 'div',
        storyTemplate: `{n1} kommuner skal fordeles ligeligt i {n2} regioner. Det er et politisk krav: alle regioner skal have præcis det samme antal kommuner.

Indenrigsminister CAMILLA vil vide det eksakte tal, inden hun underskriver dekretet.`,
        questionTemplate: `{n1} kommuner fordeles ligeligt på {n2} regioner. Hvor mange kommuner pr. region?`,
        successMsgTemplate: `{answer} kommuner pr. region! CAMILLA underskriver dekretet.`
      },
      {
        title: 'Skovenes Andel',
        idx: 4, lvlData: 'frakof',
        storyTemplate: `Landet har {n1} tusind kvadratkilometer areal. {frac} af det er fredet skov — beskyttet for evigt.

Sofia vil beregne skovarealet præcist til sin rapport om biodiversitet.`,
        questionTemplate: `Landet har {n1} tusind km². Hvad er {frac} af {n1} tusind?`,
        successMsgTemplate: `{answer} tusinde kvadratkilometer fredet skov! Sofia markerer det på kortet.`
      },
      {
        title: 'Verdenskortet',
        idx: 5, lvlData: 'frakp',
        storyTemplate: `Sofia studerer fordelingen af Jordens landareal. Europa dækker {f1} og Asien dækker {f2} af det samlede landareal.

»Hvad er de to kontinenters samlede andel?« spørger hun ANDERS.`,
        questionTemplate: `Europa: {f1} og Asien: {f2} af Jordens landareal. Hvad er {f1} + {f2}?`,
        successMsgTemplate: `{answer} af Jordens landareal! Det er en meget stor del af verden.`
      },
      {
        title: 'Landets Grænse',
        idx: 6, lvlData: 'omk',
        storyTemplate: `Det lille land er {n1} kilometer langt og {n2} kilometer bredt. Grænsepatruljens chef vil vide den samlede grænselinje — for at planlægge vagtposterne rigtigt.

»Hvert kilometer grænse skal dækkes,« siger chefen.`,
        questionTemplate: `Landet er {n1} km langt og {n2} km bredt. Hvad er grænselinjen i km?`,
        successMsgTemplate: `{answer} kilometer grænse! Grænsepatruljen kender ruten.`
      },
      {
        title: 'Nationalparkens Areal',
        idx: 7, lvlData: 'areal',
        storyTemplate: `Den nye nationalpark er {n1} kilometer lang og {n2} kilometer bred. Sofia skal beregne det præcise areal til UNESCO's ansøgning om verdensbeskyttelse.

UNESCO godkender ikke uden de nøjagtige tal.`,
        questionTemplate: `Parken er {n1} km lang og {n2} km bred. Hvad er arealet i km²?`,
        successMsgTemplate: `{answer} kvadratkilometer! UNESCO godkender beskyttelsen.`
      },
      {
        title: 'Storbyernes Trafik',
        idx: 8, lvlData: 'blandet',
        storyTemplate: `Landet har {n1} store trafikknudepunkter, og hvert knudepunkt har {n2} buslinjer der forbinder det med omegnen. Dertil kommer {n3} nationale ekspreslinjer der krydser hele landet.

Transportministeren vil vide det samlede antal buslinjer.`,
        questionTemplate: `{n1} knudepunkter med {n2} buslinjer, plus {n3} ekspreslinjer. Hvad er {n1}×{n2}+{n3}?`,
        successMsgTemplate: `{answer} buslinjer i alt! Transportsystemet er komplet.`
      },
      {
        title: 'Den Store Ekspedition',
        idx: 9, lvlData: 'finale',
        storyTemplate: `Den store polarekspedition afgår i morgen. {frac} af de {n1} udvalgte geografer er mødt frem og klar med udstyr. De {n2} assistent-kortlæggere er også parate.

Sofia tæller hoveder. »Det er vigtigt at vide præcis, hvor mange vi er,« siger hun.`,
        questionTemplate: `{frac} af {n1} geografer plus {n2} assistenter. Hvad er {frac}×{n1}+{n2}?`,
        successMsgTemplate: `{answer} ekspeditionsmedlemmer! Den store rejse kan begynde!`
      }
    ]
  }

};

// ── STATE ─────────────────────────────────────

const state = {
  screen: 'home',         // 'home' | 'level-select' | 'chapter' | 'complete'
  theme: null,
  chapter: 0,
  selectedLevel: null,    // 0 | 1 | 2 — global for entire theme session
  answered: false,
  hintOpen: false,
  wrongCount: 0,
  progress: loadProgress()
};

function loadProgress() {
  try {
    const raw = localStorage.getItem('regneparty_progress');
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}

function saveProgress() {
  try { localStorage.setItem('regneparty_progress', JSON.stringify(state.progress)); }
  catch (e) { /* ignore */ }
}

// ── RENDER ────────────────────────────────────

function render() {
  const app = document.getElementById('app');
  document.body.dataset.theme = state.theme || '';

  if (state.screen === 'home') {
    clearDecorations();
    app.innerHTML = renderHome();
  } else if (state.screen === 'level-select') {
    clearDecorations();
    app.innerHTML = renderLevelSelect();
  } else if (state.screen === 'chapter') {
    app.innerHTML = renderChapter();
    addDecorations(state.theme);
    requestAnimationFrame(() => {
      const input = document.getElementById('answer-input');
      if (input && !state.answered) input.focus();
    });
  } else if (state.screen === 'complete') {
    app.innerHTML = renderComplete();
    addDecorations(state.theme);
    setTimeout(triggerConfetti, 400);
  }
}

function renderHome() {
  const bars = Object.values(GAME_DATA).map((theme, idx) => {
    const done = state.progress[theme.id] || 0;
    let progressLabel = '';
    if (done >= 10)    progressLabel = `<span class="theme-bar-progress done">✓ Færdig!</span>`;
    else if (done > 0) progressLabel = `<span class="theme-bar-progress">Kapitel ${done + 1} / 10</span>`;
    else               progressLabel = `<span class="theme-bar-progress">Nyt eventyr</span>`;

    return `
      <button class="theme-bar ${theme.id}" data-action="select-theme" data-payload="${theme.id}" data-n="${idx + 1}" aria-label="Vælg ${theme.name}">
        <span class="theme-bar-icon">${theme.icon}</span>
        <span class="theme-bar-name">${theme.name}</span>
        <span class="theme-bar-tagline">${theme.tagline}</span>
        ${progressLabel}
      </button>`;
  }).join('');

  return `
    <div class="home-screen">
      <div class="home-orbs" aria-hidden="true">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <div class="home-hero">
        <span class="home-eyebrow">4. klasse · matematik · 8 universer</span>
        <h1 class="home-title">
          <span class="line1">4Y's</span>
          <span class="line2">Regnemaskine<span class="beta-badge">BETA</span></span>
        </h1>
        <span class="home-sub">Vælg dit univers — og løs de ti koder</span>
      </div>
      <div class="theme-grid">${bars}</div>
    </div>`;
}

function renderLevelSelect() {
  const theme = GAME_DATA[state.theme];

  const posterWords = (theme.name + ' UNIVERS')
    .split(' ')
    .map(w => `<span class="ch-poster-word">${w}</span>`)
    .join('');

  // Example calculations shown per level (taken from MATH.plus)
  const examples = [
    { stars: '★',   name: 'Nem',    desc: 'Nemmere tal — samme spændende historier. Godt til at komme i gang.', ex: `${MATH.plus[0].vars.n1} + ${MATH.plus[0].vars.n2} = ?`, ghost: '1' },
    { stars: '★★',  name: 'Mellem', desc: 'De originale tal fra historien. Det rigtige udfordringsniveau.', ex: `${MATH.plus[1].vars.n1} + ${MATH.plus[1].vars.n2} = ?`, ghost: '2' },
    { stars: '★★★', name: 'Svær',   desc: 'Store tal og knap brøker. For dem der vil have det hele.', ex: `${MATH.plus[2].vars.n1} + ${MATH.plus[2].vars.n2} = ?`, ghost: '3' }
  ];

  const choices = examples.map((lv, i) => `
    <button class="level-choice" data-action="select-level" data-payload="${i}" data-ghost="${lv.ghost}" aria-label="Vælg niveau ${lv.name}">
      <span class="level-choice-stars">${lv.stars}</span>
      <span class="level-choice-name">${lv.name}</span>
      <span class="level-choice-desc">${lv.desc}</span>
      <span class="level-choice-example">${lv.ex}</span>
    </button>`).join('');

  return `
    <div class="level-select-screen">
      <div class="chapter-topbar">
        <button class="back-btn" data-action="go-home">← Temaer</button>
      </div>
      <div class="ch-poster" aria-hidden="true">${posterWords}</div>
      <div class="level-select-hero">
        <span class="level-select-eyebrow">${theme.icon} ${theme.name} — Vælg dit niveau for alle 10 kapitler</span>
        <h2 class="level-select-title">Hvilket niveau?</h2>
        <p class="level-select-sub">Niveauet gælder for hele eventyret — du kan starte forfra med et andet niveau, når du er færdig.</p>
      </div>
      <div class="level-choice-grid">${choices}</div>
    </div>`;
}

function renderProgressDots(currentIdx) {
  return Array.from({ length: 10 }, (_, i) => {
    let cls = 'dot';
    if (i < currentIdx) cls += ' completed';
    else if (i === currentIdx) cls += ' current';
    return `<div class="${cls}"></div>`;
  }).join('');
}

function renderChapter() {
  const theme    = GAME_DATA[state.theme];
  const ch       = theme.chapters[state.chapter];
  const mathData = MATH[ch.lvlData][state.selectedLevel];
  const isLast   = state.chapter === 9;
  const n        = state.chapter + 1;
  const stars    = ['★', '★★', '★★★'][state.selectedLevel];
  const levelName = ['Nem', 'Mellem', 'Svær'][state.selectedLevel];
  const nextLabel = isLast ? 'Se afslutningen →' : 'Næste kapitel →';

  const story    = applyTemplate(ch.storyTemplate, mathData.vars);
  const question = applyTemplate(ch.questionTemplate, mathData.vars);
  const mathNote = SHARED_MATH_NOTES[ch.idx];
  const hints    = SHARED_HINTS[ch.idx];

  const storyParagraphs = story
    .split('\n\n')
    .filter(p => p.trim())
    .map(p => `<p>${p.trim()}</p>`)
    .join('');

  const posterWords = ch.title
    .split(' ')
    .map(w => `<span class="ch-poster-word">${w}</span>`)
    .join('');

  const hintSteps = hints.map((s, i) => `
    <div class="hint-step">
      <span class="hint-num">${i + 1}</span>
      <span>${s}</span>
    </div>`).join('');

  return `
    <div class="chapter-screen">

      <!-- Topbar — spans both columns -->
      <div class="chapter-topbar">
        <button class="back-btn" data-action="go-home">← Temaer</button>
        <span class="ch-meta">KAPITEL ${n} AF 10 &nbsp;·&nbsp; ${theme.icon} ${theme.name} &nbsp;·&nbsp; ${stars} ${levelName}</span>
        <div class="progress-dots">${renderProgressDots(state.chapter)}</div>
      </div>

      <!-- Ghost poster words (fixed backdrop) -->
      <div class="ch-poster" aria-hidden="true">${posterWords}</div>

      <!-- LEFT: story -->
      <div class="ch-left">
        <h2 class="ch-title">${ch.title}</h2>
        <div class="story-text">${storyParagraphs}</div>
      </div>

      <!-- RIGHT: question + answer -->
      <div class="ch-right">
        <p class="question-text">${question}</p>
        <div class="math-note">
          <span class="math-note-label">Tænkeidé</span>
          <span class="math-note-body">${mathNote}</span>
        </div>
        <form class="answer-form" id="answer-form" novalidate>
          <input
            type="text"
            id="answer-input"
            class="answer-input"
            placeholder="Skriv dit svar…"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            inputmode="decimal"
            ${state.answered ? 'readonly' : ''}
          />
          <button type="submit" class="submit-btn" ${state.answered ? 'disabled' : ''}>Tjek svar</button>
        </form>
        <div class="feedback" id="feedback"></div>
        <div class="hint-section ${state.hintOpen ? 'open' : ''}" id="hint-section">
          <div class="hint-box">
            <div class="hint-title">Tænkevej</div>
            ${hintSteps}
          </div>
        </div>
        <div class="card-actions">
          <button class="hint-btn" data-action="toggle-hint" id="hint-btn">
            ${state.hintOpen ? 'Skjul tænkevej' : 'Vis tænkevej'}
          </button>
          <button class="next-btn ${state.answered ? 'visible' : ''}" data-action="next-chapter" id="next-btn">
            ${nextLabel}
          </button>
        </div>
      </div>

    </div>`;
}

function renderComplete() {
  const theme = GAME_DATA[state.theme];
  const storyParagraphs = theme.endingStory
    .split('\n\n')
    .filter(p => p.trim())
    .map(p => `<p>${p.trim()}</p>`)
    .join('');

  return `
    <div class="complete-screen">
      <div class="complete-left">
        <span class="complete-trophy">${theme.endingTrophy}</span>
        <h2 class="complete-title">${theme.endingTitle}</h2>
      </div>
      <div class="complete-right">
        <div class="complete-story">${storyParagraphs}</div>
        <button class="home-btn" data-action="go-home">← Vælg et nyt eventyr</button>
      </div>
    </div>`;
}

// ── ACTIONS ───────────────────────────────────

function selectTheme(themeId) {
  state.theme         = themeId;
  state.selectedLevel = null;
  state.answered      = false;
  state.hintOpen      = false;
  state.wrongCount    = 0;
  state.screen        = 'level-select';
  render();
}

function selectLevel(lvl) {
  const saved = state.progress[state.theme] || 0;
  state.selectedLevel = parseInt(lvl, 10);
  state.chapter       = saved >= 10 ? 0 : saved;
  state.answered      = false;
  state.hintOpen      = false;
  state.wrongCount    = 0;
  state.screen        = 'chapter';
  render();
}

function goHome() {
  state.screen        = 'home';
  state.theme         = null;
  state.selectedLevel = null;
  state.answered      = false;
  state.hintOpen      = false;
  state.wrongCount    = 0;
  render();
}

function nextChapter() {
  const next = state.chapter + 1;
  if (next >= 10) {
    state.progress[state.theme] = 10;
    saveProgress();
    state.screen = 'complete';
    render();
  } else {
    state.progress[state.theme] = next;
    saveProgress();
    state.chapter    = next;
    state.answered   = false;
    state.hintOpen   = false;
    state.wrongCount = 0;
    // selectedLevel persists — it's global for the theme session
    render();
  }
}

function toggleHint() {
  state.hintOpen = !state.hintOpen;
  const section = document.getElementById('hint-section');
  const btn     = document.getElementById('hint-btn');
  if (section) section.classList.toggle('open', state.hintOpen);
  if (btn)     btn.textContent = state.hintOpen ? 'Skjul tænkevej' : 'Vis tænkevej';
}

const wrongMessages = [
  'Ikke helt — men du er på rette spor. Prøv igen!',
  'Næsten! Kig på tænkevej-knappen nedenfor.',
  'Det er ikke den rigtige kode. Læs opgaven langsomt og prøv igen.',
  'Hm — ikke den. Du kan klare det!'
];

function handleAnswerSubmit() {
  if (state.answered || state.selectedLevel === null) return;
  const input    = document.getElementById('answer-input');
  const feedback = document.getElementById('feedback');
  if (!input || !feedback || !input.value.trim()) return;

  const ch       = GAME_DATA[state.theme].chapters[state.chapter];
  const mathData = MATH[ch.lvlData][state.selectedLevel];

  if (checkAnswer(input.value, mathData.ans)) {
    state.answered = true;
    const successMsg = applyTemplate(ch.successMsgTemplate, { ...mathData.vars, answer: mathData.ans });
    input.classList.add('correct');
    feedback.textContent = '✓ ' + successMsg;
    feedback.className   = 'feedback success';
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      nextBtn.classList.add('visible');
      nextBtn.textContent = state.chapter === 9 ? 'Se afslutningen →' : 'Næste kapitel →';
    }
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) submitBtn.disabled = true;
    input.readOnly = true;
    triggerConfetti();
  } else {
    state.wrongCount++;
    input.classList.add('wrong');
    const msg = wrongMessages[(state.wrongCount - 1) % wrongMessages.length];
    feedback.textContent = msg;
    feedback.className   = 'feedback error';
    setTimeout(() => input.classList.remove('wrong'), 360);
    input.select();
  }
}

// ── EVENT DELEGATION ──────────────────────────

document.getElementById('app').addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const { action, payload } = btn.dataset;
  if      (action === 'select-theme')  selectTheme(payload);
  else if (action === 'select-level')  selectLevel(payload);
  else if (action === 'go-home')       goHome();
  else if (action === 'next-chapter')  nextChapter();
  else if (action === 'toggle-hint')   toggleHint();
});

document.getElementById('app').addEventListener('submit', e => {
  if (e.target.id === 'answer-form') { e.preventDefault(); handleAnswerSubmit(); }
});

// ── INIT ──────────────────────────────────────
render();
