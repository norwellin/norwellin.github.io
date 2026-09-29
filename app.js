(() => {
  'use strict';
  const ids=['home','about','projects','skills','education','contact'];
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let language='zh';
  try { language=localStorage.getItem('portfolio-language')==='en'?'en':'zh'; } catch {}
  const text=value=>value?.[language] || '';
  function detailContent(project,c){
    if(project.sections){
      return project.sections.map(section=>`<h4>${esc(text(section.title))}</h4>${(section.paragraphs||[]).map(p=>`<p>${esc(text(p))}</p>`).join('')}${section.items?`<ul>${section.items.map(item=>`<li>${esc(text(item))}</li>`).join('')}</ul>`:''}`).join('');
    }
    return `<h4>${c.background}</h4><p>${esc(text(project.background))}</p><h4>${c.result}</h4><p>${esc(text(project.result))}</p><h4>${c.contribution}</h4><p>${esc(project.contribution?text(project.contribution):c.teamPending)}</p>`;
  }
  function card(project,feature){
    const c=COPY[language];
    const visual=project.image?`<img src="./assets/${esc(project.image)}" alt="${esc(text(project.title))}" loading="lazy" width="1000" height="650">`:'<div class="speech-diagram" role="img" aria-label="Whisper speech to text and gTTS text to speech API"><span>Audio</span><b>⇄</b><span>Flask API<br>Whisper · gTTS</span><b>⇄</b><span>Text</span></div>';
    return `<article class="project-card ${feature?'feature-card':''}" id="project-${esc(project.id)}"><div class="project-visual">${visual}</div><div class="project-body"><span class="project-tag">${esc(project.tag)}</span><h3>${esc(text(project.title))}</h3><p class="project-description">${esc(text(project.summary))}</p><div class="tags">${project.tools.map(t=>`<span>${esc(t)}</span>`).join('')}</div>${project.highlight?`<div class="outcome">${project.highlightTitle?`<h4 class="outcome-title">${esc(text(project.highlightTitle))}</h4>`:''}<p>${esc(text(project.highlight))}</p></div>`:''}<details><summary>${c.details}</summary><div class="detail-content">${detailContent(project,c)}</div></details>${project.source?`<a class="source-link" href="${esc(project.source)}" target="_blank" rel="noopener noreferrer">${c.source}</a>`:''}</div></article>`;
  }
  function render(){
    const opened=[...document.querySelectorAll('details[open]')].map(d=>d.closest('article').id);
    const c=COPY[language];
    document.documentElement.lang=language==='zh'?'zh-Hant':'en';
    document.title=language==='zh'?'林沁融 Chin-Jung Lin — 個人履歷與作品集':'Chin-Jung Lin — Resume & Portfolio';
    document.querySelector('meta[name="description"]').content=c.intro;
    document.querySelectorAll('[data-t]').forEach(el=>el.textContent=c[el.dataset.t]);
    document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===language)));
    document.getElementById('hero-name').textContent=language==='zh'?'林沁融':'Hello, I’m';
    document.getElementById('personal-introduction').textContent=text(PROFILE.introduction);
    const nav=document.getElementById('section-nav');nav.setAttribute('aria-label',language==='zh'?'區塊導覽':'Page sections');
    nav.innerHTML=ids.map((id,i)=>`<a href="#${id}" data-section="${id}">${c.nav[i]}</a>`).join('');
    document.getElementById('project-list').innerHTML=c.groups.map((group,i)=>{
      const projects=PROJECTS.filter(p=>p.group===i);
      return `<div class="project-group"><h3 class="group-title">${esc(group)}<span class="group-count">${String(projects.length).padStart(2,'0')}</span></h3><div class="${projects.length===1?'':'project-grid'}">${projects.map(p=>card(p,projects.length===1)).join('')}</div></div>`;
    }).join('');
    opened.forEach(id=>{const d=document.querySelector(`#${id} details`);if(d)d.open=true;});
    document.getElementById('skills-grid').innerHTML=SKILLS.map(s=>`<div class="skill-group"><h3>${esc(text(s.title))}</h3><p>${esc(s.items)}</p></div>`).join('');
    document.getElementById('education-list').innerHTML=EDUCATION.map(e=>`<article class="education-item"><time>${esc(e.dates)}</time><h3>${esc(text(e.school))}</h3><p>${esc(text(e.degree))}</p></article>`).join('');
    updateNav();
  }
  function updateNav(){
    const current=ids.reduce((last,id)=>document.getElementById(id).getBoundingClientRect().top<window.innerHeight*.4?id:last,'home');
    document.querySelectorAll('[data-section]').forEach(a=>{const active=a.dataset.section===current;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  }
  document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{language=button.dataset.lang;try{localStorage.setItem('portfolio-language',language);}catch{}render();}));
  for(const field of ['linkedin','github','job104']){
    const link=document.getElementById(field);
    if(PROFILE[field]){link.href=PROFILE[field];link.hidden=false;if(field==='job104')document.getElementById('job104-pending').hidden=true;}
    else link.hidden=true;
  }
  if(PROFILE.portrait){const img=document.getElementById('portrait');img.onload=()=>{img.hidden=false;document.getElementById('portrait-placeholder').hidden=true;};img.src=PROFILE.portrait;}
  if(PROFILE.cv){const link=document.getElementById('cv-download');link.href=PROFILE.cv;link.hidden=false;document.getElementById('cv-pending').hidden=true;}
  document.getElementById('year').textContent=new Date().getFullYear();
  let scheduled=false;window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(()=>{updateNav();scheduled=false;});}},{passive:true});
  render();
})();
