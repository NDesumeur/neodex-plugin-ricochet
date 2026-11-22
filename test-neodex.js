// lancé par le test « local » de NeoDex : choisit un morceau intégré, lance la partie, frappe quelques rebonds,
// vérifie que la chanson avance et que les notes sont jugées, puis pause, l'écran de fin et sa courbe, les décors selon le morceau (avec NEO_SHOTS : garde des images du jeu)
module.exports = async ({ pj, sleep }) => {
  { // les touches réglables : la 1re case prend Q, puis reprend sa touche d'avant
    const r = await pj(`(async () => { const b = document.querySelector('.rhKeys button'); if (!b) return 'pas de réglage des touches'; const old = b.textContent;
      const press = k => dispatchEvent(new KeyboardEvent('keydown', {key: k, bubbles: true}));
      b.click(); press('q'); await new Promise(r => setTimeout(r, 50)); if (b.textContent !== 'Q') return 'touche non prise : ' + b.textContent;
      b.click(); press(old.toLowerCase()); await new Promise(r => setTimeout(r, 50)); return b.textContent === old ? '' : 'touche non rendue'; })()`);
    if (r) throw new Error(r);
  }
  const key = k => pj(`document.dispatchEvent(new KeyboardEvent('keydown', {key: '${k}', bubbles: true})), document.dispatchEvent(new KeyboardEvent('keyup', {key: '${k}', bubbles: true})), 0`);
  const label = () => pj(`document.getElementById('gc').getAttribute('aria-label') || ''`);
  const shot = async n => { if (!process.env.NEO_SHOTS) return; const d = await pj(`document.getElementById('gc').toDataURL()`); require('fs').writeFileSync(require('path').join(process.env.NEO_SHOTS, 'ricochet-' + n + '.png'), Buffer.from(d.split(',')[1], 'base64')); };
  await pj(`document.querySelector('#rhSongs .rhSong .btn')?.click(), 0`); await sleep(1000);  // l'étiquette « prêt » du morceau d'avant doit d'abord disparaître
  for (let i = 0; i < 40 && !/: prêt,/.test(await label()); i++) await sleep(500);
  if (!/: prêt,/.test(await label())) throw new Error('le morceau devait se préparer : « ' + await label() + ' »');
  await shot('0-pret');
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); addEventListener('unhandledrejection', e => __e.push(String(e.reason?.message || e.reason))); 0`);
  await key(' '); await sleep(6500);
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  const judged = l => { const m = /: en jeu, score (\d+), combo \d+, parfait (\d+), bien (\d+), ok (\d+), raté (\d+)/.exec(l); return m ? +m[2] + +m[3] + +m[4] + +m[5] : 0; };
  for (let i = 0; i < 80 && judged(await label()) < 3; i++) { await key(['d', 'f', 'j', 'k'][i % 4]); await sleep(300); }  // le morceau lent commence par une intro sans notes
  await shot('1-partie');
  const l = await label(), m = /: en jeu, score (\d+), combo \d+, parfait (\d+), bien (\d+), ok (\d+), raté (\d+)/.exec(l);
  if (!m || +m[2] + +m[3] + +m[4] + +m[5] < 3) throw new Error('la partie devait avancer et des notes être jugées : « ' + l + ' »');
  await key('p'); await sleep(400);
  if (!/: pause,/.test(await label())) throw new Error('P devait mettre en pause : « ' + await label() + ' »');
  // l'écran de fin avec la courbe de précision (une partie inventée : juste au début, des ratés au milieu), puis le décor qui change selon le morceau
  await pj(`(() => { const T = document.getElementById('gc').__rh, rh = T.st(), L = rh.c.len, h = []; for (let i = 0; i < 200; i++) { const t = i / 200 * L, mid = t > L * .4 && t < L * .6; h.push([t, mid ? (i % 3 ? 1 : 0) : (i % 7 ? 3 : 2)]); } T.finish(h); return 0; })()`);
  await sleep(800); await shot('2-fin');
  const end = await pj(`(() => { const rh = document.getElementById('gc').__rh.st(); return [rh.mode, rh.hist.length, rh.grade].join(','); })()`);
  if (!/^over,200,[SABCD]$/.test(end)) throw new Error('écran de fin : ' + end);
  const bgs = [];
  for (const i of [1, 2, 3]) { await pj(`document.getElementById('gc').__rh.sel(${i}), 0`); await sleep(1500); bgs.push(await pj(`document.getElementById('gc').__rh.bg()`)); await shot('3-decor-' + bgs.at(-1)); }
  if (new Set(bgs).size < 3) throw new Error('décors : ' + bgs);
  // deux étincelles : l'option refait le morceau, avec deux listes de rebonds
  await pj(`(() => { const s = document.getElementById('rcSpk'); s.value = '2'; s.dispatchEvent(new Event('change')); return 0; })()`); await sleep(1500);
  const two = await pj(`(() => { const rh = document.getElementById('gc').__rh.st(); return rh.lists.length + ',' + rh.lists[1].length + ',' + rh.info.key; })()`);
  await shot('4-deux-etincelles');
  await pj(`(() => { const s = document.getElementById('rcSpk'); s.value = '1'; s.dispatchEvent(new Event('change')); return 0; })()`); await sleep(1000);
  if (!/^2,[1-9]\d*,.*\*2(#\w+)?$/.test(two)) throw new Error('deux étincelles : ' + two);
  // les cours : hexagone et triangle (le morceau se refait), puis les murs mobiles en jeu
  const courts = [];
  for (const v of ['hex', 'tri']) { await pj(`(() => { const s = document.getElementById('rcCourt'); s.value = '${v}'; s.dispatchEvent(new Event('change')); return 0; })()`); await sleep(1500);
    courts.push(await pj(`document.getElementById('gc').__rh.court() + ':' + document.getElementById('gc').__rh.st().info.key.includes('#${v}')`)); await shot('5-cour-' + v); }
  await pj(`(document.getElementById('rcMove').value = '1', 0)`); await key(' '); await sleep(6000); await shot('6-murs-mobiles'); await key('p'); await sleep(300);
  await pj(`(() => { const s = document.getElementById('rcCourt'); s.value = 'auto'; s.dispatchEvent(new Event('change')); document.getElementById('rcMove').value = '0'; return 0; })()`); await sleep(1000);
  if (courts.join() !== 'hex:true,tri:true') throw new Error('cours : ' + courts);
  const errs2 = await pj(`window.__e.join(' | ')`); if (errs2) throw new Error('erreur : ' + errs2);
  return l + ' · fin ' + end + ' · décors ' + bgs.join(', ') + ' · deux étincelles ok · hexagone, triangle, murs mobiles ok';
};
