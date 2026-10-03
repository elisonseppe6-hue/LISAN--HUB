async function loadServices() {
  const list = document.getElementById("service-list");
  try {
    const response = await fetch("/api/services");
    if (!response.ok) throw new Error("API request failed");
    const services = await response.json();
    list.innerHTML = services.map(service => `
      <article class="card">
        <h3>${escapeHtml(service.name)}</h3>
        <p>${escapeHtml(service.description)}</p>
        <div class="category">${escapeHtml(service.category)}</div>
        <div class="tokens">${service.tokens} Tokeni</div>
        <button class="use-btn" onclick="useService('${escapeJs(service.name)}')">Tumia Huduma</button>
      </article>
    `).join("");
  } catch (error) {
    list.innerHTML = "<p>Imeshindikana kupakia huduma. Jaribu tena.</p>";
    console.error(error);
  }
}
function useService(serviceName) {
  alert(`Umechagua: ${serviceName}. Mfumo wa tokeni utaongezwa kwenye hatua inayofuata.`);
}
function escapeHtml(value) {
  return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function escapeJs(value) {
  return String(value).replaceAll("\\","\\\\").replaceAll("'","\\'");
}
loadServices();
