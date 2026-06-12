import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function createProjectItems(folder, total, label = "Peça", type = "Projeto") {
  return Array.from({ length: total }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      title: `${label} ${number}`,
      type,
      src: `/assets/${folder}/item-${number}.webp`,
    };
  });
}

function customProjectItems(folder, items) {
  return items.map((item, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      title: item.title,
      type: item.type,
      src: item.src || `/assets/${folder}/item-${number}.webp`,
      videoUrl: item.videoUrl || null,
    };
  });
}

function createIdentityProjects() {
  return [
    {
      id: "gael",
      title: "Gael Consultor Imobiliário",
      category: "Identidade Visual",
      cover: "/assets/identidade-visual/gael/cover.webp",
      items: [
        "/assets/identidade-visual/gael/item-01.webp",
        "/assets/identidade-visual/gael/item-02.webp",
        "/assets/identidade-visual/gael/item-03.webp",
        "/assets/identidade-visual/gael/item-04.webp",
      ],
    },
    {
      id: "larica",
      title: "Larica Vegan Food",
      category: "Identidade Visual",
      cover: "/assets/identidade-visual/larica/cover.webp",
      items: [
        "/assets/identidade-visual/larica/item-01.webp",
        "/assets/identidade-visual/larica/item-02.webp",
        "/assets/identidade-visual/larica/item-03.webp",
        "/assets/identidade-visual/larica/item-04.webp",
      ],
    },
    {
      id: "pequeno-popular",
      title: "Pequeno&Popular",
      category: "Identidade Visual",
      cover: "/assets/identidade-visual/pequeno-popular/cover.webp",
      items: [
        "/assets/identidade-visual/pequeno-popular/item-01.webp",
        "/assets/identidade-visual/pequeno-popular/item-02.webp",
        "/assets/identidade-visual/pequeno-popular/item-03.webp",
        "/assets/identidade-visual/pequeno-popular/item-04.webp",
      ],
    },
  ];
}

const portfolioFolders = [
  {
    id: "design-digital",
    label: "Design Digital",
    eyebrow: "",
    title: "Design Digital",
    description:
      "Campanhas, social media, criativos e peças digitais desenvolvidas para fortalecer marcas e criar presença visual estratégica.",
    cover: "/assets/design-digital/cover.webp",
    items: createProjectItems("design-digital", 18, "Peça", "Design Digital"),
  },
  {
    id: "identidade-visual",
    label: "Identidade Visual",
    eyebrow: "",
    title: "Projetos de Identidade Visual",
    description:
      "Projetos de identidade visual desenvolvidos de forma estratégica, com aplicações completas pensadas para fortalecer marcas e criar reconhecimento.",
    cover: "/assets/identidade-visual/cover.webp",
    projects: createIdentityProjects(),
  },
  {
    id: "logotipos",
    label: "Logotipos",
    eyebrow: "",
    title: "Logotipos",
    description:
      "Coleção de logotipos, símbolos e construções tipográficas desenvolvidas para diferentes marcas e propostas visuais.",
    cover: "/assets/logotipos/cover.webp",
    items: customProjectItems("logotipos", [
      { title: "Veramadre", type: "Logotipo" },
      { title: "Larica Vegan Food", type: "Logotipo" },
      { title: "Gael - Consultor Imobiliário", type: "Logotipo" },
      { title: "Nova Fase Contabilidade", type: "Logotipo" },
      { title: "Dayse Guimarães", type: "Logotipo" },
      { title: "Gruminhos", type: "Logotipo" },
      { title: "Empório Sonho Doce", type: "Logotipo" },
      { title: "Realiza Lajes", type: "Logotipo" },
      { title: "Innovative", type: "Logotipo" },
      { title: "OdontoMedic Marketing Digital", type: "Logotipo" },
      { title: "LeadMais Marketing Digital", type: "Logotipo" },
      { title: "Capturando Clientes", type: "Logotipo" },
    ]),
  },
  {
    id: "audiovisual",
    label: "Audiovisual",
    eyebrow: "",
    title: "Audiovisual",
    description:
      "Seleção de conteúdos audiovisuais criados para fortalecer narrativas visuais e ampliar a presença digital das marcas.",
    cover: "/assets/audiovisual/cover.webp",
    items: customProjectItems("audiovisual", [
      {
        title: "Maiara Bresolin 01",
        type: "Audiovisual",
        src: "/assets/audiovisual/item-01.webp",
        videoUrl:
          "https://drive.google.com/file/d/1DuN0qGxvTLriLrIgqCmXx5gn7X11s7t2/preview",
      },
      {
        title: "Maiara Bresolin 02",
        type: "Audiovisual",
        src: "/assets/audiovisual/item-02.webp",
        videoUrl:
          "https://drive.google.com/file/d/1yeeKWTFywRekyeClHP6ikh_T5NG1IKxK/preview",
      },
      {
        title: "Maiara Bresolin 03",
        type: "Audiovisual",
        src: "/assets/audiovisual/item-03.webp",
        videoUrl:
          "https://drive.google.com/file/d/1p6ajbttp9msiIy5sODA-Ydc-9gPCpB-j/preview",
      },
      {
        title: "Maiara Bresolin 04",
        type: "Audiovisual",
        src: "/assets/audiovisual/item-04.webp",
        videoUrl:
          "https://drive.google.com/file/d/197Avvm9TEJjsyYv3GWDWuSIZODkkkFrR/preview",
      },
      {
        title: "Maiara Bresolin 05",
        type: "Audiovisual",
        src: "/assets/audiovisual/item-05.webp",
        videoUrl:
          "https://drive.google.com/file/d/1PIrL3l_tT2yUOzU-DJGUlPRP1cj5fwZh/preview",
      },
      {
        title: "Villah Tanah 01",
        type: "Audiovisual",
        src: "/assets/audiovisual/item-06.webp",
        videoUrl:
          "https://drive.google.com/file/d/1DuN0qGxvTLriLrIgqCmXx5gn7X11s7t2/preview",
      },
      {
        title: "Luana Nolasco 01",
        type: "Audiovisual",
        src: "/assets/audiovisual/item-07.webp",
        videoUrl:
          "https://drive.google.com/file/d/1SlJfcnZtss53iRDH0qVKJqKzNTm5nSUH/preview",
      },
      {
        title: "Luana Nolasco 02",
        type: "Audiovisual",
        src: "/assets/audiovisual/item-08.webp",
        videoUrl:
          "https://drive.google.com/file/d/1bHZH4TyEyEihPP6-iqzGyIBau3VnRJCO/preview",
      },
    ]),
  },
];

function Icon({ children }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <Icon>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </Icon>
  );
}

function XIcon() {
  return (
    <Icon>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </Icon>
  );
}

function FolderIcon() {
  return (
    <Icon>
      <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </Icon>
  );
}

function ImageBox({ src, alt, className }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 p-6 text-center text-sm leading-relaxed text-black/45">
        Substitua por
        <br />
        {src}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}

function Header() {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#e8e8e8]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14">
        <a href="#home" className="flex items-center">
          <img
            src="/assets/logo-header.webp"
            alt="Rafael Toledo"
            className="h-8 w-auto object-contain"
          />
        </a>

        <nav className="hidden gap-8 md:flex">
          {[
            { label: "Projetos", href: "#projetos" },
            { label: "Processo", href: "#processo" },
            { label: "Quem sou eu?", href: "#sobre" },
            { label: "Contato", href: "#contato" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#111]/60 transition hover:text-[#111]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full items-center bg-[#0c0c0c] px-6 pb-24 pt-28 text-white md:px-10 lg:px-14"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-14 md:grid-cols-[1.15fr_.85fr] md:items-end">
        <motion.h1
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="hero-title max-w-5xl"
        >
          Design visual para marcas que precisam parecer maiores.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="max-w-xl md:justify-self-end"
        >
          <p className="mb-8 text-lg leading-[1.7] text-white/65">
            Identidade visual, social media, logotipos e peças digitais com
            estética premium, clareza e intenção estratégica.
          </p>

          <a
            href="#contato"
            className="inline-flex items-center gap-3 rounded-full bg-[#e8e8e8] px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-black transition hover:bg-white hover:scale-[1.02]"
          >
            Solicitar orçamento <ArrowIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedIdentityProject, setSelectedIdentityProject] = useState(null);
  const [zoomIndex, setZoomIndex] = useState(null);
  const [showFloatingBack, setShowFloatingBack] = useState(false);
  const [openingLabel, setOpeningLabel] = useState(null);

  const folderDetailRef = useRef(null);
  const folderTopControlsRef = useRef(null);

  const currentItems = selectedIdentityProject
    ? selectedIdentityProject.items.map((src, index) => ({
        title: `Aplicação ${String(index + 1).padStart(2, "0")}`,
        type: selectedIdentityProject.title,
        src,
      }))
    : selectedFolder?.items || [];

  const zoomItem =
    currentItems && zoomIndex !== null ? currentItems[zoomIndex] : null;

  function openFolder(folder) {
    setOpeningLabel(folder.label);

    setTimeout(() => {
      setSelectedFolder(folder);
      setSelectedIdentityProject(null);
      setZoomIndex(null);

      setTimeout(() => {
        folderDetailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
    }, 180);

    setTimeout(() => {
      setOpeningLabel(null);
    }, 520);
  }

  function closeFolder() {
    setSelectedFolder(null);
    setSelectedIdentityProject(null);
    setZoomIndex(null);
    setShowFloatingBack(false);

    setTimeout(() => {
      document.getElementById("projetos")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  }

  function backToIdentityProjects() {
    setOpeningLabel("Projetos de Identidade Visual");

    setTimeout(() => {
      setSelectedIdentityProject(null);
      setZoomIndex(null);

      setTimeout(() => {
        folderDetailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
    }, 160);

    setTimeout(() => {
      setOpeningLabel(null);
    }, 500);
  }

  function openIdentityProject(project) {
    setOpeningLabel(project.title);

    setTimeout(() => {
      setSelectedIdentityProject(project);
      setZoomIndex(null);

      setTimeout(() => {
        folderDetailRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
    }, 180);

    setTimeout(() => {
      setOpeningLabel(null);
    }, 520);
  }

  function openZoom(index) {
    setZoomIndex(index);
  }

  function closeZoom() {
    setZoomIndex(null);
  }

  function nextImage() {
    if (!currentItems.length || zoomIndex === null) return;
    setZoomIndex((zoomIndex + 1) % currentItems.length);
  }

  function previousImage() {
    if (!currentItems.length || zoomIndex === null) return;
    setZoomIndex((zoomIndex - 1 + currentItems.length) % currentItems.length);
  }

  useEffect(() => {
    if (!selectedFolder || !folderTopControlsRef.current) {
      setShowFloatingBack(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingBack(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    observer.observe(folderTopControlsRef.current);

    return () => observer.disconnect();
  }, [selectedFolder, selectedIdentityProject]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (!zoomItem) return;
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "Escape") closeZoom();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomItem, zoomIndex, currentItems.length]);

  return (
    <section
      id="projetos"
      className="relative w-full bg-[#f3f0eb] px-6 py-28 text-[#111] md:px-10 lg:px-14"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-16 grid gap-8 md:grid-cols-[1fr_.7fr] md:items-end">
          <h2 className="section-title max-w-4xl">
            Projetos realizados
          </h2>

          <p className="max-w-lg text-base leading-[1.8] text-black/55 md:justify-self-end">
            Cada área abaixo funciona como uma pasta de projeto. Clique em uma
            categoria e veja cada item ampliado.
          </p>
        </div>

        <motion.div
          layout
          className="grid items-stretch gap-7 md:grid-cols-2 xl:grid-cols-4"
        >
          {portfolioFolders.map((folder) => (
            <motion.button
              key={folder.id}
              layout
              whileHover={{ y: -10, scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openFolder(folder)}
              className="group flex h-full min-h-[560px] flex-col overflow-hidden rounded-[2rem] bg-white text-left shadow-sm transition hover:shadow-2xl"
            >
              <div className="relative h-[340px] shrink-0 overflow-hidden bg-[#111]">
                <ImageBox
                  src={folder.cover}
                  alt={folder.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 z-20 rounded-full bg-white/90 p-3 text-black shadow-sm">
                  <FolderIcon />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="mb-5 text-xs uppercase tracking-[0.22em] text-black/40">
                  {folder.eyebrow}
                </p>

                <h3 className="mb-4 text-3xl font-semibold leading-[1.05] tracking-[-0.04em]">
                  {folder.label}
                </h3>

                <p className="mb-8 text-sm leading-[1.7] text-black/55">
                  {folder.description}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.14em]">
                  Abrir pasta <ArrowIcon />
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedFolder && (
            <motion.div
              ref={folderDetailRef}
              initial={{
                opacity: 0,
                y: 44,
                scale: 0.985,
                filter: "blur(10px)",
              }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                y: 24,
                scale: 0.985,
                filter: "blur(8px)",
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="scroll-mt-24 mt-16 overflow-hidden rounded-[2.5rem] border border-black/10 bg-white shadow-xl"
            >
              <div
                ref={folderTopControlsRef}
                className="border-b border-black/10 bg-[#111] px-7 py-6 text-white md:px-12"
              >
                <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  <span>Projetos</span>
                  <span>/</span>
                  <span>{selectedFolder.label}</span>
                  {selectedIdentityProject && (
                    <>
                      <span>/</span>
                      <span>{selectedIdentityProject.title}</span>
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <motion.h3
                    key={
                      selectedIdentityProject
                        ? selectedIdentityProject.title
                        : selectedFolder.title
                    }
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="text-3xl font-semibold leading-[1] tracking-[-0.04em] text-[#e8e8e8] md:text-5xl"
                  >
                    {selectedIdentityProject
                      ? selectedIdentityProject.title
                      : selectedFolder.title}
                  </motion.h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedFolder.id === "identidade-visual" &&
                      selectedIdentityProject && (
                        <button
                          onClick={backToIdentityProjects}
                          className="rounded-full bg-[#e8e8e8] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.02] hover:bg-white"
                        >
                          ← Voltar aos projetos
                        </button>
                      )}

                    <button
                      onClick={closeFolder}
                      className="rounded-full bg-[#e8e8e8] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.02] hover:bg-white"
                    >
                      ↑ Voltar para todas as pastas
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-7 md:p-12">
                <motion.div
                  key={
                    selectedIdentityProject
                      ? `${selectedIdentityProject.id}-description`
                      : `${selectedFolder.id}-description`
                  }
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 }}
                  className="mb-12 max-w-4xl"
                >
                  <p className="text-2xl leading-[1.55] tracking-[-0.02em] text-black/60 md:text-3xl">
                    {selectedIdentityProject
                      ? "Galeria interna do projeto de identidade visual."
                      : selectedFolder.description}
                  </p>
                </motion.div>

                {selectedFolder.id === "identidade-visual" &&
                !selectedIdentityProject ? (
                  <motion.div
                    key="identity-projects"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.06,
                        },
                      },
                    }}
                    className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3"
                  >
                    {selectedFolder.projects.map((project) => (
                      <motion.button
                        key={project.id}
                        variants={{
                          hidden: { opacity: 0, y: 24 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        whileHover={{ y: -8, scale: 1.012 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => openIdentityProject(project)}
                        className="group overflow-hidden rounded-[1.75rem] bg-[#f3f0eb] text-left transition hover:shadow-xl"
                      >
                        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                          <ImageBox
                            src={project.cover}
                            alt={project.title}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        </div>

                        <div className="p-5">
                          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-black/40">
                            {project.category}
                          </p>

                          <h4 className="text-2xl font-semibold leading-[1.12] tracking-[-0.03em]">
                            {project.title}
                          </h4>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key={
                      selectedIdentityProject
                        ? selectedIdentityProject.id
                        : selectedFolder.id
                    }
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.045,
                        },
                      },
                    }}
                    className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  >
                    {currentItems.map((item, index) => (
                      <motion.button
                        key={item.src}
                        variants={{
                          hidden: { opacity: 0, y: 22 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        whileHover={{ y: -8, scale: 1.012 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => openZoom(index)}
                        className="group overflow-hidden rounded-[1.75rem] bg-[#f3f0eb] text-left transition hover:shadow-xl"
                      >
                        <div
  className={`relative overflow-hidden bg-neutral-200 ${
    selectedIdentityProject
      ? "aspect-video"
      : "aspect-[4/5]"
  }`}
>
  <ImageBox
    src={item.src}
    alt={item.title}
    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
  />

  {item.videoUrl && (
    <>
      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/25" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/85 text-black opacity-0 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </>
  )}
</div>

                        <div className="p-5">
                          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-black/40">
                            {item.type}
                          </p>

                          <h4 className="text-xl font-semibold leading-[1.12] tracking-[-0.03em]">
                            {item.title}
                          </h4>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {openingLabel && !zoomItem && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-black/20 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.28 }}
              className="rounded-full bg-[#111] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#e8e8e8] shadow-2xl"
            >
              Abrindo {openingLabel}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedFolder && !zoomItem && showFloatingBack && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: -2 }}
            onClick={closeFolder}
            className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-2xl backdrop-blur transition"
            aria-label="Fechar pasta e voltar para categorias"
          >
            ↑ Voltar às pastas
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomItem && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeZoom}
          >
            <motion.div
              className="relative max-h-[92vh] w-auto max-w-[92vw] overflow-hidden rounded-[1.5rem] bg-black text-white"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(event, info) => {
                if (info.offset.x < -80) nextImage();
                if (info.offset.x > 80) previousImage();
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {zoomItem.title}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">
                    {zoomIndex + 1} / {currentItems.length}
                  </p>
                </div>

                <button
                  onClick={closeZoom}
                  className="rounded-full border border-white/10 p-3 transition hover:bg-white hover:text-black"
                  aria-label="Fechar"
                >
                  <XIcon />
                </button>
              </div>

              <div className="relative flex h-[82vh] items-center justify-center bg-black p-0">
                <button
                  onClick={previousImage}
                  className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-3xl leading-none text-white backdrop-blur transition hover:bg-white hover:text-black"
                  aria-label="Imagem anterior"
                >
                  ‹
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={zoomItem.videoUrl || zoomItem.src}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.22 }}
                    className="flex h-full w-full items-center justify-center"
                  >
                    {zoomItem.videoUrl ? (
                      <iframe
                        src={zoomItem.videoUrl}
                        title={zoomItem.title}
                        className="h-[82vh] w-[min(92vw,1200px)] rounded-b-[1.5rem]"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    ) : (
                      <ImageBox
                        src={zoomItem.src}
                        alt={zoomItem.title}
                        className="h-full w-auto max-w-full object-contain"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-3xl leading-none text-white backdrop-blur transition hover:bg-white hover:text-black"
                  aria-label="Próxima imagem"
                >
                  ›
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Process() {
  const steps = [
    "Diagnóstico",
    "Direção visual",
    "Criação",
    "Ajustes",
    "Entrega",
  ];

  return (
    <section
      id="processo"
      className="w-full bg-[#f3f0eb] px-6 py-28 text-[#111] md:px-10 lg:px-14"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="process-title mb-16 max-w-4xl text-black">
          Um processo claro para transformar a sua ideia em uma presença visual.
        </h2>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {steps.map((step, index) => (
            <div
              key={step}
              className="grid gap-5 py-9 md:grid-cols-[180px_1fr] md:items-center"
            >
              <span className="text-sm text-black/40">0{index + 1}</span>

              <h3 className="text-3xl font-semibold leading-[1.1] tracking-[-0.035em]">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="sobre"
      className="w-full bg-[#0c0c0c] px-6 py-28 text-white md:px-10 lg:px-14"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-white/5"
        >
          <img
            src="/assets/profile.webp"
            alt="Rafael Toledo"
            className="h-[720px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.22em] text-white/40">
            Sobre
          </p>

          <h2 className="mb-10 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#e8e8e8] md:text-7xl">
            Quem sou eu?
          </h2>

          <div className="space-y-8">
            <p className="max-w-3xl text-[1.4rem] leading-[1.9] text-white/60">
              Sou Rafael Toledo Laranja, designer gráfico formado pela
              Universidade Cruzeiro do Sul (SP), especializado em identidade
              visual, mídias sociais, materiais impressos e edição de vídeos.
            </p>

            <p className="max-w-3xl text-[1.4rem] leading-[1.9] text-white/60">
              Meu objetivo é criar peças que vão além da estética: comunicam,
              fortalecem a marca e geram impacto real.
            </p>

            <p className="max-w-3xl text-[1.4rem] leading-[1.9] text-white/60">
              Entre meus trabalhos, estão projetos desenvolvidos para
              Sorridents, Óticas Diniz e MedicMais, uma das maiores redes de
              clínicas médicas e odontológicas do país.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contato"
      className="w-full bg-[#f3f0eb] px-6 py-28 text-[#111] md:px-10 lg:px-14"
    >
      <div className="mx-auto w-full max-w-[1440px] rounded-[2.5rem] bg-[#111] p-9 text-white md:p-16">
        <h2 className="mb-8 max-w-5xl text-5xl font-semibold leading-[1] tracking-[-0.045em] text-[#e8e8e8] md:text-7xl">
          Vamos criar uma presença visual mais forte para sua marca?
        </h2>

        <a
          href="https://wa.me/5511984371321"
          target="_blank"
  rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[#e8e8e8] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
        >
          Me chame no WhatsApp! <ArrowIcon />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#0c0c0c] font-sans antialiased">
      <Header />
      <Hero />
      <Projects />
      <Process />
      <About />
      <Contact />
    </main>
  );
}