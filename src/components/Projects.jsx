import { motion } from "framer-motion";
import p1 from "../assets/projects/project-1.jpg";
import p2 from "../assets/projects/project-2.jpg";
import p3 from "../assets/projects/project-3.jpg";
import p4 from "../assets/projects/project-4.jpg";
import p5 from "../assets/projects/project-5.jpg";


const Projects = () => {
  const projects = [
    { title: "Clinical Query Assistant (RAG)", img: p1,
      tech: ["LangChain","LlamaIndex","Hugging Face","AWS","FAISS"],
      desc: "LLM + RAG chatbot for clinicians with retrieval evaluation; cut case review time by ~45% and improved answer traceability." },
    { title: "Event-Driven ML Platform", img: p2,
      tech: ["Airflow","SageMaker","MLflow","Lambda","Redshift"],
      desc: "Real-time pipelines for risk prediction; 99.9% uptime, CI/CD for models, and automated performance monitoring." },
    { title: "Customer Segmentation @ Scale", img: p3,
      tech: ["Snowflake","SQL","DBSCAN","Power BI"],
      desc: "Behavioral clustering on 50M+ customers; +35% campaign ROI and LTV uplift." },
    { title: "Personal Portfolio Website", img: p4, link: "https://ramanareddy-ai.github.io/Portfolio/",
      tech: ["React","Vite","TailwindCSS","Framer Motion","GitHub Pages"],
      desc: "Responsive single-page portfolio with animated sections, toolkit, and contact. Deployed on GitHub Pages." },
    { title: "Legal AI Case Management", img: p5, link: "https://github.com/ramanareddy-ai/legal-AI-case-management",
      tech: ["Python","FastAPI","LangChain","RAG","PostgreSQL","Docker"],
      desc: "AI-assisted case workspace with document ingestion and retrieval-augmented generation over filings/notes." },
  ];

  return (
    <section id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-3xl font-bold"
      >
        Projects
      </motion.h2>

      <div>
        {projects.map((p, i) => (
          <div key={i} className="mb-10 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }} className="w-full lg:w-1/4"
            >
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer">
                  <img src={p.img} alt={p.title} className="mb-6 h-48 w-72 rounded object-cover" />
                </a>
              ) : (
                <img src={p.img} alt={p.title} className="mb-6 h-48 w-72 rounded object-cover" />
              )}
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6 }} className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {p.link ? <a className="underline" href={p.link} target="_blank" rel="noreferrer">{p.title}</a> : p.title}
              </h6>
              <p className="mb-3 text-neutral-300">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded bg-neutral-900 px-2 py-1 text-sm text-purple-300">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
