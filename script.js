let dodges = 0;

const no = document.getElementById("no");
const yes = document.getElementById("yes");

const LINES = [
    "Non",
    "Tu es sûr ?",
    "Vraiment ?",
    "Allez !",
    "Dis oui !"
];

function dodge() {
    dodges++;

    no.textContent = LINES[Math.min(dodges, LINES.length - 1)];

    const x = Math.random() * (innerWidth - no.offsetWidth);
    const y = Math.random() * (innerHeight - no.offsetHeight);

    const shrink = Math.max(0.5, 1 - dodges * 0.08);

    no.style.position = "fixed";
    no.style.transform =
        `translate(${x}px, ${y}px) scale(${shrink})`;
}
