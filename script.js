function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function convertPropano() {
  const ton = parseFloat(document.getElementById('tonPropano').value) || 0;
  const barili = ton * 11.76;
  document.getElementById('bariliPropano').textContent = barili.toFixed(2);
}

function convertButano() {
  const ton = parseFloat(document.getElementById('tonButano').value) || 0;
  const barili = ton * 11.63;
  document.getElementById('bariliButano').textContent = barili.toFixed(2);
}

function calcolaMedia() {
  const pPropano = parseFloat(document.getElementById('percPropano').value) || 0;
  const pButano = parseFloat(document.getElementById('percButano').value) || 0;
  const total = pPropano + pButano;
  if (total === 0) return;

  const propanoPM = 44.1;
  const butanoPM = 58.1;
  const mediaPM = ((pPropano * propanoPM) + (pButano * butanoPM)) / total;
  document.getElementById('pmMedio').textContent = mediaPM.toFixed(2);

  const ton = parseFloat(document.getElementById('tonMedia').value) || 0;
  const barili = (ton * 1000) / mediaPM * 0.159;
  document.getElementById('bariliMedia').textContent = barili.toFixed(2);
}
