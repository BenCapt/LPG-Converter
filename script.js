
function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function convertPropane() {
  const tons = parseFloat(document.getElementById('tons-propane').value);
  if (!isNaN(tons)) {
    const barrels = tons * 521.6;
    document.getElementById('result-propane').innerText = `${barrels.toFixed(2)} barili`;
  }
}

function convertButane() {
  const tons = parseFloat(document.getElementById('tons-butane').value);
  if (!isNaN(tons)) {
    const barrels = tons * 456.9;
    document.getElementById('result-butane').innerText = `${barrels.toFixed(2)} barili`;
  }
}

function calculateWeightedAverage() {
  const qtP = parseFloat(document.getElementById('qt-propane').value);
  const qtB = parseFloat(document.getElementById('qt-butane').value);
  if (!isNaN(qtP) && !isNaN(qtB)) {
    const total = qtP + qtB;
    const avg = (qtP * 44.1 + qtB * 58.1) / total;
    const percentP = (qtP / total) * 100;
    const percentB = (qtB / total) * 100;
    document.getElementById('result-average').innerText = `Media Ponderata: ${avg.toFixed(2)} g/mol
    (Propano: ${percentP.toFixed(1)}%, Butano: ${percentB.toFixed(1)}%)`;
  }
}

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}
