import { useState, useEffect } from 'react'
import { CONFIG } from './config'
import './index.css'

const LANG_COLORS = {
  Python:     '#3572A5',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Rust:       '#DEA584',
  Go:         '#00ADD8',
  Java:       '#B07219',
  'C++':      '#F34B7D',
  HTML:       '#E34C26',
  CSS:        '#563D7C',
  Shell:      '#89E051',
  Jupyter:    '#DA5B0B',
}

let _io = null
function getIO() {
  if (!_io) {
    _io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            _io.unobserve(e.target)
          }
        }),
      { threshold: 0.1 }
    )
  }
  return _io
}

function useCursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0, raf
    const onMove = e => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'; dot.style.top = my + 'px'
    }
    const tick = () => {
      rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      raf = requestAnimationFrame(tick)
    }
    const onOver = e => { if (e.target.closest('a,button,[data-hover]')) document.body.classList.add('on-hover') }
    const onOut  = e => { if (e.target.closest('a,button,[data-hover]')) document.body.classList.remove('on-hover') }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)
    raf = requestAnimationFrame(tick)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      cancelAnimationFrame(raf)
    }
  }, [])
}

function useScrollReveal() {
  useEffect(() => {
    const obs = getIO()
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el))
  })
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">{CONFIG.fullName}</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {CONFIG.available && (
        <div className="nav-badge">
          <span className="pulse-dot" />
          Available for work
        </div>
      )}
    </nav>
  )
}

function Hero() {
  const parts = CONFIG.fullName.split(' ')
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-inner">
        {CONFIG.available && (
          <div className="hero-pill">
            <span className="pulse-dot" />
            Available for work
          </div>
        )}
        <h1 className="hero-name">
          {parts.map((part, i) => (
            <span
              key={i}
              className={i === parts.length - 1 ? 'name-accent' : ''}
              style={{ animationDelay: `${0.25 + i * 0.12}s` }}
            >
              {part}
            </span>
          ))}
        </h1>
        <p className="hero-role">{CONFIG.role}</p>
        <p className="hero-desc">{CONFIG.tagline}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-dark">View Projects →</a>
          <a href="#contact"  className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const names = CONFIG.skillGroups.flatMap(g => g.items.map(s => s.name))
  const items = [...names, ...names]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((name, i) => (
          <div key={i} className="marquee-item">
            {name}<span className="sep" />
          </div>
        ))}
      </div>
    </div>
  )
}

function About() {
  const { intro, paragraphs, photo, highlights } = CONFIG.aboutSection
  return (
    <section className="about-section" id="about">
      <div className="about-text reveal">
        <div className="section-tag">About Me</div>
        <p className="about-intro">{intro}</p>
        {paragraphs.map((p, i) => (
          <p key={i} className="about-para">{p}</p>
        ))}
        <div className="about-highlights">
          {highlights.map((h, i) => (
            <div key={i} className="highlight-card" data-hover="true">
              <div className="highlight-title">{h.label}</div>
              <div className="highlight-desc">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-photo reveal reveal-d2">
        <img
          src={photo}
          alt={CONFIG.fullName}
          className="about-img"
          onError={e => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextSibling.style.display = 'flex'
          }}
        />
        <div className="about-img-placeholder" style={{ display: 'none' }}>
          <span>{CONFIG.name.charAt(0)}</span>
          <p>Add photo.jpg to public/</p>
        </div>
      </div>
    </section>
  )
}

function timeAgo(iso) {
  const d = Math.floor((Date.now() - new Date(iso)) / 86_400_000)
  if (d < 1)   return 'today'
  if (d < 30)  return `${d}d ago`
  if (d < 365) return `${Math.floor(d / 30)}mo ago`
  return `${Math.floor(d / 365)}y ago`
}

function FeaturedCard({ proj, index }) {
  const delay = index > 0 ? ` reveal-d${Math.min(index, 4)}` : ''
  return (
    <div className={`feat-card reveal${delay}`} data-hover="true">
      <div className="feat-header">
        <span className="feat-num">{String(index + 1).padStart(2, '0')}</span>
        {proj.private && <span className="feat-badge">Private</span>}
      </div>

      <div className="feat-body">
        {proj.subtitle && <p className="feat-subtitle">{proj.subtitle}</p>}
        <h3 className="feat-title">{proj.title}</h3>
        <p className="feat-desc">{proj.description}</p>

        {proj.bullets?.length > 0 && (
          <ul className="feat-bullets">
            {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}

        <div className="feat-tags">
          {proj.tags.map(t => <span key={t} className="feat-tag">{t}</span>)}
        </div>
      </div>

      <div className="feat-footer">
        <a
          href={proj.repoUrl ?? `https://github.com/${CONFIG.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`feat-btn feat-btn-primary${proj.private && !proj.repoUrl ? ' feat-btn-dim' : ''}`}
        >
          GitHub →
        </a>
        <a
          href={`mailto:${CONFIG.email}?subject=Demo request: ${proj.title}`}
          className="feat-btn feat-btn-secondary"
        >
          Demo on request
        </a>
      </div>
    </div>
  )
}

function RepoCard({ repo, index }) {
  const delay = index % 3 === 1 ? ' reveal-d1' : index % 3 === 2 ? ' reveal-d2' : ''
  return (
    <a
      key={repo.id}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`proj-card reveal${delay}`}
      data-hover="true"
    >
      <div className="proj-header">
        <span className="proj-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="proj-arrow">↗</span>
      </div>
      <h3 className="proj-name">{repo.name}</h3>
      <p className="proj-desc">{repo.description || 'No description provided.'}</p>
      <div className="proj-meta">
        {repo.language && (
          <span className="proj-lang">
            <span className="lang-dot" style={{ background: LANG_COLORS[repo.language] ?? '#888' }} />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && <span className="proj-stars">★ {repo.stargazers_count}</span>}
        {repo.updated_at && <span className="proj-time">{timeAgo(repo.updated_at)}</span>}
      </div>
      {repo.topics?.length > 0 && (
        <div className="proj-topics">
          {repo.topics.slice(0, 3).map(t => <span key={t} className="proj-topic">{t}</span>)}
        </div>
      )}
    </a>
  )
}

function Projects() {
  const [repos,   setRepos]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)
  const useFeatured = CONFIG.pinnedProjects.length > 0

  useEffect(() => {
    if (useFeatured) { setLoading(false); return }
    fetch(`https://api.github.com/users/${CONFIG.github}/repos?sort=updated&per_page=12`)
      .then(r => { if (!r.ok) throw new Error(`${r.status}`); return r.json() })
      .then(data => setRepos(
        data.filter(r => !r.fork).sort((a,b) => b.stargazers_count - a.stargazers_count).slice(0,6)
      ))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="section" id="projects">
      <div className="section-header reveal">
        <div>
          <div className="section-tag">GitHub Projects</div>
          <h2 className="section-heading">Featured <em>work</em></h2>
          {useFeatured && (
            <p className="section-sub">
              Flagship systems I'm building. Repositories are private; demos available on request.
            </p>
          )}
        </div>
        <a
          href={`https://github.com/${CONFIG.github}`}
          target="_blank" rel="noopener noreferrer"
          className="arrow-link"
        >
          All repos →
        </a>
      </div>

      {useFeatured ? (
        <div className="feat-grid">
          {CONFIG.pinnedProjects.map((proj, i) => (
            <FeaturedCard key={proj.id} proj={proj} index={i} />
          ))}
        </div>
      ) : (
        <>
          {loading && <div className="load-state"><span className="loader" /></div>}
          {error   && (
            <p className="err-state">
              Could not fetch repos — add projects to <code>pinnedProjects</code> in{' '}
              <code>config.js</code>.
            </p>
          )}
          {!loading && !error && (
            <div className="projects-grid">
              {repos.map((repo, i) => <RepoCard key={repo.id} repo={repo} index={i} />)}
            </div>
          )}
        </>
      )}
    </section>
  )
}

function Skills() {
  return (
    <section className="section section-dark" id="skills">
      <div className="reveal">
        <div className="section-tag">Expertise</div>
        <h2 className="section-heading">Tools &amp; <em>skills</em></h2>
      </div>
      <div className="skill-groups">
        {CONFIG.skillGroups.map((group, gi) => (
          <div
            key={gi}
            className={`skill-group reveal${gi ? ' reveal-d' + Math.min(gi, 4) : ''}${gi === CONFIG.skillGroups.length - 1 ? ' skill-group--full' : ''}`}
          >
            <div className="skill-group-label">{group.label}</div>
            <div className="skill-chips">
              {group.items.map((sk, si) => (
                <div key={si} className="skill-chip" data-hover="true">
                  {sk.icon && <span className="skill-icon">{sk.icon}</span>}
                  <span>{sk.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-word">HELLO</div>
      <div className="contact-inner reveal">
        <h2 className="contact-title">
          Let's<br />
          <span className="accent-line">Build</span><br />
          Together
        </h2>
        <br />
        <a href={`mailto:${CONFIG.email}`} className="contact-email">{CONFIG.email}</a>
        <br /><br />
        <a href={`mailto:${CONFIG.email}`} className="btn btn-dark">Send a Message →</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <span className="ft-logo">{CONFIG.fullName}</span>
      <span className="ft-copy">© {new Date().getFullYear()} {CONFIG.fullName}</span>
      <ul className="ft-links">
        <li>
          <a href={`https://github.com/${CONFIG.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        {CONFIG.linkedin && (
          <li><a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        )}
        {CONFIG.twitter && (
          <li><a href={CONFIG.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
        )}
      </ul>
    </footer>
  )
}

export default function App() {
  useCursor()
  useScrollReveal()
  return (
    <>
      <div className="grain" />
      <div id="cursor" />
      <div id="cursor-ring" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
