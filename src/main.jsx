import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile, projects, experience, skillGroups, recognition } from './data';
import './styles.css';

const Arrow = () => <span aria-hidden="true">↗</span>;
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All work');
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); }
    catch { setCopied(false); }
  }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header><a className="wordmark" href="#home" aria-label="Aryan Luitel home">al<span>.</span></a>
      <nav aria-label="Main navigation" className={menuOpen ? 'open' : ''}>
        {['About', 'Experience', 'Projects'].map(item => <a key={item} href={'#' + item.toLowerCase()} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow/></a>
      </nav><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
    </header>
    <main id="main">
      <section className="hero" id="home">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot"/> OPEN TO SUMMER 2027 INTERNSHIPS</p>
          <h1>Building things<br/>that <em>make<br/>a difference.</em></h1>
          <p className="intro">Hi, I’m Aryan. A software engineer turning ideas into useful products through code, data, and AI.</p>
          <div className="actions"><a className="button dark" href="#projects">Explore my work <span>↘</span></a><a className="text-link" href="resume.html" target="_blank" rel="noreferrer">View résumé <Arrow/></a></div>
          <div className="hero-note"><span>BASED IN HUNTSVILLE, AL</span><span>SCROLL TO EXPLORE ↓</span></div>
        </div>
        <div className="portrait-wrap"><div className="portrait-label">THE PERSON BEHIND THE CODE</div><img className="portrait" src="avatar.jpg?v=2" alt="Aryan Luitel"/><div className="portrait-caption"><span>Aryan Luitel</span><span>Engineer. Learner. Builder.</span></div><div className="floating-note"><span className="asterisk">✳</span><span>Curiosity in.<br/>Possibility out.</span></div></div>
      </section>
      <div className="credentials"><span>A LITTLE CONTEXT</span><p>Previously at <strong>Adobe</strong></p><p>Studying at <strong>Alabama A&M</strong></p><p>Focused on <strong>Software + AI</strong></p></div>
      <section className="about section" id="about"><div><p className="eyebrow">01 / ABOUT ME</p><h2>Thoughtful code.<br/><em>Real-world impact.</em></h2></div><div className="about-copy"><p>I’m a Computer Science student at Alabama A&M University, graduating in December 2027. I enjoy the space where software engineering meets intelligent systems.</p><p>From building AI editing workflows at Adobe to experimenting with quantum computing and multi-agent research tools, I enjoy learning something difficult and making it useful. As a teaching assistant, I also support student-athletes in programming, algorithms, and Calculus.</p><div className="stats"><div><strong>3.95<span>/4.0</span></strong><small>GPA · ALABAMA A&M</small></div><div><strong>2027</strong><small>EXPECTED GRADUATION</small></div></div><div className="skills"><p className="eyebrow">MY EVERYDAY TOOLKIT</p>{skillGroups.map(group=><div className="skill-group" key={group.title}><h3>{group.title}</h3><div>{group.items.map(skill=><span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>
      <section className="section experience" id="experience"><div className="section-heading"><div><p className="eyebrow">02 / THE JOURNEY</p><h2>Learning by <em>building.</em></h2></div><a className="text-link" href="resume.html" target="_blank" rel="noreferrer">Full résumé <Arrow/></a></div><div className="timeline">{experience.map((job,i)=><article className="job" key={job.company}><div className="job-company"><span className="job-index">0{i+1}</span><a className="job-brand" href={job.url} target="_blank" rel="noreferrer"><img className="company-logo" src={job.logo} alt="" /><h3>{job.company}</h3></a><small>{job.date}</small></div><div><h4>{job.role}</h4><p>{job.description}</p><div className="tags">{job.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>
      <section className="section projects" id="projects"><div className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Ideas, <em>in motion.</em></h2></div><div className="filters" role="group" aria-label="Filter projects">{['All work', 'Full stack', 'AI & Data'].map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div></div><div className="project-grid" aria-live="polite">{projects.filter(p=>filter==='All work'||p.category===filter).map(p=><article className="project" key={p.name}><div className={'project-art '+p.visual} aria-hidden="true"><span className="art-top">{p.category} / {p.number}</span>{p.visual==='campus'?<div className="campus-graphic"><span>c<span className="lime">↗</span></span><div className="mini-cards"><i/><i/><i/></div></div>:p.visual==='research'?<div className="research-graphic"><span>Plan</span><span>Retrieve</span><span>Reflect</span></div>:p.visual==='movies'?<div className="movie-graphic"><span>▶</span><span>▶</span><span>▶</span></div>:p.visual==='nepal'?<div className="nepal-graphic"><span>न</span><span className="peak"/><span className="peak mid"/><span className="peak tall"/></div>:<div className="transit-graphic"><i/><i/><i/><span>→</span></div>}<strong>{p.caption}</strong></div><div className="project-meta"><h3>{p.name}</h3><span>{p.status}</span></div><p>{p.description}</p><div className="tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div>{p.link?<a className="text-link project-link" href={p.link} target="_blank" rel="noreferrer">View on GitHub <Arrow/></a>:null}</article>)}</div><a className="text-link github-link" href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <Arrow/></a></section>
      <section className="section recognition" id="recognition"><p className="eyebrow">04 / BEYOND THE CODE</p><h2>Leadership & <em>recognition.</em></h2><div className="recognition-grid">{recognition.map(item=><article key={item.title}><p className="eyebrow">{item.date}</p><h3>{item.title}</h3><div className="recognition-org">{item.logo?<a href={item.url} target="_blank" rel="noreferrer" aria-label={item.organization + ' website'}><img className="company-logo" src={item.logo} alt="" /></a>:null}{item.url?<a className="org-link" href={item.url} target="_blank" rel="noreferrer">{item.organization}</a>:<p>{item.organization}</p>}</div></article>)}</div><div className="coursework"><h3>Selected coursework</h3><p>Data Structures · Theory of Algorithms · Operating Systems · Software Engineering · Machine Learning · Introduction to Databases · Distributed Systems · Object-Oriented Programming · Computer Organization · Discrete Structures · Computer Architecture</p></div></section>
      <section className="contact section" id="contact"><p className="eyebrow">05 / WHAT’S NEXT?</p><h2>Let’s build<br/><em>something good.</em> <span>↗</span></h2><div className="contact-bottom"><p>Have an opportunity, an idea, or just want to say hello?<br/>I’d love to hear from you.</p><a className="button dark" href={'mailto:'+profile.email}>Say hello <Arrow/></a></div><div className="contact-links"><a href={'mailto:'+profile.email}>{profile.email}</a><button onClick={copyEmail}>Copy email</button><span role="status">{copied ? 'Email copied!' : ''}</span></div></section>
    </main><footer><a className="wordmark" href="#home">al<span>.</span></a><span>© {new Date().getFullYear()} Aryan Luitel</span><div><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow/></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow/></a><a href="#home">Back to top ↑</a></div></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
