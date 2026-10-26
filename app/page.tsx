
"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    type: "WEB DEVELOPMENT · INDIVIDUAL",
    title: "Nusa Creative Studio",
    description:
      "An independent creative studio website built with Next.js to present creative services through a considered visual identity, clear content hierarchy, and polished browsing experience.",
    role: "End-to-end website development",
    image: "/images/content/web-1.png",
    link: "https://nusa-creative-studio.vercel.app/",
  },
  {
    number: "02",
    type: "WEB DEVELOPMENT · GROUP PROJECT",
    title: "Parabolic Prediction",
    description:
      "An interactive physics website that lets users explore projectile motion by adjusting parameters such as initial speed, launch angle, and gravity.",
    role: "Frontend contribution — specific features to be confirmed",
    image: "/images/content/web-2.png",
    link: "https://frontend-kel-3.vercel.app/",
  },
  {
    number: "03",
    type: "WEB DEVELOPMENT · GROUP PROJECT",
    title: "Kopi Nusantara",
    description:
      "A responsive website celebrating Indonesian coffee varieties. The home page combines product presentation and brand storytelling with responsive layouts built using Flexbox, Grid, media queries, Bootstrap, and jQuery interactions.",
    role: "Home page development · responsive UI · styling and interactions",
    image: "/images/content/web-3.png",
    link: "https://jquery-kopi-nusantara.vercel.app/",
  },
  {
    number: "04",
    type: "PROMOTIONAL DESIGN",
    title: "BEM FTI — Open PO — Promotional Poster",
    description:
      "Designed a promotional poster to communicate pre-order information and attract potential buyers through clear, engaging visuals.",
    role: "Poster design & visual communication",
    image: "/images/bem/poster-1.jpg",
    link: "",
  },
  {
    number: "05",
    type: "PROMOTIONAL DESIGN",
    title: "BEM FTI — Open PO — Promotional Poster 2",
    description:
      "Designed a promotional poster to communicate pre-order information and attract potential buyers through clear, engaging visuals.",
    role: "Poster design & visual communication",
    image: "/images/bem/poster-2.jpg",
    link: "",
  },
  {
    number: "06",
    type: "CONTENT CREATION",
    title: "Collaborative Short-form Video",
    description:
      "Collaborated on short-form social media content by contributing creative ideas, directing the video, and appearing on camera to bring the concept to life.",
    role: "Creative ideation, directing & on-camera talent",
    image: "/images/bem/video-1.jpeg",
    link: "https://www.instagram.com/reel/DT9V05Fk7dj/?dlrf=MW5wYm5tcnl1MXZoeA==",
  },
  {
    number: "07",
    type: "CONTENT CREATION",
    title: "Collaboration Vlog",
    description:
      "A collaborative vlog created with friends, combining filming, on-camera participation, and storytelling to capture shared experiences in an engaging, relatable format.",
    role: "Content creation, filming & on-camera participation, editing",
    image: "/images/content/vlog-1.jpg",
    link: "https://www.youtube.com/watch?v=C3CnVTc9Nug&t=134s",
  },
];

const capabilities = [
  "Frontend development",
  "Responsive UI",
  "Next.js",
  "Visual communication",
  "Social media content",
  "Creative collaboration",
];

function ProjectImage({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex aspect-[4/3] flex-col justify-between rounded-sm border border-[#e6d9d0] bg-[#f1e7df] p-5">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#94756b]">
          Project preview
        </span>

        <div>
          <span className="font-serif text-3xl italic text-[#a77e76]">
            {title}
          </span>

          <p className="mt-2 text-xs leading-5 text-[#8a766c]">
            Open the live project to explore the website.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] overflow-hidden bg-[#f1e7df]">
      <img
        src={src}
        alt={title}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf8f4] text-[#302a27]">
      {/* Navigation */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="#home"
          className="font-serif text-2xl tracking-tight"
          aria-label="Marshellina home"
        >
          m<span className="italic text-[#bd8884]">.</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex gap-5 text-xs text-[#71665f] sm:gap-8 sm:text-sm"
        >
          <a className="transition hover:text-[#bd8884]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#bd8884]" href="#work">
            Work
          </a>
          <a className="transition hover:text-[#bd8884]" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
      >
        <div>
          <p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#a77c73] sm:text-xs">
            <span className="h-px w-8 bg-[#bd8884]" />
            Personal portfolio · 2026
          </p>

          <h1 className="max-w-3xl font-serif text-6xl leading-[0.99] tracking-[-0.045em] sm:text-7xl lg:text-[90px]">
            A curious mind,
            <br />
            <span className="italic text-[#bd8884]">
              a creative eye.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-sm leading-7 text-[#766b64] sm:text-base sm:leading-8">
            I’m Marshellina Putri Agita, an Information Technology student at
            Universitas Tarumanagara who enjoys exploring the intersection of
            technology and creativity. From building websites to creating
            visual content, I’m interested in turning ideas into thoughtful
            digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#work"
              className="inline-flex items-center gap-4 bg-[#302a27] px-6 py-3.5 text-xs text-white transition hover:bg-[#55463f]"
            >
              Explore selected work <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#about"
              className="text-xs text-[#766b64] underline decoration-[#d8c4ba] underline-offset-4 transition hover:text-[#bd8884]"
            >
              Get to know me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute -right-3 -top-3 h-full w-full border border-[#dfc5ba]" />

          <div className="relative flex aspect-[4/5] flex-col justify-between bg-[#eee1d8] p-7 sm:p-9">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#856d62]">
                A work in progress
              </span>

              <span className="font-serif text-xl italic text-[#bd8884]">
                01
              </span>
            </div>

            <div>
              <p className="font-serif text-5xl leading-tight text-[#785e54] sm:text-6xl">
                ideas,
                <br />
                <span className="italic">in the making.</span>
              </p>

              <div className="mt-6 h-px w-16 bg-[#bd8884]" />

              <p className="mt-4 max-w-xs text-xs leading-6 text-[#856d62]">
                Learning, creating, collaborating — one project at a time.
              </p>
            </div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#856d62]">
              Technology · Design · Content
            </p>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <div className="border-y border-[#e9e0d8]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-10">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a8277]">
            Currently exploring
          </span>

          <div className="flex flex-wrap gap-x-5 gap-y-2 font-serif text-base italic text-[#79665c] sm:gap-x-8 sm:text-lg">
            <span>Web development</span>
            <span>Visual storytelling</span>
            <span>Creative teamwork</span>
          </div>
        </div>
      </div>

      {/* About */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[0.65fr_1.35fr]"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#a77c73]">
            01 / A little about me
          </p>
        </div>

        <div>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Interested in the space where technology meets creativity.
          </h2>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <p className="text-sm leading-7 text-[#766b64]">
              I'm Marshellina Putri Agita, an Information Technology student
              at Universitas Tarumanagara. I enjoy exploring web development,
              visual communication, and creative storytelling, and I like
              learning how thoughtful design can make digital experiences
              more engaging and accessible.
            </p>

            <p className="text-sm leading-7 text-[#766b64]">
              Through individual website projects, group assignments, and
              BEM FTI activities, I've explored both technical and creative
              work. I'm interested in developing my frontend skills while
              continuing to experiment with visual content and collaborative
              projects.
            </p>
          </div>

          <p className="mt-7 border-l border-[#bd8884] pl-4 text-xs leading-6 text-[#8c7b71]">
            Information Technology
            <span className="mx-2 text-[#bd8884]">/</span>
            Universitas Tarumanagara
          </p>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="bg-[#f1eae3]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#a77c73]">
                02 / Selected work
              </p>

              <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                A collection of beginnings.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#766b64]">
              A selection of website development, visual design, and content
              creation projects. Each one represents a chance to learn,
              experiment, and turn ideas into something tangible.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
            {projects.map((project) => (
              <article key={project.number} className="group min-w-0">
                <div className="relative">
                  <ProjectImage
                    src={project.image}
                    title={project.title}
                  />

                  <span className="absolute left-3 top-3 bg-[#faf8f4] px-3 py-1.5 text-[10px] tracking-[0.12em] text-[#766b64]">
                    {project.number}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.17em] text-[#a77c73]">
                    {project.type}
                  </p>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#766b64] underline decoration-[#d8c4ba] underline-offset-4 hover:text-[#bd8884]"
                    >
                      View project ↗
                    </a>
                  ) : (
                    <span className="text-[10px] text-[#9a8980]">
                      Portfolio entry
                    </span>
                  )}
                </div>

                <h3 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[#766b64]">
                  {project.description}
                </p>

                <p className="mt-4 text-[10px] uppercase tracking-[0.13em] text-[#95847a]">
                  Contribution: {project.role}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-12 border-t border-[#dfd2c7] pt-5 text-xs leading-6 text-[#8c7b71]">
            Some projects were completed individually and others
            collaboratively. Contributions are described for each project.
            More work will be added as the portfolio grows.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#a77c73]">
            03 / Areas of interest
          </p>

          <h2 className="mt-4 max-w-xs font-serif text-4xl leading-tight">
            Things I enjoy learning and doing.
          </h2>
        </div>

        <div className="grid content-start sm:grid-cols-2">
          {capabilities.map((capability, index) => (
            <div
              key={capability}
              className="flex items-center gap-4 border-b border-[#e9e0d8] py-5"
            >
              <span className="font-serif text-sm italic text-[#bd8884]">
                0{index + 1}
              </span>

              <span className="text-sm text-[#554b45]">
                {capability}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="bg-[#302a27] text-[#faf8f4]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#d7aaa0]">
            04 / Contact
          </p>

          <div className="mt-7 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <h2 className="max-w-2xl font-serif text-5xl leading-tight sm:text-7xl">
                Have an idea?
                <br />
                <span className="italic text-[#d7aaa0]">
                  Let’s connect.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#d0c2b9]">
                Open to opportunities, creative collaborations, and new
                experiences to learn and grow.
              </p>
            </div>

            <a
              href="mailto:agitaputri05@gmail.com"
              className="inline-flex w-fit items-center gap-4 border border-[#8c756b] px-5 py-3.5 text-xs transition hover:bg-white/10"
            >
              agitaputri05@gmail.com{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-3 border-t border-[#574b44] pt-6 text-[10px] tracking-[0.1em] text-[#c0afa5] sm:flex-row">
            <span>© 2026 Marshellina Putri Agita</span>

            <a href="#home" className="hover:text-white">
              BACK TO TOP ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
