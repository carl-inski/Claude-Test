/*
 * Konfiguration der Live-App.
 *
 * proxyUrl: URL des Cloudflare-Worker-Proxys (siehe proxy/cloudflare-worker.js
 * und README). Solange leer, läuft die App im Offline-Modus und zeigt die
 * Stände aus der importierten Excel + data/manual-results.json.
 *
 * Die WM 2026 ist beendet: proxyUrl bewusst leer, damit die Seite nicht mehr
 * live pollt, sondern den final importierten Endstand zeigt (siehe Excel-
 * Import in data/tippspiel.json). Für eine künftige WM einfach die URL des
 * Workers wieder eintragen.
 */
window.APP_CONFIG = {
  // App-Version – wird im Footer angezeigt und mit jeder Änderung erhöht.
  version: '1.13.0',
  proxyUrl: '',
  // Aktualisierungsintervall in Sekunden: schnell während laufender Spiele,
  // sparsam wenn gerade kein Spiel live ist (schont das API-/Worker-Limit).
  livePollSeconds: 20,
  idlePollSeconds: 60
};
