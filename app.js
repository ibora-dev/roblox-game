// ============ DATA (Tu modifies ça quand tu veux) ============
// Astuce : remplace les "url" par les liens Roblox officiels des jeux.
// images: mets une image (png/jpg) ou laisse le placeholder, tu changeras après.

const CATEGORIES = [
  { key: "horror", label: "Horreur 😱" },
  { key: "anomaly", label: "Anomalie 👁️" },
  { key: "fun", label: "Fun 😂" },
  { key: "hobby", label: "Hobby 🛠️" },
  { key: "brainrot", label: "Brain rot 🧠💥" },
];

const GAMES = [
  // Recommandations (home) — tu peux mélanger les catégories ici
  {
    title: "Exemple: Horror Game",
    likes: "92%",
    category: "horror",
    url: "https://www.roblox.com/",
    image: "https://placehold.co/900x540/png?text=Horror+Game",
    tag: "Tendance",
  },
  {
    title: "Exemple: Anomaly Zone",
    likes: "88%",
    category: "anomaly",
    url: "https://www.roblox.com/",
    image: "https://placehold.co/900x540/png?text=Anomaly+Zone",
    tag: "Bizarre",
  },
  {
    title: "Exemple: Fun Chaos",
    likes: "95%",
    category: "fun",
    url: "https://www.roblox.com/",
    image: "https://placehold.co/900x540/png?text=Fun+Chaos",
    tag: "Populaire",
  },
  {
    title: "Exemple: Build & Chill",
    likes: "86%",
    category: "hobby",
    url: "https://www.roblox.com/",
    image: "https://placehold.co/900x540/png?text=Build+%26+Chill",
    tag: "Relax",
  },
  {
    title: "Exemple: Brainrot Simulator",
    likes: "79%",
    category: "brainrot",
    url: "https://www.roblox.com/",
    image: "https://placehold.co/900x540/png?text=Brainrot+Sim",
    tag: "💀",
  },

  // Quelques jeux en plus pour montrer le scroll
  {
    title: "Exemple: Night Corridor",
    likes: "90%",
    category: "horror",
    url: "https://www.roblox.com/",
    image: "https://placehold.co/900x540/png?text=Night+Corridor",
    tag: "Horreur",
  },
  {
    title: "Exemple: The Glitch Room",
    likes: "84%",
    category: "anomaly",
    url: "https://www.roblox.com/",
    image: "https://placehold.co/900x540/png?text=The+Glitch+Room",
    tag: "Anomalie",
  },
  {
    title: "Exemple: Funny Obby",
    likes: "93%",
    category: "fun",
    url: "https://www.roblox.com/",
    image: "https://placehold.co/900x540/png?text=Funny+Obby",
    tag: "Obby",
  },
  {
    title: "Exemple: Cooking Time",
    likes: "85%",
    category: "hobby",
    url: "https://www.roblox.com/",
    image: "https://placehold.co/900x540/png?text=Cooking+Time",
    tag: "Hobby",
  },
  {
    title: "Exemple: Meme World",
    likes: "81%",
    category: "brainrot",
    url: "https://www.roblox.com/",
    image: "https://placehold.co/900x540/png?text=Meme+World",
    tag: "Mèmes",
  },
];

const FAQ = [
  {
    q: "Comment vous choisissez les jeux ?",
    a: "On met surtout des jeux fun, populaires, et des trucs plus niche selon les catégories (horreur, anomalie, etc.). Tu pourras modifier cette FAQ quand tu veux.",
  },
  {
    q: "Je clique et ça fait quoi ?",
    a: "Quand tu cliques sur une carte, ça ouvre la page Roblox du jeu dans un nouvel onglet.",
  },
  {
    q: "Je peux proposer un jeu ?",
    a: "Oui ! Ajoute tes réseaux dans Contact, ou crée un formulaire plus tard (Google Forms par exemple).",
  },
];

// ============ APP ============

const els = {
  content: document.getElementById("content"),
  pageTitle: document.getElementById("pageTitle"),
  pageSubtitle: document.getElementById("pageSubtitle"),
  chipRow: document.getElementById("chipRow"),
  search: document.getElementById("search"),
  statCount: document.getElementById("statCount"),
  year: document.getElementById("year"),
  goHome: document.getElementById("goHome"),
};

let state = {
  route: "home",     // home | categories | category | faq | contact
  category: null,    // key
  query: "",
};

function setActiveNav() {
  const map = {
    home: "nav-home",
    categories: "nav-categories",
    category: "nav-categories",
    faq: "nav-faq",
    contact: "nav-contact",
  };
  document.querySelectorAll(".navlink").forEach(a => a.classList.remove("active"));
  const id = map[state.route];
  if (id) document.getElementById(id).classList.add("active");
}

function navigateFromHash() {
  const hash = (location.hash || "#home").replace("#", "");
  const [base, param] = hash.split("/");

  if (base === "home") {
    state.route = "home";
    state.category = null;
  } else if (base === "categories") {
    state.route = "categories";
    state.category = null;
  } else if (base === "cat" && param) {
    state.route = "category";
    state.category = param;
  } else if (base === "faq") {
    state.route = "faq";
    state.category = null;
  } else if (base === "contact") {
    state.route = "contact";
    state.category = null;
  } else {
    state.route = "home";
    state.category = null;
  }

  render();
}

function renderChips(mode) {
  // mode: "home" -> puces filtre (toutes catégories)
  // mode: "categories" -> puces navigation vers catégorie
  els.chipRow.innerHTML = "";

  if (mode === "home") {
    const allChip = chip("Tout ⭐", () => { state.category = null; render(); }, state.category === null);
    els.chipRow.appendChild(allChip);

    CATEGORIES.forEach(c => {
      els.chipRow.appendChild(
        chip(c.label, () => { state.category = c.key; render(); }, state.category === c.key)
      );
    });
  }

  if (mode === "categories") {
    CATEGORIES.forEach(c => {
      els.chipRow.appendChild(
        chip(c.label, () => { location.hash = `#cat/${c.key}`; }, false)
      );
    });
  }

  if (mode === "category") {
    const back = chip("⬅ Retour catégories", () => { location.hash = "#categories"; }, false);
    els.chipRow.appendChild(back);

    const current = CATEGORIES.find(x => x.key === state.category);
    if (current) {
      els.chipRow.appendChild(chip(`Filtre: ${current.label}`, () => {}, true));
    }
  }
}

function chip(text, onClick, active) {
  const b = document.createElement("button");
  b.className = "chip" + (active ? " active" : "");
  b.type = "button";
  b.textContent = text;
  b.addEventListener("click", onClick);
  return b;
}

function renderGamesList(games) {
  const q = state.query.trim().toLowerCase();
  let filtered = games;

  if (state.route === "home" && state.category) {
    filtered = filtered.filter(g => g.category === state.category);
  }
  if (state.route === "category" && state.category) {
    filtered = filtered.filter(g => g.category === state.category);
  }
  if (q) {
    filtered = filtered.filter(g => g.title.toLowerCase().includes(q));
  }

  els.statCount.textContent = String(filtered.length);

  const grid = document.createElement("div");
  grid.className = "grid";

  filtered.forEach(g => {
    grid.appendChild(gameCard(g));
  });

  // Si aucun résultat
  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "sectionCard";
    empty.innerHTML = `
      <h3 class="sectionTitle">Aucun résultat 😅</h3>
      <p class="small">Essaie un autre mot dans la recherche, ou enlève un filtre.</p>
    `;
    els.content.appendChild(empty);
    return;
  }

  els.content.appendChild(grid);
}

function gameCard(g) {
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("role", "link");
  card.setAttribute("tabindex", "0");
  card.title = "Ouvrir sur Roblox";

  const catLabel = (CATEGORIES.find(c => c.key === g.category)?.label) || g.category;

  card.innerHTML = `
    <div class="thumb" style="background-image:url('${escapeAttr(g.image)}')">
      <div class="badge">${escapeHtml(catLabel)}</div>
    </div>
    <div class="cardbody">
      <div class="titleRow">
        <h3 class="gametitle">${escapeHtml(g.title)}</h3>
      </div>
      <div class="meta">
        <span class="pill good">👍 ${escapeHtml(g.likes)}</span>
        <span class="pill">🏷️ ${escapeHtml(g.tag || "Jeu")}</span>
      </div>
    </div>
  `;

  const open = () => window.open(g.url, "_blank", "noopener,noreferrer");
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") open();
  });

  return card;
}

function renderFAQ() {
  els.statCount.textContent = "—";
  const box = document.createElement("div");
  box.className = "sectionCard";
  box.innerHTML = `
    <h3 class="sectionTitle">FAQ</h3>
    <p class="small">Clique une question pour afficher la réponse.</p>
  `;

  FAQ.forEach(item => {
    const wrap = document.createElement("div");
    wrap.className = "faqItem";
    wrap.innerHTML = `
      <div class="faqQ">
        <span>${escapeHtml(item.q)}</span>
        <span>▾</span>
      </div>
      <div class="faqA">${escapeHtml(item.a)}</div>
    `;
    wrap.querySelector(".faqQ").addEventListener("click", () => {
      wrap.classList.toggle("open");
    });
    box.appendChild(wrap);
  });

  els.content.appendChild(box);
}

function renderContact() {
  els.statCount.textContent = "—";
  const box = document.createElement("div");
  box.className = "sectionCard";
  box.innerHTML = `
    <h3 class="sectionTitle">Contact</h3>
    <p class="small">Mets tes liens ici (tu les changeras quand tu veux).</p>

    <div style="margin-top:12px; display:grid; gap:10px;">
      <div class="faqItem">
        <div class="faqQ" style="cursor:default;">
          <span>Discord</span>
          <span class="pill">ton_discord</span>
        </div>
      </div>

      <div class="faqItem">
        <div class="faqQ" style="cursor:default;">
          <span>Instagram</span>
          <span class="pill">@ton_insta</span>
        </div>
      </div>

      <div class="faqItem">
        <div class="faqQ" style="cursor:default;">
          <span>TikTok</span>
          <span class="pill">@ton_tiktok</span>
        </div>
      </div>

      <div class="faqItem">
        <div class="faqQ" style="cursor:default;">
          <span>Snap</span>
          <span class="pill">ton_snap</span>
        </div>
      </div>
    </div>
  `;
  els.content.appendChild(box);
}

function render() {
  setActiveNav();

  // reset content
  els.content.innerHTML = "";

  // Search always visible, but we can adapt placeholder
  els.search.value = state.query;

  if (state.route === "home") {
    els.pageTitle.textContent = "Recommandations";
    els.pageSubtitle.textContent = "Scroll et découvre des jeux Roblox 👇";
    renderChips("home");
    renderGamesList(GAMES);
  }

  if (state.route === "categories") {
    els.pageTitle.textContent = "Catégories";
    els.pageSubtitle.textContent = "Choisis une catégorie, puis découvre les jeux 🧭";
    renderChips("categories");

    els.statCount.textContent = "—";
    const box = document.createElement("div");
    box.className = "sectionCard";
    box.innerHTML = `
      <h3 class="sectionTitle">Choisis une catégorie</h3>
      <p class="small">Clique sur une puce au-dessus (Horreur, Anomalie, Fun, Hobby, Brain rot).</p>
    `;
    els.content.appendChild(box);
  }

  if (state.route === "category") {
    const current = CATEGORIES.find(c => c.key === state.category);
    els.pageTitle.textContent = current ? current.label : "Catégorie";
    els.pageSubtitle.textContent = "Scroll et clique un jeu pour l’ouvrir sur Roblox ✨";
    renderChips("category");
    renderGamesList(GAMES);
  }

  if (state.route === "faq") {
    els.pageTitle.textContent = "FAQ";
    els.pageSubtitle.textContent = "Questions / réponses — tu modifies ça quand tu veux 🧠";
    renderChips(null);
    renderFAQ();
  }

  if (state.route === "contact") {
    els.pageTitle.textContent = "Contact";
    els.pageSubtitle.textContent = "Tes réseaux (Discord, Insta, TikTok…) 📩";
    renderChips(null);
    renderContact();
  }
}

// ============ Utils ============

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function escapeAttr(s){
  // pour éviter de casser le style="url('...')"
  return String(s).replaceAll("'", "%27");
}

// ============ Events ============

window.addEventListener("hashchange", navigateFromHash);

els.search.addEventListener("input", () => {
  state.query = els.search.value;
  render();
});

els.goHome.addEventListener("click", () => { location.hash = "#home"; });
els.goHome.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") location.hash = "#home";
});

document.getElementById("year").textContent = String(new Date().getFullYear());

// init
if (!location.hash) location.hash = "#home";
navigateFromHash();
