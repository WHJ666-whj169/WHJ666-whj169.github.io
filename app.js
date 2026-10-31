'use strict';
const content = window.PORTFOLIO;
const art = {
  web: '<div class="mini-browser"><div class="mini-bar">•••</div><div class="mini-layout"><div class="mini-lines"><b></b><b></b><i></i><i></i><i></i></div><div class="mini-square"></div></div></div>',
  visual: '<div class="poster-back"></div><div class="poster"><span>VISUAL STUDY</span><b>让想法<br>有形。</b></div>',
  code: '<div class="code-window"><span>// one small idea at a time</span><br>const curiosity = <em>true</em>;<br><br>while (curiosity) {<br>&nbsp; learn();<br>&nbsp; build();<br>&nbsp; <em>repeat();</em><br>}</div>',
  journal: '<div class="notebook"><span>NOTES TO SELF</span><b>慢慢来，<br>也在前进。</b><i></i><i></i></div>'
};
const dialog = document.querySelector('#detail');
function showDetail(item, label) {
  document.querySelector('#detail-label').textContent = label;
  document.querySelector('#detail-title').textContent = item.title;
  document.querySelector('#detail-text').textContent = item.description;
  const list = document.querySelector('#detail-points'); list.replaceChildren();
  item.points.forEach(point => { const li = document.createElement('li'); li.textContent = point; list.append(li); });
  const link = document.querySelector('#detail-link');
  const safeUrl = typeof item.url === 'string' && /^https?:\/\//i.test(item.url);
  link.hidden = !safeUrl;
  if (safeUrl) link.href = item.url; else link.removeAttribute('href');
  dialog.showModal();
}
content.projects.forEach(item => {
  const card = document.createElement('button'); card.className = 'project'; card.dataset.category = item.category;
  const visual = document.createElement('div'); visual.className = 'project-art ' + item.art; visual.setAttribute('aria-hidden','true'); visual.innerHTML = art[item.art] || art.web;
  const info = document.createElement('div'); info.className = 'project-info';
  const title = document.createElement('h3'); title.textContent = item.title;
  const arrow = document.createElement('span'); arrow.textContent = '↗'; arrow.setAttribute('aria-hidden','true'); info.append(title, arrow);
  const meta = document.createElement('p'); meta.className = 'project-meta'; meta.textContent = item.meta;
  card.append(visual, info, meta); card.addEventListener('click', () => showDetail(item,item.placeholder ? '作品预留 / 整理建议' : 'PROJECT / 作品详情')); document.querySelector('#projects').append(card);
});
content.notes.forEach(item => {
  const row = document.createElement('button'); row.className = 'note-row';
  const type = document.createElement('span'); type.className = 'note-type'; type.textContent = item.type;
  const title = document.createElement('h3'); title.textContent = item.title;
  const arrow = document.createElement('span'); arrow.textContent = '↗'; arrow.setAttribute('aria-hidden','true');
  row.append(type,title,arrow); row.addEventListener('click', () => showDetail(item,'FIELD NOTES / 写作建议')); document.querySelector('#notes-list').append(row);
});
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(other => { const selected = other === button; other.classList.toggle('active',selected); other.setAttribute('aria-pressed',String(selected)); });
  document.querySelectorAll('.project').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
document.querySelector('.close').addEventListener('click',() => dialog.close());
dialog.addEventListener('click',e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
const themeButton = document.querySelector('#theme-toggle');
function setTheme(dark) { document.body.classList.toggle('dark-mode',dark); themeButton.setAttribute('aria-label',dark ? '切换浅色模式' : '切换深色模式'); themeButton.setAttribute('aria-pressed',String(dark)); document.querySelector('meta[name="theme-color"]').content = dark ? '#20251f' : '#f6f5f0'; }
try { setTheme(localStorage.getItem('portfolio-theme') === 'dark'); } catch { setTheme(false); }
themeButton.addEventListener('click',() => { const dark = !document.body.classList.contains('dark-mode'); setTheme(dark); try { localStorage.setItem('portfolio-theme',dark ? 'dark' : 'light'); } catch {} });
document.querySelector('#year').textContent = new Date().getFullYear();
