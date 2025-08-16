// src/components/Experience.jsx
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Data Scientist (AI/ML)",
    company: "Cardinal Health",
    dates: "Jul 2024 – Present",
    bullets: [
      "Predictive models for chronic conditions; +38% early intervention; $500K+ savings.",
      "Clinical Query Assistant (domain LLM + RAG); −45% review time; improved traceability.",
      "Event-driven ML pipelines on AWS (S3, Lambda, Redshift, SageMaker) with Airflow & MLflow.",
    ],
  },
  {
    role: "Data Scientist",
    company: "TCS (Tata Consultancy Services)",
    dates: "May 2021 – Jun 2023",
    bullets: [
      "Segmentation on 50M+ customers; +35% campaign ROI; reduced churn.",
      "Propensity/LTV models with XGBoost; +28% conversion for cross-sell.",
      "Real-time fraud detection; ~22% fewer false positives.",
    ],
  },
  {
    role: "Jr. Data Scientist",
    company: "S&P Global",
    dates: "Feb 2020 – Apr 2021",
    bullets: [
      "Multi-agent LLM chatbot (LoRA/QLoRA); +35% relevance; −40% inference cost.",
      "RAG systems with LangChain/LlamaIndex and FAISS/Weaviate.",
      "Airflow-orchestrated deployments on AWS/GCP.",
    ],
  },
];

// animation presets
const sectionTitle = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.08 * i },
  }),
};

const bullet = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const Experience = () => (
  <section id="experience" className="pb-16">
    <motion.h2
      variants={sectionTitle}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="my-12 text-center text-3xl font-bold"
    >
      Experience
    </motion.h2>

    <div className="space-y-8">
      {EXPERIENCES.map((e, idx) => (
        <motion.div
          key={e.company + idx}
          variants={card}
          custom={idx + 1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-neutral-800 p-6"
        >
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold">
              {e.role} · <span className="font-normal">{e.company}</span>
            </h3>
            <span className="whitespace-nowrap text-sm text-neutral-400">
              {e.dates}
            </span>
          </div>

          <ul className="list-disc space-y-2 pl-6 text-neutral-300">
            {e.bullets.map((b, i) => (
              <motion.li
                key={i}
                variants={bullet}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
