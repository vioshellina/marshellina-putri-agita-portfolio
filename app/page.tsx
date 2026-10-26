
const projects = [
  {
    number: "01",
    category: "BEM FTI UNTAR · VISUAL DESIGN",
    title: "Promotional Poster Design",
    description:
      "Creating promotional visuals for student organization programs, with a focus on clear communication and engaging layouts.",
    image: "/images/bem/poster-1.jpg",
    link: "",
    tags: ["Visual Design", "Promotion", "BEM FTI"],
  },
  {
    number: "02",
    category: "BEM FTI UNTAR · VISUAL DESIGN",
    title: "Social Media Campaign",
    description:
      "Designing visual materials to support event promotion and communicate information to the student community.",
    image: "/images/bem/poster-2.jpg",
    link: "",
    tags: ["Social Media", "Graphic Design", "Teamwork"],
  },
  {
    number: "03",
    category: "CONTENT CREATION · TIKTOK",
    title: "Short-form Video Content",
    description:
      "Collaborating on TikTok content through creative ideas, filming, and on-camera participation.",
    image: "",
    link: "",
    tags: ["Content Creation", "Filming", "Collaboration"],
  },
  {
    number: "04",
    category: "CONTENT CREATION · LIVE",
    title: "TikTok Live Experience",
    description:
      "Developing communication skills and confidence through live content and audience interaction.",
    image: "",
    link: "",
    tags: ["Communication", "Live Hosting", "Engagement"],
  },
];

const skills = [
  "Social Media Content",
  "Visual Communication",
  "Video Production",
  "Creative Thinking",
  "Team Collaboration",
  "Communication",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#292622]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="text-sm font-semibold tracking-[0.2em]">
          MP<span className="text-[#c78383]">.</span>
        </a>
        <div className="flex gap-5 text-xs text-[#716a64] sm:gap-8 sm:text-sm">
          <a href="#about" className="transition hover:text-[#c78383]">
            About
          </a>
          <a href="#work" className="transition hover:text-[#c78383]">
            Work
          </a>
          <a href="#skills" className="transition hover:text-[#c78383]">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-[#c78383]">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.3fr_0.7fr] md:items-center md:px-10 md:pb-32 md:pt-24">
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#b47575]">
            Creative Portfolio · 2026
          </p>
          <h1 className="max-w-2xl text-5xl font-medium leading-[1.08] tracking-[-0.05em] sm:text-7xl">
            Ideas into
            <br />
            <span className="font-serif italic text-[#c78383]">
              experiences.
            </span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-[#716a64]">
            Hi, I’m Marshellina — an Information Technology student
            interested in creative content, visual communication, and
            digital experiences that connect with people.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-[#292622] px-6 py-3 text-sm text-white transition hover:bg-[#514943]"
            >
              Explore my work ↗
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#ded7cf] px-6 py-3 text-sm transition hover:border-[#c78383]"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-[180px_180px_24px_24px] border border-[#e7c9c5]" />
          <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[180px_180px_24px_24px] bg-[#eadbd3] p-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#79655c]">
              A little bit of everything
            </span>
            <div>
              <p className="font-serif text-5xl italic text-[#8e6660]">
                curious
              </p>
              <p className="mt-2 text-sm text-[#79655c]">
                Creative mind. Digital world.
              </p>
            </div>
            <span className="self-end text-4xl text-[#b47575]">✳</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-[#eae4dd] bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#b47575]">
            01 / About me
          </p>
          <div>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              A tech student with an eye for creativity.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#716a64]">
              I enjoy working where creativity meets communication. Through
              student organization projects and short-form content
              collaborations, I have explored visual design, content
              creation, and working with a team to bring ideas to life.
              I’m eager to keep learning and contribute to creative
              projects in a professional environment.
            </p>
            <p className="mt-4 text-sm text-[#9a8e84]">
              Information Technology · Universitas Tarumanagara
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#b47575]">
              02 / Selected work
            </p>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Things I’ve been creating.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#8b8178]">
            A growing collection of visual work, content, and collaborations.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-[#eae4dd] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c78383]/10"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs text-[#b47575]">
                  {project.number}
                </span>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                    className="text-xl text-[#b7aaa0] transition hover:text-[#c78383]"
                  >
                    ↗
                  </a>
                ) : (
                  <span className="text-xl text-[#b7aaa0]">✳</span>
                )}
              </div>

              {project.image ? (
                <a
                  href={project.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View image for ${project.title}`}
                  className="mb-5 block overflow-hidden rounded-xl bg-[#f5f0eb]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </a>
              ) : (
                <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-xl bg-[#f0e4dd] p-5 text-center">
                  <span className="font-serif text-2xl italic text-[#a16e6a]">
                    Content & creativity
                  </span>
                </div>
              )}

              <p className="mb-2 text-[10px] font-medium tracking-[0.12em] text-[#9a8e84]">
                {project.category}
              </p>
              <h3 className="text-lg font-medium leading-snug">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#716a64]">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f5f0eb] px-2.5 py-1.5 text-[10px] text-[#796f65]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-[#9a8e84]">
          Selected work and experience overview. Additional project links
          and samples can be shared upon request.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-[#eee4dc]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-20">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#a16e6a]">
              03 / What I bring
            </p>
            <h2 className="text-3xl font-medium tracking-tight">
              Creative, curious, collaborative.
            </h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#d6c5ba] bg-white/50 px-5 py-3 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer
        id="contact"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#b47575]">
          04 / Get in touch
        </p>
        <h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
          Let’s create something
          <span className="font-serif italic text-[#c78383]">
            {" "}meaningful.
          </span>
        </h2>
        <p className="mt-5 max-w-lg leading-7 text-[#716a64]">
          I’m open to creative collaborations, content projects, and
          opportunities to learn and grow.
        </p>
        <a
          href="mailto:YOUR_EMAIL@example.com"
          className="mt-7 inline-block rounded-full bg-[#292622] px-6 py-3 text-sm text-white transition hover:bg-[#514943]"
        >
          Say hello ↗
        </a>

        <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-[#eae4dd] pt-6 text-xs text-[#9a8e84]">
          <span>© 2026 Marshellina Putri Agita</span>
          <span>Made with curiosity & Next.js</span>
        </div>
      </footer>
    </main>
  );
}
