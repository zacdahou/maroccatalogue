const sections = [
  { name: "Produits", icon: "pain", position: "haut gauche", href: "#produits" },
  { name: "Recettes", icon: "toque de chef", position: "haut droite", href: "#recettes" },
  { name: "Calculateur", icon: "calculatrice", position: "bas gauche", href: "#calculateur" },
  { name: "Agences", icon: "épingle de localisation", position: "bas droite", href: "#agences" },
  { name: "Contact", icon: "téléphone", position: "bas centré", href: "#contact" },
];

function createIconSvg(label) {
  switch (label) {
    case "pain":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 13a5.5 5.5 0 0 1 5.5-5.5h6a5.5 5.5 0 0 1 0 11H9a5.5 5.5 0 0 1-5.5-5.5Z"/><path d="M9 7V5m3 2V5m3 2V5"/></svg>`;
    case "toque de chef":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 10a4 4 0 0 1 4-4c.6 0 1.2.12 1.7.35A4 4 0 0 1 19 9.5c0 .17-.01.33-.04.5"/><path d="M6 12h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6Z"/><path d="M6 15h12"/></svg>`;
    case "calculatrice":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 12h2m4 0h2"/><path d="M8 16h2m4 0h2"/></svg>`;
    case "épingle de localisation":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10Z"/><circle cx="12" cy="11" r="2.5"/></svg>`;
    case "téléphone":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5c0-1 1-2 2-2h2l2 4-2 1c.8 2 2.5 3.7 4.5 4.5l1-2 4 2v2c0 1-1 2-2 2A13 13 0 0 1 4 7.5v-2Z"/></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/></svg>`;
  }
}

function renderGrid() {
  const nav = document.querySelector(".icons-grid");
  if (!nav) return;

  const positionClassMap = {
    "haut gauche": "pos-top-left",
    "haut droite": "pos-top-right",
    "bas gauche": "pos-bottom-left",
    "bas droite": "pos-bottom-right",
    "bas centré": "pos-bottom-center",
    "bas centre": "pos-bottom-center",
  };

  sections.forEach(({ name, icon, href, position }) => {
    const link = document.createElement("a");
    link.className = "icon-card";
    link.href = href;
    link.setAttribute("role", "button");
    link.setAttribute("aria-label", name);
    link.dataset.position = position;
    const posClass = positionClassMap[position?.toLowerCase?.() || ""];
    if (posClass) link.classList.add(posClass);

    const iconWrap = document.createElement("div");
    iconWrap.className = "icon";
    iconWrap.innerHTML = createIconSvg(icon);

    const label = document.createElement("span");
    label.className = "icon-label";
    label.textContent = name;

    link.appendChild(iconWrap);
    link.appendChild(label);
    nav.appendChild(link);
  });
}

renderGrid();
