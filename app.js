const CATEGORIES = [
  { key: "horror", label: "Horreur 😱" },
  { key: "anomaly", label: "Anomalie 👁️" },
  { key: "fun", label: "Fun 😂" },
  { key: "obby", label: "Obby 🛠️" },
  { key: "brainrot", label: "Brainrot 🧠" },
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
  },
*/
const GAMES = [
  {
    title: "Floors Have Teeth",
    likes: "92%",
    category: "horror",
    url: "https://www.roblox.com/fr/games/101048237707399/Floors-Have-Teeth",
    image: "https://tr.rbxcdn.com/180DAY-fd6c50153edce70ae4384915c6ae8b3a/768/432/Image/Webp/noFilter",
    tag: "Tendance",
  },
  {
    title: "Iscariot",
    likes: "86%",
    category: "horror",
    url: "https://www.roblox.com/fr/games/13722812741/Iscariot",
    image: "https://tr.rbxcdn.com/180DAY-39b5cbc6d29040f380c4211aeaf202af/768/432/Image/Webp/noFilter",
    tag: "Bizarre",
  },
  {
    title: "The Curse [PART 3]",
    likes: "79%",
    category: "horror",
    url: "https://www.roblox.com/fr/games/15077422637/The-Curse",
    image: "https://tr.rbxcdn.com/180DAY-e64dabe94751ab68a52c5a46b031717d/768/432/Image/Webp/noFilter",
    tag: "Populaire",
  },
  {
    title: "Corridor",
    likes: "92%",
    category: "anomaly",
    url: "https://www.roblox.com/fr/games/16825633506/Corridor",
    image: "https://tr.rbxcdn.com/180DAY-236aea5f4bea7f05156350d83f61f649/768/432/Image/Webp/noFilter",
    tag: "Anomaly",
  },
  {
    title: "Scary Shawarma Kiosk the ANOMALY",
    likes: "90%",
    category: "anomaly",
    url: "https://www.roblox.com/fr/games/137826330724902/Scary-Shawarma-Kiosk-the-ANOMALY",
    image: "https://tr.rbxcdn.com/180DAY-609e27e2e0cbe8f3b5e892357f5934b6/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "3008 [2,74]",
    likes: "91%", 
    category: "fun", 
    url: "https://www.roblox.com/fr/games/2768379856/3008",
    image: "https://tr.rbxcdn.com/180DAY-a9306698a282e638a1688f1ca428a834/768/432/Image/Webp/noFilter",
    tag: "Fun"
  },
  {
    title: "Radiant Résidents",
    likes: "90%", 
    category: "fun",
    url: "https://www.roblox.com/fr/games/13950108612/Radiant-Residents",
    image: "https://tr.rbxcdn.com/180DAY-576938d70d30db783cfd16d025b4e222/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "Roblox Party",
    likes: "79%",
    category: "fun", 
    url: "https://www.roblox.com/fr/games/5948706234/Roblox-Party",
    image: "https://tr.rbxcdn.com/180DAY-3cbc1f355703861f36373ea3c8cf09e2/768/432/Image/Webp/noFilter",
    tag: "Fun"
  },
  {
    title: "Dog Walk",
    likes: "54%",
    category: "obby",
    url: "https://www.roblox.com/fr/games/99758842280353/Dog-Walk",
    image: "https://tr.rbxcdn.com/180DAY-514f9a4da5d25179fb1d57b1ad04b3d7/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "Chained Together",
    likes: "73%",
    category: "obby", 
    url: "https://www.roblox.com/fr/games/18152595062/Chained-Together",
    image: "https://tr.rbxcdn.com/180DAY-f55582ddfa7a6b22e68d7abbe0e69702/768/432/Image/Webp/noFilter",
    tag: "Hard"
  },
  {
    title: "Kick The Baby",
    likes: "96%", 
    category: "obby", 
    url: "https://www.roblox.com/fr/games/116623319969839/Kick-The-Baby",
    image: "https://tr.rbxcdn.com/180DAY-42f09e4e3851baa2f112eec914f6f0fc/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "The Mimic",
    likes: "89%",
    category: "horror",
    url: "https://www.roblox.com/fr/games/6243699076/The-Mimic",
    image: "https://tr.rbxcdn.com/180DAY-72251cddd9eb5989ae109763db29ff79/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "Lost Rooms",
    likes: "89%", 
    category: "horror", 
    url: "https://www.roblox.com/fr/games/117864491234172/LOST-ROOMS",
    image: "https://tr.rbxcdn.com/180DAY-0d60eb3a46c5f8c9e82b3a6731a322e5/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "Dollhouse Bloodshed",
    likes: "83%", 
    category: "horror", 
    url: "https://www.roblox.com/fr/games/139506293848703/Dollhouse-Bloodshed",
    image: "https://tr.rbxcdn.com/180DAY-3010e6e90b42fcb61992fabb70aa350c/768/432/Image/Webp/noFilter",
    tag: "Hard"
  },
  {
    title: "The Exit 8",
    likes: "78%", 
    category: "anomaly",
    url: "https://www.roblox.com/fr/games/16894230496/The-Exit-8",
    image: "https://tr.rbxcdn.com/180DAY-cd875592b71d1f95592e7b3a0adeccfa/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "A Dusty Trip",
    likes: "90%", 
    category: "fun", 
    url: "https://www.roblox.com/fr/games/16389395869/a-dusty-trip",
    image: "https://tr.rbxcdn.com/180DAY-c694bf0f9255a7abc8a049f755cd8889/768/432/Image/Webp/noFilter",
    tag: "Fun"
  },
  {
    title: "LOCOfficial",
    likes: "87%",
    category: "fun",
    url: "https://www.roblox.com/fr/games/8571687919/LOCOfficial",
    image: "https://tr.rbxcdn.com/180DAY-fbf6ce340d9545ec9b1791c8204ba9c2/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "Stop!",
    likes: "79%", 
    category: "fun", 
    url: "https://www.roblox.com/fr/games/98666334819917/Stop",
    image: "https://tr.rbxcdn.com/180DAY-415a71870778ffb0ed332731470d4193/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "Regretevator",
    likes: "89%", 
    category: "fun", 
    url: "https://www.roblox.com/fr/games/4972273297/Regretevator",
    image: "https://tr.rbxcdn.com/180DAY-d361d80cb90a0f32fecb4138fcf6f224/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "Amber Alert",
    likes: "91%",
    category: "horror", 
    url: "https://www.roblox.com/fr/games/108730407897379/Amber-Alert",
    image: "https://tr.rbxcdn.com/180DAY-12b337ced1735bd09b3e62ef08c27002/768/432/Image/Webp/noFilter",
    tag: "Tendance"
  },
  {
    title: "Terminal 13 Not Human",
    likes: "88%",
    category: "anomaly",
    url: "https://www.roblox.com/fr/games/126293024094985/Terminal-13-Not-Human",
    image: "https://tr.rbxcdn.com/180DAY-43b93cd5b0e1852e065cfa20988e1eb3/768/432/Image/Webp/noFilter",
    tag: "Anomaly",
  },
];

const FAQ = [
  {
    q: "Ibora est un garçon ou une fille ?",
    a: "Je ne répondrai pas à cette question, non par pudeur, mais parce qu’aucune des propositions ne me convient : je ne me sens ni homme ni femme, je me sens stylé.",
  },
  {
    q: "Ibora mangeait-il des vers de terre quand il était petit ?",
    a: "Jamais de la vie. Déjà, t’as de la terre partout, et en plus ça a un goût de poisson moisi mélangé à de la boue… berk.",
  },
  {
    q: "Ibora est-il charismatique ?",
    a: "Oui. Un charisme naturel, accompagné d’une nonchalance assumée, d’humour, d’intelligence et d’une vraie présence.",
  },
];

const state = {
  route: "home",    
  category: null,    
  query: "",
};

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
  return String(s).replaceAll("'", "%27");
}

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

function makeChip(text, onClick, active = false) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "chip" + (active ? " active" : "");
  b.textContent = text;
  b.addEventListener("click", onClick);
  return b;
}

function renderChips(mode) {
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
    <p class="small">Contactez moi bande de ptit filou je me sens seul.</p>

    <div style="margin-top:12px; display:grid; gap:10px;">
      <div class="faqItem">
        <div class="faqQ" style="cursor:default;">
          <span>Discord</span>
          <span class="pill">ibora_v6</span>
        </div>
      </div>

      <div class="faqItem">
        <div class="faqQ" style="cursor:default;">
          <span>Instagram</span>
          <span class="pill">@ibra.sn0</span>
        </div>
      </div>

      <div class="faqItem">
        <div class="faqQ" style="cursor:default;">
          <span>TikTok</span>
          <span class="pill">@ibrask0o</span>
        </div>
      </div>

      <div class="faqItem">
        <div class="faqQ" style="cursor:default;">
          <span>Snap</span>
          <span class="pill">ibra.68o</span>
        </div>
      </div>
    </div>
  `;

  els.content.appendChild(box);
}

function render() {
  setActiveNav();
  els.content.innerHTML = "";

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
    els.pageSubtitle.textContent = "Questions / réponses";
    renderChips(null);
    renderFAQ();
    return;
  }

  if (state.route === "contact") {
    els.pageTitle.textContent = "Contact";
    els.pageSubtitle.textContent = "Mes réseaux 📩";
    renderChips(null);
    renderContact();
    return;
  }
}

function init() {
  els.year.textContent = String(new Date().getFullYear());

  els.goHome.addEventListener("click", () => { location.hash = "#home"; });
  els.goHome.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") location.hash = "#home";
  });

  els.search.addEventListener("input", () => {
    state.query = els.search.value;
    render();
  });

  window.addEventListener("hashchange", () => {
    parseHash();
    render();
  });

  if (!location.hash) location.hash = "#home";
  parseHash();
  render();
}

document.addEventListener("DOMContentLoaded", init);
