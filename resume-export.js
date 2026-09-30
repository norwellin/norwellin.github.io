/* DOCX export reads the same content.js objects as the website, at click time.
   docx 9.6.1 is vendored locally: no CDN, server or account is needed. */
window.ResumeExport = (() => {
  'use strict';
  const labels = {
    zh: {resume:'履歷',personal:'個人資料',education:'學歷',skills:'技術與工具',about:'自我介紹',projects:'專案',name:'姓名',email:'電子郵件',phone:'電話',location:'居住地',website:'個人網站',generating:'正在產生 Word 履歷…',done:'Word 履歷已產生，請查看瀏覽器下載項目。',error:'履歷產生失敗，請重新整理頁面後再試一次。'},
    en: {resume:'Resume',personal:'Personal information',education:'Education',skills:'Technical skills and tools',about:'About me',projects:'Projects',name:'Name',email:'Email',phone:'Phone',location:'Location',website:'Portfolio',generating:'Generating Word resume…',done:'Word resume generated. Check your browser downloads.',error:'Could not generate the resume. Refresh the page and try again.'}
  };
  function build(language, data = window) {
    const d = window.docx;
    if (!d) throw new Error('DOCX library is unavailable');
    const lang = language === 'en' ? 'en' : 'zh';
    const l = labels[lang], c = data.COPY[lang], profile = data.PROFILE;
    const t = value => typeof value === 'string' ? value : value?.[lang] || '';
    const name = t(profile.name);
    const {Document,Paragraph,TextRun,ExternalHyperlink,Header,Footer,PageNumber,HeadingLevel,AlignmentType} = d;
    const run = (text, options={}) => new TextRun({text:String(text ?? ''),...options});
    const p = (text, options={}) => new Paragraph({children:[run(text)],...options});
    const h = (text, level=2, options={}) => p(text,{heading:HeadingLevel['HEADING_'+level],...options});
    const link = (label,url) => new Paragraph({children:[run(label+'  ',{bold:true}),new ExternalHyperlink({link:url,children:[run(url,{style:'Hyperlink'})]})]});
    const children = [p(name,{heading:HeadingLevel.TITLE}),p(c.role,{style:'Subtitle'}),h('01  '+l.personal,1)];
    children.push(p(l.name+'：'+name));
    for (const key of ['email','phone','location']) children.push(p(l[key]+'：'+t(profile[key])));
    for (const [key,label] of [['website',l.website],['linkedin','LinkedIn'],['github','GitHub'],['job104','104']]) {
      children.push(profile[key] ? link(label,profile[key]) : p(label+'：'));
    }
    children.push(h('02  '+l.education,1));
    data.EDUCATION.forEach(e=>children.push(h(t(e.school)),p(e.dates,{style:'Meta'}),p(t(e.degree))));
    children.push(h('03  '+l.skills,1,{pageBreakBefore:true}));
    data.SKILLS.forEach(s=>children.push(h(t(s.title),3),p(s.items)));
    children.push(h('04  '+l.about,1),p(c.aboutBody),h(c.personalNote,3),p(t(profile.introduction)));
    children.push(h('05  '+l.projects,1,{pageBreakBefore:true}));
    // Preserve website group order, including future groups and ungrouped projects.
    const groups = [...new Set([...c.groups.map((_,i)=>i),...data.PROJECTS.map(project=>project.group)])];
    for (const group of groups) {
      for (const project of data.PROJECTS.filter(project=>project.group===group)) {
        children.push(p([c.groups[group],project.tag].filter(Boolean).join('  ·  '),{style:'Meta',spacing:{before:360,after:100},keepNext:true}));
        children.push(h(t(project.title),2));
        if(project.award) children.push(p(t(project.award),{style:'Award'}));
        children.push(p(t(project.summary)),p(project.tools.join(' · '),{style:'Tools'}));
        if(project.highlight){
          if(project.highlightTitle) children.push(h(t(project.highlightTitle),3));
          children.push(p(t(project.highlight)));
        }
        if(project.sections){
          for(const section of project.sections){
            children.push(h(t(section.title),3));
            (section.paragraphs||[]).forEach(value=>children.push(p(t(value))));
            (section.items||[]).forEach(value=>children.push(p(t(value),{bullet:{level:0}})));
            (section.afterParagraphs||[]).forEach(value=>children.push(p(t(value))));
          }
        } else {
          for(const [key,label] of [['background',c.background],['result',c.result],['contribution',c.contribution]]) {
            children.push(h(label,3),p(project[key]?t(project[key]):key==='contribution'?c.teamPending:''));
          }
        }
        if(project.source) children.push(link(c.source.replace(' ↗',''),project.source));
      }
    }
    return new Document({
      creator:name,title:name+' '+l.resume,description:c.intro,
      styles:{default:{document:{run:{font:{ascii:'Calibri',hAnsi:'Calibri',eastAsia:'Microsoft JhengHei'},size:22,color:'30242E',language:{value:lang==='zh'?'zh-TW':'en-US',eastAsia:'zh-TW'}},paragraph:{spacing:{after:120,line:300},widowControl:true}}},paragraphStyles:[
        {id:'Title',name:'Title',basedOn:'Normal',next:'Normal',run:{size:52,bold:true,color:'000000'},paragraph:{spacing:{after:160},keepNext:true}},
        {id:'Subtitle',name:'Subtitle',basedOn:'Normal',run:{size:22,color:'786771'},paragraph:{spacing:{after:240},keepNext:true}},
        {id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',run:{size:30,bold:true,color:'873B5B'},paragraph:{spacing:{before:240,after:160},keepNext:true}},
        {id:'Heading2',name:'Heading 2',basedOn:'Normal',next:'Normal',run:{size:28,bold:true,color:'30242E'},paragraph:{spacing:{before:160,after:120},keepNext:true}},
        {id:'Heading3',name:'Heading 3',basedOn:'Normal',next:'Normal',run:{size:23,bold:true,color:'873B5B'},paragraph:{spacing:{before:180,after:80},keepNext:true}},
        {id:'Meta',name:'Metadata',basedOn:'Normal',run:{size:18,color:'786771'},paragraph:{spacing:{after:100},keepNext:true}},
        {id:'Tools',name:'Technologies',basedOn:'Normal',run:{size:20,color:'873B5B'},paragraph:{spacing:{after:180}}},
        {id:'Award',name:'Award',basedOn:'Normal',run:{size:23,bold:true,color:'873B5B'},paragraph:{spacing:{after:160},keepNext:true}}
      ],characterStyles:[{id:'Hyperlink',name:'Hyperlink',run:{color:'873B5B',size:20}}]},
      sections:[{properties:{page:{size:{width:12240,height:15840},margin:{top:900,bottom:900,left:1080,right:1080,header:400,footer:400}}},
        headers:{default:new Header({children:[p(name+'  /  '+l.resume,{style:'Meta'})]})},
        footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[run(name+'   ·   ',{size:18,color:'786771'}),new TextRun({children:[PageNumber.CURRENT],size:18,color:'786771'})]})]})},children}]
    });
  }
  async function download(language){
    const lang=language==='en'?'en':'zh';
    const blob=await window.docx.Packer.toBlob(build(lang));
    const url=URL.createObjectURL(blob), a=document.createElement('a');
    a.href=url;
    const name=window.PROFILE.name?.[lang]||'Resume';
    a.download=name.replace(/[<>:"/\\|?*\x00-\x1f]/g,'_')+'_Resume_'+lang+'.docx';
    document.body.append(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),60000);
  }
  return {build,download,labels};
})();
