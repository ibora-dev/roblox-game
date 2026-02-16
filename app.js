/* =========================
   Roblox Picks — app.js
   - Navigation via hash (#home, #categories, #cat/<key>, #faq, #contact)
   - Cartes cliquables (ouvre Roblox)
   - Recherche + filtres
   ========================= */

// ---------- DATA (à modifier) ----------

const CATEGORIES = [
  { key: "horror", label: "Horreur 😱" },
  { key: "anomaly", label: "Anomalie 👁️" },
  { key: "fun", label: "Fun 😂" },
  { key: "hobby", label: "Hobby 🛠️" },
  { key: "brainrot", label: "Brain rot 🧠💥" },
];

/*
  Pour ajouter un jeu :
  {
    title: "Nom du jeu",
    likes: "92%", // ou "1.2M likes"
    category: "horror", // horror/anomaly/fun/hobby/brainrot
    url: "https://www.roblox.com/games/ID/...",
    image: "https://...jpg",
    tag: "Tendance"
  }
*/
const GAMES = [
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
  // + jeux pour scroll
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
    a: "On met surtout des jeux fun, populaires, et des trucs plus niche selon les catégories (horreur, anomalie, etc.). Tu peux modifier cette FAQ quand tu veux.",
  },
  {
    q: "Quand je clique sur un jeu, ça fait quoi ?",
    a: "Ça ouvre la page Roblox du jeu dans un nouvel onglet.",
  },
  {
    q: "Je peux proposer un jeu ?",
    a: "Oui. Mets tes réseaux dans Contact (Discord / Insta) ou ajoute un Google Form plus tard.",
  },
];

// ---------- APP STATE ----------

const state = {
  route: "home",     // home | categories | category | faq | contact
  category: null,    // category key
  query: "",
};

// ---------- DOM HELPERS ----------

function $(id) {
  return document.getElementById(id);
}

const els = {
  content: $("content"),
  pageTitle: $("pageTitle"),
  pageSubtitle: $("pageSubtitle"),
  chipRow: $("chipRow"),
  search: $("search"),
  statCount: $("statCount"),
  year: $("year"),
  goHome: $("goHome"),
};

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(s) {
  // pour style="background-image:url('...')" (évite de casser avec ')
  return String(s).replaceAll("'", "%27");
}

// ---------- ROUTING ----------

function parseHash() {
  const raw = (location.hash || "#home").replace("#", "");
  const [base, param] = raw.split("/");

  if (base === "home") {
    state.route = "home";
    state.category = null;
    return;
  }

  if (base === "categories") {
    state.route = "categories";
    state.category = null;
    return;
  }

  if (base === "cat" && param) {
    state.route = "category";
    state.category = param;
    return;
  }

  if (base === "faq") {
    state.route = "faq";
    state.category = null;
    return;
  }

  if (base === "contact") {
    state.route = "contact";
    state.category = null;
    return;
  }

  // fallback
  state.route = "home";
  state.category = null;
}

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
  if (id && $(id)) $(id).classList.add("active");
}

// ---------- UI: CHIPS ----------

function makeChip(text, onClick, active = false) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "chip" + (active ? " active" : "");
  b.textContent = text;
  b.addEventListener("click", onClick);
  return b;
}

function renderChips(mode) {
  // mode: "home" => filtres
  // mode: "categories" => navigation vers catégories
  // mode: "category" => bouton retour + label
  els.chipRow.innerHTML = "";

  if (!mode) return;

  if (mode === "home") {
    els.chipRow.appendChild(
      makeChip("Tout ⭐", () => {
        state.category = null;
        render();
      }, state.category === null)
    );

    CATEGORIES.forEach(c => {
      els.chipRow.appendChild(
        makeChip(c.label, () => {
          state.category = c.key;
          render();
        }, state.category === c.key)
      );
    });
  }

  if (mode === "categories") {
    CATEGORIES.forEach(c => {
      els.chipRow.appendChild(
        makeChip(c.label, () => {
          location.hash = `#cat/${c.key}`;
        }, false)
      );
    });
  }

  if (mode === "category") {
    els.chipRow.appendChild(
      makeChip("⬅ Retour catégories", () => {
        location.hash = "#categories";
      }, false)
    );

    const current = CATEGORIES.find(x => x.key === state.category);
    if (current) {
      els.chipRow.appendChild(
        makeChip(`Filtre: ${current.label}`, () => {}, true)
      );
    }
  }
}

// ---------- UI: GAME CARDS ----------

function gameCard(g) {
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("role", "link");
  card.setAttribute("tabindex", "0");
  card.title = "Ouvrir sur Roblox";

  const catLabel = CATEGORIES.find(c => c.key === g.category)?.label || g.category;

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

function getFilteredGames() {
  let list = [...GAMES];
  const q = state.query.trim().toLowerCase();

  if (state.route === "home" && state.category) {
    list = list.filter(g => g.category === state.category);
  }

  if (state.route === "category" && state.category) {
    list = list.filter(g => g.category === state.category);
  }

  if (q) {
    list = list.filter(g => g.title.toLowerCase().includes(q));
  }

  return list;
}

function renderGamesGrid() {
  const filtered = getFilteredGames();
  els.statCount.textContent = String(filtered.length);

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

  const grid = document.createElement("div");
  grid.className = "grid";
  filtered.forEach(g => grid.appendChild(gameCard(g)));
  els.content.appendChild(grid);
}

// ---------- UI: FAQ & CONTACT ----------

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
    <p class="small">Remplace ces infos par les tiennes (Discord, Insta, TikTok, Snap…).</p>

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

// ---------- RENDER ----------

function render() {
  setActiveNav();
  els.content.innerHTML = "";

  // search visible tout le temps, mais on adapte son usage selon page
  els.search.value = state.query;

  if (state.route === "home") {
    els.pageTitle.textContent = "Recommandations";
    els.pageSubtitle.textContent = "Scroll et découvre des jeux Roblox 👇";
    renderChips("home");
    renderGamesGrid();
    return;
  }

  if (state.route === "categories") {
    els.pageTitle.textContent = "Catégories";
    els.pageSubtitle.textContent = "Choisis une catégorie, puis découvre les jeux 🧭";
    renderChips("categories");

    els.statCount.textContent = "—";
    const info = document.createElement("div");
    info.className = "sectionCard";
    info.innerHTML = `
      <h3 class="sectionTitle">Choisis une catégorie</h3>
      <p class="small">Clique sur une puce au-dessus (Horreur, Anomalie, Fun, Hobby, Brain rot).</p>
    `;
    els.content.appendChild(info);
    return;
  }

  if (state.route === "category") {
    const current = CATEGORIES.find(c => c.key === state.category);
    els.pageTitle.textContent = current ? current.label : "Catégorie";
    els.pageSubtitle.textContent = "Scroll et clique un jeu pour l’ouvrir sur Roblox ✨";
    renderChips("category");
    renderGamesGrid();
    return;
  }

  if (state.route === "faq") {
    els.pageTitle.textContent = "FAQ";
    els.pageSubtitle.textContent = "Questions / réponses — tu modifies ça quand tu veux 🧠";
    renderChips(null);
    renderFAQ();
    return;
  }

  if (state.route === "contact") {
    els.pageTitle.textContent = "Contact";
    els.pageSubtitle.textContent = "Tes réseaux (Discord, Insta, TikTok…) 📩";
    renderChips(null);
    renderContact();
    return;
  }
}

// ---------- EVENTS ----------

function init() {
  // Year
  els.year.textContent = String(new Date().getFullYear());

  // Home logo click
  els.goHome.addEventListener("click", () => { location.hash = "#home"; });
  els.goHome.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") location.hash = "#home";
  });

  // Search
  els.search.addEventListener("input", () => {
    state.query = els.search.value;
    render();
  });

  // Hash route
  window.addEventListener("hashchange", () => {
    parseHash();
    render();
  });

  // First load
  if (!location.hash) location.hash = "#home";
  parseHash();
  render();
}

document.addEventListener("DOMContentLoaded", init);
